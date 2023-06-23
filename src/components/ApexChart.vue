<template>
    <div id="chart">
        <apexchart width="1150" height="400" type="line" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
  props: ['graphData'],
    data() {
        return {
            series: [{
              name: "Desktops",
              data: [],
              dates: []
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
    created() {
      this.getAPIData()
    },
    methods: {
      getAPIData() {
        console.log("First: ", this.graphData)
        this.graphData.forEach(val => {
          val.forEach(val2 => {
            val2.insights.data.forEach(val3 => {
              console.log("Val3", val3)
            })
          })
        })
      }
    }
}
</script>

<style>

</style>