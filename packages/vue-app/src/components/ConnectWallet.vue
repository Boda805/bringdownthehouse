<template>
    <div>
        <h1>Connect Wallet</h1>   
        <div>{{ address }}</div>
        <Button @click="connectWallet">Connect Wallet</Button>
        <a-button type="primary">Primary</a-button>
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { ethers } from "ethers";
//import { Button } from "ant-design-vue";
export default defineComponent({
  name: 'ConnectWallet',
  props: {
    address1: {
      type: String,
      required: true
        }
    },
    setup() {
        const address = ref([])
        const provider = ref()
        const signer = ref()
        return { address, provider, signer }       
    },

    methods: {
        connectWallet: async function () {
           this.address = await window.ethereum.request({ method: 'eth_requestAccounts' })
           this.provider = new ethers.providers.Web3Provider(window.ethereum) 
           this.signer = this.provider.getSigner()
        }
    }
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