import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    list: [],
    basket: [],
  }),
  mutations: {
    setProductList: (state, newList) => {
      state.list = newList;
    },
    putIntoBasket: (state, newProduct) => {
      state.basket.push(newProduct);
    },
    putIntoLiked: (state, { liked, id }) => {
      const likedItemIndex = state.list.findIndex((item) => item.id === id);

      if (likedItemIndex !== -1) {
        const newList = [...state.list];
        newList.splice(likedItemIndex, 1, {
          ...state.list[likedItemIndex],
          liked: liked,
        });

        state.list = [...newList];
      }
    },
    changeQty: (state, { qty, id }) => {
      state.basket.forEach((item, index) =>
        item.id === id
          ? qty === 0
            ? state.basket.splice(index, 1)
            : (item.qty = qty)
          : ""
      );
    },
  },
  actions: {
    getList: async (context) => {
      let list = await fetch(
        "https://random-data-api.com/api/food/random_food?size=12"
      );
      list = await list.json();
      context.commit("setProductList", list);
    },
  },
  getters: {
    getTotal: (state) => {
      return state.basket.reduce((accumulator, currentValue) => {
        currentValue = currentValue.price * currentValue.qty;
        return accumulator + currentValue;
      }, 0);
    },
  },
});

// {"id":3603,
// "uid":"96eadfcb-f7e8-4fe4-8a3e-3477596da18b",
// "dish":"Pasta with Tomato and Basil",
// "description":"Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
// "ingredient":"Elderberry",
// "measurement":"1/2 cup"}
