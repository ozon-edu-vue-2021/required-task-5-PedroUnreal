<template>
  <div>
    <div class="product">
      <img :src="src" />
      <div class="price">{{ calcPrice }} руб</div>
      <div v-if="liked.liked" class="star">Избранное</div>
      <div class="description">{{ description }}</div>
      <div class="botton-menu">
        <button @click="putIntoBasket" type="button" class="button">
          Добавить в корзину
        </button>
        <Counter
          :qty="this.qty"
          :id="this.id"
          :key="key"
          :update="this.update"
        />
        <button @click="putIntoLiked" type="button" class="liked">
          Добавить в избранное
        </button>
      </div>
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
    return {
      src: "",
      qty: 0,
      key: 0,
    };
  },
  created() {
    this.calcsrc();
    this.setCurrentQty();
  },
  updated() {
    this.setCurrentQty();
  },
  computed: {
    ...mapState(["list", "basket"]),
    description() {
      return this.list[this.index].description;
    },
    id() {
      return this.list[this.index].id;
    },
    liked() {
      return this.list[this.index];
    },
    calcPrice() {
      return Math.floor((this.list[this.index].id / 27) * 2);
    },
  },
  methods: {
    calcsrc() {
      this.src = require(`../assets/images/${this.index}.webp`);
    },
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
    putIntoLiked() {
      this.$store.commit("putIntoLiked", {
        liked: true,
        id: this.id,
      });
      this.$forceUpdate();
      console.log(this.liked);
    },
  },
};
</script>

<style scoped>
.product {
  display: flex;
  position: relative;
  flex-direction: column;
  padding-bottom: 5px;
  padding-left: 5px;
  border: 1px solid black;
  border-top-left-radius: 12%;
  border-top-right-radius: 12%;
}

.liked {
  position: absolute;
  top: 410px;
  left: 220px;
}
.star {
  position: absolute;
  background-color: rgb(204, 21, 174);
  top: 370px;
  left: 290px;
  border-radius: 10%;
}
.botton-menu {
  display: flex;
  flex-direction: row;
  height: 50px;
}

.price {
  margin-top: 11px;
  font-size: 1.2em;
  font-weight: 700;
}

.description {
  height: 70px;
  overflow: auto;
}

img {
  transform: scale(1.02);
  margin-left: -2px;
}
</style>
