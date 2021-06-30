<template>
    <div>
        <a-layout class="layout">
          <a-layout-header>
            <div class="logo" />
            <a-menu
              theme="dark"
              mode="horizontal"
              :style="{ lineHeight: '64px' }"
            >
              <a-menu-item key="1"><router-link to="/">Home</router-link></a-menu-item>
              <a-menu-item key="2"><router-link to="/WhitePaper">White Paper</router-link></a-menu-item>
              <a-menu-item key="3"><ConnectWallet /></a-menu-item>               
            </a-menu>  
          </a-layout-header> 
        </a-layout>    
    </div>
</template>

<script>

import { defineComponent } from 'vue';
import ConnectWallet from "./ConnectWallet";

export default defineComponent({
    name: 'Header',
    components: {
      ConnectWallet,
  },
    setup() {
        
    },
})
</script>

<style scoped>

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>