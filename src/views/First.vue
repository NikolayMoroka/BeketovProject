<template>
    <div class="first">
        <v-container>
            <v-row>
                <v-col cols="12" class="pb-0 px-0">
                    <v-card height="200" class="card d-flex align-end" @click="goToDetails()">
                        <div class="text-center big_item mb-5">
                           <!-- <v-carousel hide-delimiters>
                               <v-carousel-item
                               v-for="(i, index) in slides"
                                :key="index"
                                :src="getImg(slides[0].img)"
                                style="width: 100%; height: 175px"
                               >
                                <img style="width: 100%; height: 175px" :src="getImg(slides[0].img)" alt="">   
                               </v-carousel-item>
                           </v-carousel> -->

                           <img style="width: 100%; height: 175px" :src="getImg(slides[0].img)" alt="">
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="6" class="pr-0 py-0 px-0">
                    <v-card height="100" class="card d-flex align-center">
                        <div class="text-center px-5">
                            Lorem ipsum dolor sit amet
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="6" class="pl-0 py-0 px-0">
                     <v-card height="100" class="card d-flex align-center">
                        <div class="text-center px-5">
                            Lorem ipsum dolor sit amet
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="6" class="pr-0 py-0 px-0">
                     <v-card height="100" class="card d-flex align-center">
                        <div class="text-center px-5">
                            Lorem ipsum dolor sit amet
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="6" class="pl-0 py-0 px-0">
                     <v-card height="100" class="card d-flex align-center">
                        <div class="text-center px-5">
                            Lorem ipsum dolor sit amet
                        </div>
                    </v-card>
                </v-col>
            </v-row>  

            <v-row>
                <v-col cols="12" class="pt-0 py-0 px-0">
                    <v-card height="100" class="card card_light d-flex align-end">
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
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
        goToDetails() {
            console.log('text')
            this.$router.push({name: 'ShowPage'})
        },

        getImg(img) {
            return require('../assets/'+img)
        },
    }
   
}
</script>

<style scoped>
    .first {
        margin-top: 10vh;
    }

    .card {
        background-color: rgb(163, 163, 163) !important;
        border-radius: 0px !important;
        color: white !important;
    }

    .card_light {
        background-color: rgb(253, 253, 253) !important;
    }

    .big_item {
        font-size: 20px;
    }

    .small_item {

    }
</style>