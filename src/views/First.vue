<template>
    <div class="first">
        <v-container>
            <v-row class="mb-n4">
                <v-col cols="12" class="pb-0 px-0">
                    <v-card class="card d-flex align-end" @click="goToDetails()">
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
            
            <v-row class="d-flex">
                <v-col cols="6" md="3" class="pa-0">
                    <v-card height="100" :class="{'card_primary_for_big': $vuetify.breakpoint.mdAndUp}" class="card_primary d-flex align-center">
                        <div class="text-center d-flex px-5">
                            <v-icon large color="white">
                                mdi-account
                            </v-icon>
                            <div>
                                Викладачі кафедри
                            </div>
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="6" md="3" class="pa-0">
                    <v-card height="100" :class="{'card_white_for_big': $vuetify.breakpoint.mdAndUp}" class="card_white d-flex align-center">
                        <div class="text-center d-flex px-5">
                            <v-icon large color="white">
                                mdi-check
                            </v-icon>
                            <div>
                                Наші досягнення
                            </div>
                        </div>
                    </v-card>
                </v-col>
                 <v-col cols="6" md="3" class="pa-0">
                    <v-card height="100" :class="{'card_primary_for_big': $vuetify.breakpoint.mdAndUp}" class="card_white d-flex align-center">
                       <div class="text-center d-flex px-5">
                            <v-icon large color="white">
                                mdi-brain
                            </v-icon>
                            <div>
                                Наша наукова робота
                            </div>
                        </div>
                    </v-card>
                </v-col>
                 <v-col cols="6" md="3" class="pa-0">
                    <v-card height="100" class="card_primary d-flex align-center" :class="{'card_white_for_big': $vuetify.breakpoint.mdAndUp}">
                        <div class="text-center d-flex px-5">
                            <v-icon large color="white">
                                mdi-account-multiple-plus-outline
                            </v-icon>
                            <div>
                                Цікаве абітурієнту
                            </div>
                        </div>
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

    computed: {
        className() {
            switch (this.$vuetify.breakpoint.name) {
                case 'md': return 'card_white'
            }
        }
    },

    methods: {
        getImg(img) {
            return require('../assets/'+img)
        },
    }
   
}
</script>

<style scoped>
    .first {
        margin-top: 63px;
    }

    .card_white {
        background-color: #2e3192 !important;
        box-shadow: 0px 0px 2px 2px #2e3192 !important;
        border-radius: 0px !important;
        color: white !important;
    }

    .card_primary {
        background-color: #252775 !important;
        box-shadow: 0px 0px 2px 2px #252775 !important;
        border-radius: 0px !important;
        color: white !important;
    }

    .card_white_for_big {
        background-color: #2e3192 !important;
        box-shadow: 0px -2px 0px 0px #2e3192 !important;
    }

    .card_primary_for_big {
        background-color: #252775 !important;
        box-shadow: 0px -2px 0px 0px #252775 !important;
    }

    .card_light {
        background-color: rgb(253, 253, 253) !important;
    }

    .big_item {
        font-size: 20px;
    }

    .gradient {
        background: linear-gradient(to top, #252775, transparent);
        position: absolute; 
        width: 100%; 
        height: 175px;
    }

    .small_item {

    }

    .style_for_main_title {
        color: white;
        font-size: 26px;
        letter-spacing: 2px;
        font-weight: 300;
    }
</style>