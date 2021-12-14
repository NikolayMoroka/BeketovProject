<template>
    <div class="second">
        <v-container class="py-3">
            <div class="text-center mt-3">
                <span class="style_for_main_title">Останні новини</span>
            </div>
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
        background-color: #252775bd !important;
        color: white;
        font-size: 1.2rem;
    }

    .style_for_btn {
        background-color: #252775bd !important;
        color: white;
    }

    .style_for_main_title {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #252775;
        border-bottom: 1px double;
    }
</style>