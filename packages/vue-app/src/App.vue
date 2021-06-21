<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/ethereumLogo.png" width="205px" height="342px" />
    <ConnectWallet address1="grab user address" />
    <HelloWorld msg="Bring Down the House" />
    
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ConnectWallet from "./components/ConnectWallet";

export default {
  name: "EthereumApp",
  components: {
    HelloWorld,
    ConnectWallet,
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
  margin-top: 60px;
}
</style>
