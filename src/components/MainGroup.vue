<template>
  <div class="main-button-area">
    <div class="leftGroup">
      <span>Select Ad Account</span> 
      <img :src="require('../assets/icons/arrow.svg')" />
      <v-btn v-model="firstAccSelected" @click="getAPIDataBySelectedBtn('account')" size="x-large" :class="firstAccSelected ? 'bg-black' : 'bg-light'">Account 1</v-btn>
      <v-btn v-model="secondAccSelected" size="x-large" @click="getAPIDataBySelectedBtn('account2')" :class="secondAccSelected ? 'bg-black' : 'bg-light'">Account 2</v-btn>
      <v-btn v-model="thirdAccSelected" size="x-large" @click="getAPIDataBySelectedBtn('account3')" :class="thirdAccSelected ? 'bg-black' : 'bg-light'">Account 3</v-btn>
    </div>
    <div class="rightGroup">
      <span>Select Metric</span> 
      <img :src="require('../assets/icons/arrow.svg')" />
      <v-btn v-model="clickBtnSelected" size="x-large" @click="getAPIDataBySelectedBtn('click')" :class="clickBtnSelected ? 'bg-black' : 'bg-light'">Click</v-btn>
      <v-btn v-model="impressionsBtnSelected" size="x-large" @click="getAPIDataBySelectedBtn('impressions')" :class="impressionsBtnSelected ? 'bg-black' : 'bg-light'">Impressions</v-btn>
      <v-btn v-model="spendBtnSelected" size="x-large" @click="getAPIDataBySelectedBtn('spend',)" :class="spendBtnSelected ? 'bg-black' : 'bg-light'">Spend</v-btn>
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
      graphData: [],
      firstAccSelected: true,
      secondAccSelected: false,
      thirdAccSelected: false,
      clickBtnSelected: true,
      impressionsBtnSelected: false,
      spendBtnSelected: false
    }
  },
  mounted() {
    this.getAPIDataBySelectedBtn()
  },
  methods: {
    getData() {
      this.graphData = [];
      axios.get('https://api.wask.co/demo/myaccounts', {
        headers: {
          'token': '2zcgJnjDyb'
        }
      })
      .then((resp) => {
          if (resp.data.accounts) {
            resp.data.accounts.forEach((account) => {
              if (this.firstAccSelected) {
                if (account.id === 'act_147')
                  this.graphData.push(account)
              }
              else if (this.secondAccSelected) {
                if (account.id === 'act_258')
                  this.graphData.push(account)
              }
              else if (this.thirdAccSelected) {
                if (account.id === 'act_369')
                  this.graphData.push(account)
              }
            })
          }
      })
    },
    getAPIDataBySelectedBtn(val) {
      
      switch (val) {
        case 'account':
          this.setFalseAllAccounts()
          this.firstAccSelected = true
          break;
        case 'account2':
          this.setFalseAllAccounts()
          this.secondAccSelected = true
          break;
        case 'account3':
          this.setFalseAllAccounts()
          this.thirdAccSelected = true
          break;
        case 'click':
          this.setFalseAllMetrics()
          this.clickBtnSelected = true
          break;
        case 'impressions':
          this.setFalseAllMetrics()
          this.impressionsBtnSelected = true
          break;
        case 'spend':
          this.setFalseAllMetrics()
          this.spendBtnSelected = true
          break;
      }
      this.getData()

    },
    setFalseAllAccounts() {
      this.firstAccSelected = false
      this.secondAccSelected = false
      this.thirdAccSelected = false
    },
    setFalseAllMetrics() {
      this.clickBtnSelected = false
      this.impressionsBtnSelected = false
      this.spendBtnSelected = false
    }
  }
}
</script>

<style>

</style>