<template>
  <div>
    <div class="product">
      <div class="description">{{ description }}</div>
      <div class="price">{{ calcPrice }} руб</div>
      <button @click="putIntoBasket" type="button" class="button">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LikedCard",
  props: ["index", "liked"],
  computed: {
    ...mapState(["list", "basket"]),
    description() {
      return this.liked[this.index].description;
    },
    calcPrice() {
      return Math.floor((this.list[this.index].id / 27) * 2);
    },
    calcId() {
      return this.liked[this.index].id;
    },
  },
  methods: {
    putIntoBasket() {
      this.key++;
      if (this.basket.findIndex((item) => item.id === this.id) === -1) {
        this.$store.commit("putIntoBasket", {
          description: this.description,
          price: this.calcPrice,
          pictureId: this.index,
          id: this.id,
          qty: 1,
        });
        this.qty = 1;
      } else {
        this.increaseQty();
      }
    },
    increaseQty() {
      this.qty++;
      this.$store.commit("changeQty", {
        qty: this.qty,
        id: this.id,
      });
    },
    setCurrentQty() {
      this.basket.forEach((item) =>
        item.id === this.id ? (this.qty = item.qty) : ""
      );
    },
    update() {
      this.qty = this.localQty;
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
.button {
  height: 60px;
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
