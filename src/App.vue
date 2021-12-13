<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark style="height: 75px;" class="d-flex align-center "> -->
      
        <!-- <v-col cols="6">
           
        </v-col> -->
    <!-- </v-app-bar> -->
    <v-app-bar color="primary" fixed class="app_bar d-flex align-center">
      <v-row class="d-flex align-center" style="width: 100%">
        <v-col >
          <v-img src="./assets/logoKNAME.png">

          </v-img>
        </v-col>

        <v-col class="text-right">
          <v-btn icon @click="navigation = true">
            <v-icon large color="white">mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-banner width="100%" color="white" v-model="navigation" class="navigation_banner">
          <div style="background-color: transparent" class="text-right">
            <v-btn icon @click="navigation = false">
              <v-icon large color="white">
                mdi-close
              </v-icon>
            </v-btn>
          </div>
          <div v-for="i in 10" :key="i.index">
             item {{i}}
          </div> 
      </v-banner>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    navigation: false,
    itemsNav: [
      {
        id: 1,
        name: '',
        rout: ''
      },
       {
        id: 1,
        name: '',
        rout: ''
      },
       {
        id: 1,
        name: '',
        rout: ''
      },
       {
        id: 1,
        name: '',
        rout: ''
      },
       {
        id: 1,
        name: '',
        rout: ''
      },
    ]
  }),
};
</script>

<style>
  .app_bar {
    height: 75px !important;
    z-index: 1000;
  }

  .navigation_banner {
    /* margin-top: 75px; */
    z-index: 100 !important;
  }

  /* VUETIFY STYLE */
  .v-toolbar__content {
    width: 100%;
  }

  .v-banner__wrapper {
    position: fixed !important;
    width: 100%;
    background-color: aqua !important;
  }

  .style_img_for_news_mobile {
    width:100%;
    height: 250px;
  }
</style>>

