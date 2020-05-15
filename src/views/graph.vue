<template>
    <div>
        <apexchart width="600" type="bar" :options="chartOptions" :series="series"></apexchart>
        
        <b-button @click="calculate">calculate</b-button>
        <b-button @click="mosttop3">most top 3</b-button>
        <b-button @click="leasttop3">least top 3</b-button>
        <router-link to="/owner">
            <b-button variant="outline-success" style="font-size:15px" v-b-tooltip.hover title="add goods">back</b-button>
        </router-link>


    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'graph',
        data() {
            return {
                x:0,
                chartOptions: {
                    chart: {
                        id: 'vuechart-example'
                    },
                    xaxis: {
                        categories: ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
                    }
                },
                series: [{name: 'Sales',data: [50, 80, 15, 50, 0, 30, 100, 1,5,10,15,20]}],
                products: {},
            }
        },
        methods: {
            calculate() {
                console.log(this.products)              
                // let x = this.chartOptions.xaxis.categories
                // let points = this.series[0].data
                // points.sort(function(a, b){return a - b});
                let date = new Date();
                let month = date.getMonth();
                console.log(this.series[0].data[month]);
                for(let i=0; i<this.products.length ; i++)
                {
                    this.series[0].data[month] += this.products[i].quantity
                    console.log('+')
                }
                console.log(this.x)
                console.log(this.series[0].data[month])
                this.x = this.series[0].data[month]
                console.log(this.x)
            },top3(){



            },leasttop3(){




            }

        },
        created() {
            var url = 'https://flowing-vision-262803.el.r.appspot.com/products/getMany'
            axios.get(url)
                .then((response) => {
                    this.products = response.data
                })
                .catch((error) => {
                    console.log(error.message)
                })
        },
        mounted() {
        },
    }
</script>

<style scoped>


</style>