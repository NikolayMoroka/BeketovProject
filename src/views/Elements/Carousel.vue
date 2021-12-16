<template>
     <v-carousel
        height="100%"
        cycle
        hide-delimiters
        :show-arrows="false"
    >
        <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        style="height: 250px"
        >
        <v-sheet
    
        >
            <v-row
            
            align="center"
            justify="center"
            >
            <img width="100%" height="100%" style="position: absolute; top: 0px;" :src="getImg(slide.img)" alt="">
            <div class="d-flex align-center justify-center gradient">
                <div class="style_for_main_title text-center">
                    <span>КАФЕДРА ЕЛЕКТРИЧНОГО ТРАНСУПОРТУ</span> 
                </div>
            </div>
            
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
</template>

<script>
export default {
    data () {
      return {
         slides: [
            {
                id: 1,
                img: '2021-1.jpg'
            },
            {
                id: 2,
                img: '2021-2.jpg'
            },
            {
                id: 3,
                img: '2021-3.jpg'
            },
            {
                id: 4,
                img: '2021-4.jpg'
            },
            {
                id: 5,
                img: '2021-5.jpg'
            },
        ]
      }
    },

    methods: {
        getImg(img) {
            return require('../../assets/'+img)
        },
    }
}
</script>

<style scoped>
     .gradient {
        background: linear-gradient(to top, #252775, transparent);
        position: absolute;
        width: 100%;
        height: 100%; 
        top: 0px; 
        z-index: 5;
    }

    .style_for_main_title {
        color: white;
        font-size: 33px;
        letter-spacing: 2px;
        font-weight: 400;
    }
</style>