<template>
  <div>
      <h2>Warehouse</h2>
    <b-table-simple hover small caption-top responsive>
        
                <b-thead head-variant="dark" style="font-size:15px;">
                    <b-tr>
                        
                        <b-th>Name</b-th>
                   
                        <b-th>Price</b-th>
                        <b-th>Description</b-th>
                        <b-th>Quantity</b-th>
                       
                    </b-tr>
                </b-thead>
                <b-tbody>
                    <b-tr v-for="item in products" v-bind:key="item" style="font-size:15px;">
                        <b-td>{{item.name}}</b-td>
                        
                        <b-td>{{item.price}}</b-td>
                        <b-td>{{item.description}}</b-td>
                        <b-td>{{item.quantity}}</b-td>
                        
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
    <div v-for="item in products" v-bind:key="item">
        <b-alert variant="danger" v-if="item.quantity <= 3" show dismissible style="font-size:15px;">
    Little left : {{item.name}} 
    have:{{item.quantity}} in stock 
  </b-alert>

        
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        products: {}
      }
    },
    created() {
            var url = 'https://flowing-vision-262803.el.r.appspot.com/products/getMany'
            axios.get(url)
                .then((response) => {
                    this.products = response.data
                    this.products.forEach(function(v){ 
                        delete v.image
                        // delete v.history
                     });
                    console.log(this.products)
                })
                .catch((error) => {
                    console.log(error.message)
                })
    },
  }
</script>