<template>
  <div id="app">
    <div class="product-wrapper">
      <ProductCard
        v-for="(item, index) in list"
        :key="item.id"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "./components/ProductCard.vue";
export default {
  name: "App",
  components: {
    ProductCard,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"]),
  },
  mounted() {
    //   fetch("https://random-data-api.com/api/food/random_food?size=30")
    //     .then((blob) => blob.json())
    //     .then((result) => {
    //       this.$store.dispatch("getList", result);
    //     });
    this.$store.dispatch("getList");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
}

.product-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

* {
  box-sizing: border-box;
}
</style>
