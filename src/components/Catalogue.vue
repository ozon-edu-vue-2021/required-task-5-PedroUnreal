<template>
  <div>
    <div v-if="this.basket.length > 0 || isLiked" class="order">
      <router-link to="/basket" class="button" @click="hideProducts"
        >Перейти к оформлению
        <div class="counter-dot">{{ basket.length }}</div></router-link
      >
      <div class="liked">
        <router-link to="/liked" class="button" @click="hideProducts"
          >Перейти к избранному</router-link
        >
      </div>
    </div>
    <div v-if="visible" class="product-wrapper">
      <ProductCard
        v-for="(item, index) in list"
        :key="item.id"
        :index="index"
      />
    </div>
    <div v-else>
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "./ProductCard.vue";
export default {
  name: "Catalogue",
  components: {
    ProductCard,
  },
  data() {
    return {
      visible: true,
      activeBtn: "",
    };
  },
  computed: {
    ...mapState(["list", "basket"]),
    isLiked() {
      return this.list.some((item) => item.liked === true);
    },
  },
  mounted() {
    //   fetch("https://random-data-api.com/api/food/random_food?size=30")
    //     .then((blob) => blob.json())
    //     .then((result) => {
    //       this.$store.dispatch("getList", result);
    //     });
    //this.$store.dispatch("getList");
  },
  methods: {
    hideProducts() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

html,
body {
  margin-bottom: 2px;
}
#app {
  height: 100%;
}
.order {
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  height: 150px;
  z-index: 2;
  border: 3px solid rgb(233, 48, 79);
  padding-left: 20px;
}

.product-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
}

* {
  box-sizing: border-box;
}
.order .button {
  position: relative;
}
.liked {
  margin-left: 20px;
}

.counter-dot {
  position: absolute;
  left: 200px;
  top: -30px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background: rgb(209, 33, 121);
  margin: 1em;
  border-radius: 50%;
  text-align: center;
  font-weight: 700;
  font-size: 1.2em;
}
</style>
