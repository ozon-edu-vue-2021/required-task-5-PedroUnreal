<template>
  <div class="product">
    <h1>Избранное:</h1>
    <div>
      <LikedProduct
        v-for="(item, index) in liked"
        :key="index"
        :index="index"
        :liked="liked"
      />
    </div>
    <router-link to="/" class="button">Назад к каталогу </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import LikedProduct from "./LikedProduct.vue";

export default {
  name: "Liked",
  components: { LikedProduct },
  created() {
    this.liked = this.list.filter((item) => item.liked === true);
    console.log(this.liked);
  },
  computed: {
    ...mapState(["list", "basket"]),
    ...mapGetters(["getTotal"]),
  },
  //props: ["index"],
  data() {
    return {
      liked: [],
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
</style>
