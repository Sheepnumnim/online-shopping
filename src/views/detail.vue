<template>
    <div>
        <b-container class="bv-example-row">
            <div>
                <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
                    <b-row no-gutters >
                        <b-col md="6">
                            <b-card-img :src="product.image" alt="Image" class="rounded-0">
                            </b-card-img>
                        </b-col>
                        <b-col md="6">
                            
                            <b-card-body  style="font-size:25px">
                                <b-card-text>
                                    ชื่อสินค้า : 
                                    {{product.name}}
                                </b-card-text>
                                <b-card-text>
                                    ข้อมูลเพิ่มเติม : 
                                    {{product.description}}
                                </b-card-text>
                                <b-card-text>
                                    ราคา : 
                                    {{product.price}} bath
                                </b-card-text>
                            </b-card-body>
                        </b-col>
                    </b-row>
                </b-card>
                <br>
                <br>
                <label for="sb-large" style="font-size:20px">quantity : </label>
                <b-form-spinbutton id="sb-large" v-if="product.quantity>0" value="1" inline min="1" :max="product.quantity" style="font-size:20px;margin-left:50px">
                </b-form-spinbutton>
                <b-form-spinbutton id="sb-large" v-else value="0" inline min="0" max="0" style="font-size:20px;margin-left:50px">
                </b-form-spinbutton>
                
                <b-button size="lg" variant="outline-primary" style="font-size:20px;margin-left:50px" v-b-tooltip.hover
                    title="Buy">Buy</b-button>
            </div>

        </b-container>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import axios from 'axios'

    export default {
        name: 'detail',
        components: {
            HelloWorld
        },
        data() {
            return {
                product: {}
            }
        },
        created() {
            var url = 'https://flowing-vision-262803.el.r.appspot.com/products/getOne/' + this.$route.params.productId
            axios.get(url)
                .then((response) => {
                    this.product = response.data
                })
                .catch((error) => {
                    console.log(error.message)
                })
        },
    }
</script>
<style>
</style>