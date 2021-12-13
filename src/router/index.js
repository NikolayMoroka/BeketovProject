import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ShowPage from "../views/ShowPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/news",
    name: "ShowPage",
    component: ShowPage,
    props: true
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
