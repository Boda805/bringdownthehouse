<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/WhitePaper">White Paper</router-link>
    </div>
    <router-view />    
    <HelloWorld msg="Bring Down the House" />

  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header";
import router from "./router"



export default {
  name: "EthereumApp",
  components: {
    HelloWorld,
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
