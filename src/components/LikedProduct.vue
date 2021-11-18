<template>
  <div>
    <div class="product">
        {{id}}
      <div class="description">{{ description }}</div>
      <div class="price">{{ calcPrice }} руб</div>
      <button @click="putIntoBasket" type="button" class="button">
        Добавить в корзину
      </button>
      <div class="liked">
        <button @click="putIntoLiked" type="button" class="button">
          Удалить из избранного
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LikedCard",
  props: ["index", "liked", "id"],
  computed: {
    ...mapState(["list", "basket"]),
    description() {
      return this.list.find((item) => item.id === this.id).description;
    },
    calcPrice() {
      return Math.floor(((this.list.find((item) => item.id === this.id).id) / 27) * 2);
    },
    calcId() {
      return this.list.find((item) => item.id === this.id).id;
    },
    isLiked() {
      return this.list.find((item) => item.id === this.id).liked;
    },
  },
  methods: {
    putIntoBasket() {
      this.key++;
      if (this.basket.findIndex((item) => item.id === this.calcId) === -1) {
        this.$store.commit("putIntoBasket", {
          description: this.description,
          price: this.calcPrice,
          pictureId: this.index,
          id: this.calcId,
          qty: 10,
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
      if (!this.isLiked) {
        this.$store.commit("putIntoLiked", {
          liked: true,
          id: this.calcId,
        });
      } else {
        this.$store.commit("putIntoLiked", {
          liked: false,
          id: this.calcId,
        });
      }
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

.liked {
  margin-left: 10px;
}

img {
  max-height: 100px;
}
</style>
