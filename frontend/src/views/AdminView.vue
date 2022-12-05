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

        <div @dragover.prevent @drop.prevent>
            <input type="file" multiple @change="uploadFile" />
        </div>

        <input type="submit" value="Submit">

    </form>
</template>

<script>

export default {
    data() {
        return {
            file: []
        }
    },
    methods: {
        uploadFile(e) {
            this.File = e.target.files;
        },
    }
}
</script>