<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize the Vue part of
      <br />this project, check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <!-- Remove the "display: none" style and open the JavaScript console in the browser to see what this function does -->
    <button id="readOnchainData" @click="readOnchainData">Read On-Chain Balance</button>

  </div>
</template>

<script>
  import { Contract } from "@ethersproject/contracts";
  import { getDefaultProvider } from "@ethersproject/providers";
  import { addresses, abis } from "@project/contracts";
  import GET_TRANSFERS from "../graphql/subgraph";
  import { defineComponent, onMounted  } from 'vue'

  export default defineComponent({
    name: 'HelloWorld',
    methods: {
      readOnchainData: async function () {
        // Should replace with the end-user wallet, e.g. Metamask
        const defaultProvider = getDefaultProvider();
        // Create an instance of an ethers.js Contract
        // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
        const ceaErc20 = new Contract(addresses.ceaErc20, abis.erc20, defaultProvider);
        // A pre-defined address that owns some CEAERC20 tokens
        const tokenBalance = await ceaErc20.balanceOf("0x8A4F0832F661DB078A535AC0E427C41F1BD90820");
        console.log({ tokenBalance: tokenBalance.toString() });
      },
    },
    props: {
      msg: String,
    },
    
    
    setup() {

      onMounted(async () => {
      try {
        const { data, loading, stale } = await this.$apollo.query({
          query: GET_TRANSFERS,
        });
        if (!loading && !stale && data && data.transfers) {
          console.log({ transfers: data.transfers });
        }
      } catch (error) {
        console.error("Error while pulling data from the subgraph:", error);
      }
      console.log("testtesttest");
      });
      
    },

  });
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    margin-top: 24px;
  }

  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
