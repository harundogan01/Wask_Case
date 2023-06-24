<template>
    <div id="chart" v-if="graphData.length > 0">
        <apexchart width="100%" height="350" type="line" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
  props: ['graphData'],
    data() {
        return {
            series: [{
              name: "Wask Data",
              data: []
          }],
          chartOptions: {
            chart: {
              height: 350,
              type: 'line',
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight'
            },
            // title: {
            //   text: 'Product Trends by Month',
            //   align: 'left'
            // },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: [],
            }
          }
        }
    },
    watch: {
      graphData() {
        this.getAPIData()
      }
    },
    methods: {
      getAPIData() {
        this.series[0].data = []
        this.chartOptions.xaxis.categories = []
        setTimeout(() => {
          this.graphData.forEach((val) => {
          val.insights.data.forEach((date) => {
            if (this.$parent.$data.clickBtnSelected)
              this.series[0].data.push(date.clicks)
            else if (this.$parent.$data.impressionsBtnSelected)
              this.series[0].data.push(date.impressions)
            else if (this.$parent.$data.spendBtnSelected)
              this.series[0].data.push(date.spend)
            this.chartOptions.xaxis.categories.push(date.date_start)
          })
        })
        }, 1000)
      }
    }
}
</script>

<style>

</style>