<template>
    <div class="container">
        <div class="col-6 offset-3">
            <div class="card bg-light" id="billing" v-if="contactForm">
                <div class="card-header"><b>Billing Information</b></div>
                <div class="card-body">
                    <div class="alert alert-danger" v-if="empty">
                        Please fill all informations.
                    </div>
                    <form>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>First Name</label>
                                    <input type="text" id="firstName" v-model="firstName" class="form-control"
                                        placeholder="Enter First Name" required>
                                </div>
                                <div class="col-6">
                                    <label>Last Name</label>
                                    <input type="text" id="lastName" v-model="lastName" class="form-control"
                                        placeholder="Enter Last Name" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <div class="input-group">
                                <input type="email" id="email" v-model="email" class="form-control"
                                    placeholder="example@gmail.com" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Phone Number</label>
                            <div class="input-group">
                                <input type="tel" id="phoneNb" v-model="phoneNb" class="form-control"
                                    placeholder="07XXXXXXXX" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>Street Address</label>
                            <div class="input-group">
                                <input type="text" id="address" v-model="address" class="form-control"
                                    placeholder="1 Avenue de la République" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>City</label>
                                    <input type="text" id="city" v-model="city" class="form-control"
                                        placeholder="Villejuif" required>
                                </div>
                                <div class="col-6">
                                    <label>Postal Code</label>
                                    <input type="number" id="postalCode" v-model="postalCode" class="form-control"
                                        placeholder="94800" required>
                                </div>
                            </div>
                        </div>
                        <input class="btn btn-primary btn-block" @click.prevent="contactSubmit()" value="Continue">
                        <input class="btn btn-primary btn-block" @click.prevent="goBack()" value="Go Back" style="background: #cc1029;
                        border: solid #d41535 2px;
                        text-decoration: none;">
                    </form>
                </div>
            </div>


            <div class="card bg-light" id="payment" v-if="paymentForm">
                <div class="card-header"><b>Payment Information</b></div>
                <div class="card-body">
                    <div class="alert alert-success" v-if="nonce">
                        Payment successful !
                        <br>
                        You'll be redirected shortly...
                        <!-- <button class="btn btn-primary btn-block" @click="paymentSuccessful()">Go back to the
                            website</button> -->
                    </div>
                    <div class="alert alert-danger" v-if="error">
                        {{ error }}
                    </div>
                    <form>
                        <div class="form-group">
                            <label>Credit Card Number</label>
                            <div id="creditCardNumber" class="form-control"></div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-6">
                                    <label>Expire Date</label>
                                    <div id="expireDate" class="form-control"></div>
                                </div>
                                <div class="col-6">
                                    <label>CVV</label>
                                    <div id="cvv" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <button class="btn btn-primary btn-block" @click.prevent="payWithCreditCard">Pay
                            {{ this.$route.params.id }}$</button>
                        <hr />
                        <div id="paypalButton"></div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import paypal from 'paypal-checkout';
import braintree from 'braintree-web';
import axios from 'axios';
export default {
    data() {
        return {
            hostedFieldInstance: false,
            nonce: "",
            error: "",
            amount: this.$route.params.id,
            empty: false,
            contactForm: true,
            paymentForm: false,
            firstName: "",
            lastName: "",
            email: "",
            phoneNb: "",
            address: "",
            city: "",
            postalCode: "",

        }
    },
    methods: {
        payWithCreditCard() {
            if (this.hostedFieldInstance) {

                this.error = "";
                this.nonce = "";

                this.hostedFieldInstance.tokenize().then(payLoad => {
                    console.log(payLoad);
                    this.nonce = payLoad.nonce;
                })
                    .catch(err => {
                        console.log(err);
                        this.error = err.message;
                    })
            }
        },
        initPayment() {
            braintree.client.create({
                authorization: "sandbox_fwh4mgck_ddh5cnm5pxjh2p7m"
            })
                .then(clientInstance => {
                    let options = {
                        client: clientInstance,
                        styles: {
                            input: {
                                'font-size': '14px',
                                'font-family': 'Open Sans'
                            }
                        },
                        fields: {
                            number: {
                                selector: '#creditCardNumber',
                                placeholder: 'Enter Credit Card'
                            },
                            cvv: {
                                selector: '#cvv',
                                placeholder: 'Enter CVV'
                            },
                            expirationDate: {
                                selector: '#expireDate',
                                placeholder: '00 / 0000'
                            }
                        }
                    }
                    return Promise.all([
                        braintree.hostedFields.create(options),
                        braintree.paypalCheckout.create({ client: clientInstance })
                    ])
                })
                .then(instances => {

                    const hostedFieldInstance = instances[0];
                    const paypalCheckoutInstance = instances[1];
                    // Use hostedFieldInstance to send data to Braintree
                    this.hostedFieldInstance = hostedFieldInstance;

                    // @todo: Setup PayPal Button
                    return paypal.Button.render({
                        env: 'sandbox',
                        style: {
                            label: 'paypal',
                            size: 'responsive',
                            shape: 'rect'
                        },
                        payment: () => {
                            return paypalCheckoutInstance.createPayment({
                                flow: 'checkout',
                                intent: 'sale',
                                amount: this.amount,
                                displayName: 'Nozama payment system',
                                currency: 'USD'
                            })
                        },
                        onAuthorize: (data) => {
                            return paypalCheckoutInstance.tokenizePayment(data).then(payload => {
                                console.log(payload);
                                this.error = "";
                                this.nonce = payload.nonce;
                            })
                        },
                        onCancel: (data) => {
                            console.log(data);
                            console.log("Payment Cancelled");
                        },
                        onError: (err) => {
                            console.error(err);
                            this.error = "An error occurred while processing the paypal payment.";
                        }
                    }, '#paypalButton')
                })
                .catch(err => {
                    console.log(err);
                });
        },
        delay(n) {
            return new Promise(function (resolve) {
                setTimeout(resolve, n * 1000);
            });
        },
        async paymentSuccessful() {
            try {
                await axios.post(`http://localhost:5000/checkout`, {
                    amount_checkout: this.$route.params.id,
                    status_checkout: "Payment completed",
                    nonce_checkout: this.nonce,
                    firstName_checkout: this.firstName,
                    lastName_checkout: this.lastName,
                    email_checkout: this.email,
                    phoneNb_checkout: this.phoneNb,
                    address_checkout: this.address,
                    city_checkout: this.city,
                    postalCode_checkout: this.postalCode
                });
            } catch (error) {
                console.log(error);
            }
            await this.delay(2);
            this.$router.replace("/").then(() => {
                window.location.reload();
            });
        },
        contactSubmit() {
            if (this.firstName == ""
                || this.lastName == ""
                || this.email == ""
                || this.phoneNb == ""
                || this.address == ""
                || this.city == ""
                || this.postalCode == "") {
                this.empty = true;
            } else {
                this.contactForm = false;
                this.paymentForm = true;
                this.initPayment();
            }
        },
        goBack() {
            this.$router.replace("/basket").then(() => {
                window.location.reload();
            });
        }
    },
    beforeMount() {
        this.contactForm = true;
        this.paymentForm = false;
    },
    watch: {
        nonce: function () {
            this.paymentSuccessful();
        }
    }
}
</script>
  
<style scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");

body {
    padding: 20px;
}

.container {
    padding-top: 75px;
}

#billing {
    margin-bottom: 50px;
}

#payment {
    margin-bottom: 200px;
}
</style>