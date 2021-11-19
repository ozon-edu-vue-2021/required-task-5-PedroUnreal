<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "App",

  computed: {
    ...mapState(["list", "basket"]),
  },
  mounted() {
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
body {
  margin-bottom: 2px;
  margin: 0 auto;
}
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

.button {
  display: inline-block;
  color: white;
  font-size: 1em;
  text-decoration: none;
  padding: 0.5em 2em;
  outline: none;
  border-width: 2px 0;
  border-style: solid none;
  border-color: #fdbe33 #000 #d77206;
  border-radius: 6px;
  background: linear-gradient(#f3ae0f, #e38916) #e38916;
  transition: 0.2s;
}
.button:hover {
  background: linear-gradient(#f5ae00, #f59500) #f5ae00;
}

.button:active {
  background: linear-gradient(#f59500, #f5ae00) #f59500;
}
img {
  border-radius: 10%;
}

button {
  cursor: pointer;
}
</style>
