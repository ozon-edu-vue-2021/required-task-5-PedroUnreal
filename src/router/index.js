import Vue from "vue";
import Router from "vue-router";

import Catalogue from "../components/Catalogue.vue";
import Basket from "../components/Basket.vue";
import Liked from "../components/Liked.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/liked",
      component: Liked,
    },
    {
      path: "/basket",
      component: Basket,
    },
    {
      path: "/",
      component: Catalogue,
    },
  ],
});
