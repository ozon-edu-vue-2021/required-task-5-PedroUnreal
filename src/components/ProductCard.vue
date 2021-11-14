<template>
  <div class="product">
    <img :src="src" />
    {{ description }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ProductCard",
  props: ["index"],
  data() {
    return {
      src: "",
    };
  },
  created() {
    this.calcsrc();
  },
  computed: {
    ...mapState(["list"]),
    description() {
      return this.list[this.index].description;
    },
  },
  methods: {
    calcsrc() {
      this.src = require(`../assets/images/${this.index}.webp`);
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
  display: block;
  border: 1px solid black;
}
</style>
