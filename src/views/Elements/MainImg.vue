<template>
    <v-row class="mb-n4">
    <v-col cols="12" class="pb-0 px-0">
        <v-card class="hidden-md-and-down card d-flex align-end">
            <div class="text-center big_item">
                <img style="width: 100%; height: 175px; margin-bottom: -8px;" :src="getImg(slides[0].img)" alt="">
            </div>
            <div class="gradient">
                    <div class="text-center" style="margin-top: 17%">
                    <span class="style_for_main_title">КАФЕДРА ЕЛЕКТРИЧНОГО ТРАНСУПОРТ</span>
                </div>
            </div>
        </v-card>
    </v-col>
</v-row>
</template>

<script>
export default {
    data:() => ({
         slides: [
            {
                id: 1,
                img: '2021-1.jpg'
            }
        ]
    }),

    methods: {
        getImg(img) {
            return require('../../assets/'+img)
        },
    } 
}
</script>

<style scoped>
    .big_item {
        font-size: 20px;
    }

    .gradient {
        background: linear-gradient(to top, #252775, transparent);
        position: absolute; 
        width: 100%; 
        height: 175px;
    }

    .style_for_main_title {
        color: white;
        font-size: 26px;
        letter-spacing: 2px;
        font-weight: 300;
    }
</style>