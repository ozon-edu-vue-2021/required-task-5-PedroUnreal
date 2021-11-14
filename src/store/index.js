import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    list: [],
  }),
  mutations: {
    setProductList: (state, newList) => {
      state.list = newList;
    },
  },
  actions: {
    getList: (context, payload) => {
      context.commit("setProductList", payload);
    },
  },
});

// {"id":3603,
// "uid":"96eadfcb-f7e8-4fe4-8a3e-3477596da18b",
// "dish":"Pasta with Tomato and Basil",
// "description":"Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
// "ingredient":"Elderberry",
// "measurement":"1/2 cup"}
