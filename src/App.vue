<template>
  <div id="app">
    {{accounts}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: null,
    }
  },
  components: {},

  async created() {
    let web3
    const Web3 = window.Web3 || undefined
    if (window.ethereum && Web3) {
      await window.ethereum.request({method:'eth_requestAccounts'}).catch(() => null)
      web3 = new Web3(window.ethereum)

      if (web3) {
        web3.eth.getAccounts().then(result => {
          this.accounts = result
        })
      }

    }
  }
}
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
