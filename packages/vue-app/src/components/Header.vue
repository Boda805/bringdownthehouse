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
            <a-menu-item key="1">nav 1</a-menu-item>
            <a-menu-item key="2">nav 2</a-menu-item>
            <a-menu-item key="3"><ConnectWallet /></a-menu-item>
                
          </a-menu>
      
        </a-layout-header> 
        </a-layout>    

<a-card hoverable style="width: 300px">
    <template #cover>
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    </template>
    <template class="ant-card-actions" #actions>
      <setting-outlined key="setting" />
      <edit-outlined key="edit" />
      <ellipsis-outlined key="ellipsis" />
    </template>
    <a-card-meta title="Card title" description="This is the description">
      <template #avatar>
        <a-avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </template>
    </a-card-meta>
  </a-card>
   
        
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