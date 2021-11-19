<template>
  <div class="product">
    <h1>Избранное:</h1>
    <div>
      <LikedProduct
        v-for="(item, index) in liked"
        :key="index"
        :index="index"
        :liked="liked"
        :id="liked[index].id"
      />
    </div>
    <router-link to="/" class="button">Назад к каталогу </router-link>
    <router-link to="/basket" class="button">Перейти в корзину</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LikedProduct from "./LikedProduct.vue";

export default {
  name: "Liked",
  components: { LikedProduct },
  //   created() {
  //     const filteredList = this.list.filter((item) => item.liked === true);
  //     this.liked = [...filteredList];
  //   },
  computed: {
    ...mapState(["list", "basket"]),
    ...mapGetters(["getTotal"]),
    liked() {
      return [...this.list.filter((item) => item.liked === true)];
    },
  },
  //props: ["index"],
  data() {
    return {
      //liked: [],
    };
  },
};
</script>

<style scoped>
.product {
  position: relative;
}
.summ {
  position: absolute;
  bottom: 0px;
  right: 60px;
  font-size: 1.2em;
  font-weight: 700;
}
.button {
  margin-left: 10px;
}
</style>
