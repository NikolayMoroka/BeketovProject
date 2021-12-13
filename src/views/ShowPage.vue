<template>
    <div class="showPage mt-16">
        <v-container>
            <v-row>
                <v-col>
                    <div class="title_news"> {{ news.title }} </div>
                    <div style="margin-bottom: 20px;">
                         <v-img :src="getImg(news.img)" class="style_img_for_news"></v-img>
                    </div>
                    <div class="text_news" v-html="news.text"></div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: ['news'],
    data:() => ({

    }),

    computed: {
         
    },

    methods: {
        getImg(img) {
            return require('../assets/'+img)
        },
    }
}
</script>

<style scoped>
    .style_img_for_news {
        width:100%;
    }

    .title_news {
        font-size: 2rem;
        font-weight: 600;
        margin-top: 25px;
        text-align: center;
        margin-bottom: 25px;
        color: #182c62;
        border-top: 3px double;
        border-bottom: 3px double;
    }

    .text_news {
        font-size: 20px;
    }

</style>