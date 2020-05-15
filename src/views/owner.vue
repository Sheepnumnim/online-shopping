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
                <router-link to="/graph">
                    <b-button variant="outline-warning" style="font-size:15px;margin-left:30px" v-b-tooltip.hover
                        title="graph analysis">graph analysis
                    </b-button>
                </router-link>
            </div>
        </b-container>
        <!-- ตารางข้างล่าง ที่แสดงข้อมูล-->
        <br>
        <div>
            <b-table-simple hover small caption-top responsive>
                <b-thead head-variant="dark" style="font-size:15px;">
                    <b-tr>
                        <b-th>Name</b-th>
                        <b-th>Image</b-th>
                        <b-th>Price</b-th>
                        <b-th>Description</b-th>
                        <b-th>Quantity</b-th>
                        <b-th>Edit</b-th>
                        <b-th>Delete</b-th>
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="item in products" v-bind:key="item" style="font-size:15px;">
                        <b-td>{{item.name}}</b-td>
                        <b-td>{{item.image}}</b-td>
                        <b-td>{{item.price}}</b-td>
                        <b-td>{{item.description}}</b-td>
                        <b-td>{{item.quantity}}</b-td>
                        <b-td><b-button variant="outline-primary" v-b-tooltip.hover title="edit" @click="gotoEdit(item._id)">edit</b-button></b-td>
                        <b-td><b-button variant="outline-danger" v-b-tooltip.hover title="delete" @click="deleteProduct(item._id)">X</b-button></b-td>
                    </b-tr>
                </b-tbody>
                <b-tfoot>
                    <b-tr>
                        <b-td colspan="7" variant="secondary" class="text-right">
                            Total Rows: <b>{{products.length}}</b>
                        </b-td>
                    </b-tr>
                </b-tfoot>
            </b-table-simple>
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
                // console.log(productId)
                this.$router.push('/edit/' + productId)
            },
            deleteProduct(productId) {
                var url = 'https://flowing-vision-262803.el.r.appspot.com/products/delete/' + productId
                axios.delete(url)
                    .then((response) => {
                        this.products = response.data
                        window.location.reload()
                    })
                    .catch((error) => {
                        console.log(error.message)
                    })
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