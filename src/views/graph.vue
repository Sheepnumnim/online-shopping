<template>
    <div>
        <apexchart width="600" type="bar" :options="chartOptions" :series="series"></apexchart>
        <b-button @click="sort">sort</b-button>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'graph',
        data() {
            return {
                chartOptions: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                    }
                },
                series: [{name: 'series-1',data: [50, 80, 15, 50, 19, 30, 1000, 1]}],
                products: {}
            }
        },
        methods: {
            sort() {
                let x = this.chartOptions.xaxis.categories
                let points = this.series[0].data
                
                points.sort(function(a, b){return a - b});
                console.log(points)
                console.log(x)
            }

        },
        created() {

        }
    }
</script>

<style scoped>


</style>