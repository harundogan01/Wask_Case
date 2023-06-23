<template>
  <div class="main-button-area">
    <div class="leftGroup">
      <span>Select Ad Account</span> 
      <img src="../assets/icons/arrow.svg" />
      <button class="btn firstBtn">Account 1</button>
      <button class="btn secondBtn">Account 2</button>
      <button class="btn thirdBtn">Account 3</button>
    </div>
    <div class="rightGroup">
      <span>Select Metric</span> 
      <img src="../assets/icons/arrow.svg" />
      <button class="btn firstBtn">Click</button>
      <button class="btn secondBtn">Impressions</button>
      <button class="btn thirdBtn">Spend</button>
    </div>
    <apex-chart :graphData="graphData"></apex-chart>
  </div>
</template>

<script>
import ApexChart from "./ApexChart.vue"
import axios from "axios"
export default {
  components: { ApexChart },
  data() {
    return {
      graphData: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      axios.get('https://api.wask.co/demo/myaccounts', {
        headers: {
          'token': '2zcgJnjDyb'
        }
      })
      .then((resp) => {
          if (resp.data.accounts) {
            this.graphData.push(resp.data.accounts)
          }
      })
    }
  }
}
</script>

<style>

</style>