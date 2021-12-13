<template>
    <div class="soon">
        <v-container class="text-center">
            <v-row class="d-flex justify-center">
                <v-col v-for="i in 6" :key="i.index" cols="5" class="ma-2" style="height: 50px; background: #fff;"></v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .soon {
        background-color: #252775;
    }
</style>