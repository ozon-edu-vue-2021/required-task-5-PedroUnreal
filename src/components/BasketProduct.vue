<template>
  <div>
    <div class="product">
      <img :src="src" />
      <div class="description">{{ description }}</div>
      <div class="price">{{ calcPrice }} руб</div>
      <div class="price">{{ calcQty }} шт</div>
      <div><Counter :qty="calcQty" :id="calcId" class="counter" /></div>
      <div class="price">Сумма: {{ calcQty * calcPrice }} руб</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Counter from "./Counter.vue";

export default {
  name: "ProductCard",
  components: { Counter },
  props: ["index"],
  data() {
    return { src: "" };
  },
  created() {
    this.calcsrc();
  },
  computed: {
    ...mapState(["list", "basket"]),
    description() {
      return this.basket[this.index].description;
    },
    calcPrice() {
      return this.basket[this.index].price;
    },
    calcQty() {
      return this.basket[this.index].qty;
    },
    calcId() {
      return this.basket[this.index].id;
    },
  },
  methods: {
    calcsrc() {
      this.src = require(`../assets/images/${
        this.basket[this.index].pictureId
      }.webp`);
    },
  },
};

// { "id": 5581,
// "uid": "aae0750e-a18b-4713-b360-d004381be989",
// "dish": "Scotch Eggs",
// "description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
// "ingredient": "Haloumi",
// "measurement": "1/4 tablespoon" }
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
.price {
  justify-self: center;
  font-size: 1.2em;
  font-weight: 700;
}
.counter {
  margin: -10px;
}

.description {
  margin-bottom: 25px;
  min-height: 100px;
}

img {
  max-height: 100px;
}
</style>
