<template>
    <div>
        <a-button v-if="address.length === 0" type="primary" @click="connectWallet">Connect Wallet</a-button>
        <a-button v-if="address.length !== 0" type="primary">{{ addressSpliced }}</a-button>
    </div>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { ethers } from "ethers";

export default defineComponent({
  name: 'ConnectWallet',
  props: {

    },
    setup() {     
        const address = ref([])
        const addressSpliced = ref()
        const provider = ref()
        const signer = ref()
        return { address, addressSpliced, provider, signer }       
    },

    methods: {
        connectWallet: async function () {
           this.address = await window.ethereum.request({ method: 'eth_requestAccounts' })
           this.provider = new ethers.providers.Web3Provider(window.ethereum) 
           this.signer = this.provider.getSigner()
        },

        spliceAddress: function() {
            const front = this.address[0].slice(0, 4)
            const end = this.address[0].slice(38, 42)
            this.addressSpliced = front + '...' + end
            console.log(this.addressSpliced)
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