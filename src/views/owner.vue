<template>
    <div>
        <b-container class="bv-example-row">
            <div>
                <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
                    <b-row no-gutters>
                        <b-col md="6">
                            <b-card-img
                                src="https://2xkcvt35vyxycuy7x23e0em1a5g-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/dog-Puppy-Young-Dog-Cute-Small-Dog-Pet-BUSINESS-SUIT-2467149_960_720.jpg"
                                alt="Image" class="rounded-0"></b-card-img>
                        </b-col>
                        <b-col md="6">
                            <b-card-body title="Name" style="font-size:20px">
                                MR.Doggo
                            </b-card-body>
                        </b-col>
                    </b-row>
                    <br>
                    <br>
                </b-card>
                <br>
                <br>
                <router-link to="/add">
                    <b-button variant="outline-success" style="font-size:15px" v-b-tooltip.hover title="add goods">add
                        goods</b-button>
                </router-link>
            </div>
        </b-container>
        <!-- ตารางข้างล่าง ที่แสดงข้อมูล-->
        <div>
            <b-table :items="products" :fields="fields" striped responsive="sm">
                <template v-slot:cell(edit)="row">
                    <b-button variant="outline-primary" v-b-tooltip.hover title="edit">Edit</b-button>
                </template>
                <template v-slot:cell(delete)="row">
                    <b-button variant="outline-danger" v-b-tooltip.hover title="delete">X</b-button>
                </template>
            </b-table>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import axios from 'axios'

    export default {
        name: 'owner',
        components: {
            HelloWorld
        },
        data() {
            return {
                fields: ['name', 'image', 'price', 'description', 'quantity', 'edit', 'delete'],
                products: {}
            }
        },
        methods: {
            gotoEdit(productId) {
                console.log(productId)
                // this.$router.push('/edit/' + productId)
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
    }
</script>