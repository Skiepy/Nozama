<template>
    <div class="admin">
        <h1>This is the admin page</h1>
    </div>

    <form id="form">

        <label for="Pname">Product name :</label><br>
        <input type="text" id="Pname" name="Pname"><br>

        <label for="Description">Description :</label><br>
        <input type="text" id="Description" name="Description"><br>

        <label for="Price">Price (ZAR):</label><br>
        <input type="text" id="Price" name="Price"><br>

        <div id="picture"></div>

    </form>
</template>

<script>

src="https://cdn.jsdelivr.net/npm/vue@2.6.12";

const app = new Vue({
    data: () => ({ File: [] }),
    template: `
    <div style="border-style:solid;" @dragover.prevent @drop.prevent>
        <input type="file" multiple @change="uploadFile" />
        <div @drop="dragFile" style="background-color:green;margin-bottom:10px;padding:10px;">
            Or drag the file here
            <div v-if="File.length">
                <ul v-for="file in File" :key="file">
                    <li>{{ file.name }}</li>
                </ul>
            </div>
        </div>
    </div>
    `,
    methods: {
        uploadFile(e) {
            this.File = e.target.files;
        },
        dragFile(e) {
            this.File = e.dataTransfer.files;
        },
    }
});
app.$mount("#picture");

</script>