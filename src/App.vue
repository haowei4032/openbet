<template>
  <div id="app">
    <div>account: {{accounts}}</div>
    <div>balance: {{balances}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: null,
      balances: '0.00',
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
        this.accounts = await web3.eth.getAccounts()
        this.balances = await web3.eth.getBalance(this.accounts[0]) 
        this.balances = web3.utils.fromWei(this.balances)

        //console.log(new Web3.utils.BN( '5192959751830242563' ).div(Web3.utils.BN('2')).toString())
        //console.log( new web3.utils.BN('5192959751830242563').div(new web3.utils.BN('1000000000000000000')).toFixed )
        //console.log( new web3.utils.BN('7000000000000000000').sub(new web3.utils.BN('3000000000000000000')).toString() )
        //console.log( new web3.utils.BN('7000000000000000000').mul(new web3.utils.BN('3')).toString() )
        //console.log( new web3.utils.BN('8000000000000000000').div(new web3.utils.BN('4')).toString() )

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
