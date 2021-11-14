<template>
  <div id="app">{{ list }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["list"]),
  },
  mounted() {
    fetch("https://random-data-api.com/api/food/random_food?size=30")
      .then((blob) => blob.json())
      .then((result) => {
        this.$store.dispatch("getList", result);
      });
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

* {
  box-sizing: border-box;
}
</style>
