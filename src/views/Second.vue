<template>
    <div class="second">
        <v-container class="py-3">
            <div v-for="i in news" :key="i.index" class="my-5">
                <v-col class="pa-3">
                    <v-card @click="goToDetails(i)">
                        <v-img :src="getImg(i.img)" class="style_img_for_news_mobile align-end">
                            <v-card-title class="style_for_title">{{ i.title }}</v-card-title>
                        </v-img>
                    </v-card>
                </v-col>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data:() => ({

    }),

    computed: {
        news() {
            // console.log(this.$store.state.news.arrNews)
            return this.$store.state.news.arrNews
        },
    },

    methods: {
        getImg(img) {
            return require('../assets/'+img)
        },

        goToDetails(news) {

            this.$router.push({name: 'ShowPage', params: {news: news}})
        }
    }
}
</script>

<style scoped>
    .second {
        background-color: #FFF;
    }

    .style_for_title {
        background-color: #8a2be299 !important;
        color: white;
        font-size: 1.2rem;
    }
</style>