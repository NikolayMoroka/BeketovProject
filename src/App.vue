<template>
  <v-app>
    <v-app-bar color="#252775" fixed class="app_bar d-flex align-center">
      <v-row class="d-flex align-center" style="width: 100%">
        <v-col>
         <router-link :to="{name: 'Home'}">
           <v-img style="width: 180px" src="./assets/logoKNAME.png"></v-img>
         </router-link>
        </v-col>

        <v-col class="text-right">
          <v-btn icon @click="navigation = true">
            <v-icon large color="white">mdi-menu</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer fixed width="100%" v-model="navigation" class="navigation_banner pa-3">
          <div style="background-color: transparent" class="app_bar d-flex justify-space-between">
            <div>
              <v-img style="width: 180px" src="./assets/logoKNAME.png"></v-img>
            </div>
            
            <div class="d-flex align-center">
              <v-btn icon @click="navigation = false">
                <v-icon large color="white">
                  mdi-close
                </v-icon>
              </v-btn>
            </div>
            
          </div>
          <v-card v-for="i in itemsNav" :key="i.index" class="text-center mt-2 pa-3 ">
            <div @click="clickBtn(i)" class="d-flex text-center">
              <v-col cols="1" class="pa-2"></v-col>

              <v-col cols="10" class="d-flex align-center justify-center pa-2">
                <span class="text_fo_nav">{{i.name}}</span>
              </v-col>

              <v-col cols="1" class="pa-2">
                <div v-if="i.list">
                  <v-icon v-if="id === i.id && navigationItem === true" class="text-right">
                    mdi-chevron-up
                  </v-icon>

                  <v-icon v-else class="text-right">
                    mdi-chevron-down
                  </v-icon>
                </div>
              </v-col>
            </div>

            <div v-if="id === i.id && navigationItem === true">
              <v-card v-for="item in list" :key="item.listName" class="text-center mt-2 pa-3" style="background: #252775">
                <div @click="clickBtn()" class="d-flex text-center">
                  <v-col cols="12" class="d-flex align-center justify-center pa-2">
                    <span style="color: white" class="text_fo_nav">{{item.listName}}</span>
                  </v-col>
                </div>
              </v-card> 
            </div>

          </v-card> 
        
      </v-navigation-drawer>
      <router-view/>
      
      <Soon/>
    </v-main>
  </v-app>
</template>

<script>
import Soon from "./views/Soon.vue"
export default {
  name: "App",
  components: {
    Soon
  },
  data: () => ({
    navigation: false,
    navigationItem: false,
    list: '',
    id: 0,
    itemsNav: [
      {
        id: 1,
        name: 'Про кафедру',
        list: [
          {
            listId: 1,
            listName: 'Новини кафедри'
          },
          {
            listName: 'Склад кафедри'
          },
          {
            listName: 'Наукова діяльність'
          },
        ]
      },

       {
        id: 2,
        name: 'Студенту',
        list: [
          {
            listId: 2,
            listName: 'Розклад'
          },
          {
            listName: 'Дистанційне навчання'
          },
          {
            listName: 'Конкурси студентських наукових робіт'
          },
          {
            listName: 'Бібліотека'
          },
          {
            listName: 'Військова підготовка'
          },
        ]
      },
       {
        id: 3,
        name: 'Абітурієнту',
        list: [
          {
            listId: 3,
            listName: 'Спеціальності'
          },
          {
            listName: 'Для випускників шкіл'
          },
          {
            listName: 'Для випускників технікумів та коледжей'
          },
          {
            listName: 'Для бакалаврів'
          },
          {
            listName: 'Заочна форма навчання'
          },
          {
            listName: 'Професіограма'
          },
        ]
      },
       {
        id: 4,
        name: 'Контакти',
        rout: 'ct'
      },
    ]
  }),

  methods: {
    clickBtn(i) {
      if(i.list) {
        this.list = i.list
        this.id = i.list[0].listId
        this.navigationItem = !this.navigationItem
      } else if(i.rout) {
        console.log(i.rout)
      }
    }
  }
};
</script>

<style>
  .app_bar {
    height: 75px !important;
    z-index: 1000;
  }

  .navigation_banner {
    z-index: 100 !important;
    background-color: #252775 !important;
    max-height: 70vh;
  }

  /* VUETIFY STYLE */
  .v-toolbar__content {
    width: 100%;
  }

  .v-banner__wrapper {
    position: fixed !important;
    width: 100%;
    background-color: #252775 !important;
  }

  .style_img_for_news_mobile {
    width:100%;
    height: 250px;
  } 

  .text_fo_nav {
    text-transform: uppercase;
  }
</style>>

