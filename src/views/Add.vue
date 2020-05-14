<template>
  <div class="row">
    <div class="center">
      <br><br><br>
      <h2>add goods</h2>
      <br><br>
      <input type="text" class="form-control" placeholder="name" v-model="item.name">
      <br>
      <input type="text" class="form-control" placeholder="price" v-model="item.price">
      <br>
      <input type="text" class="form-control" placeholder="image url" v-model="item.imageURL">
      <br>
      <span class="input-group-addon">Description</span>
      <textarea class="areatext" rows="10" placeholder="Detail" v-model="item.detail"></textarea>
      <br><br><br>
      <button class="btn btn-success btn-block full-width" v-b-tooltip.hover title="add"
        @click="addProduct()">add</button>
      <br><br>
      <button class="btn btn-danger btn-block full-width" v-b-tooltip.hover title="cancle"
        @click="cancle()">Cancle</button>
      <br><br>
      <b-alert :show="dismissCountDown" dismissible variant="danger" @dismissed="dismissCountDown=0"
        @dismiss-count-down="countDownChanged">
        <p style="font-size:20px">have null fields {{ dismissCountDown }} seconds...</p>
        <b-progress variant="danger" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
      </b-alert>

    </div>

  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Create',
    data() {
      return {
        item: {
          name: '',
          price: '',
          imageURL: '',
          detail: ''
        },
        dismissSecs: 5,
        dismissCountDown: 0,
      }
    },
    methods: {
      create() {
        console.log('create')
        this.dismissCountDown = this.dismissSecs
      },
      cancle() {
        this.item.name = '',
          this.item.price = '',
          this.item.imageURL = '',
          this.item.detail = ''
        this.$router.go(-1)
      },
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      addProduct() {
        var url = 'https://flowing-vision-262803.el.r.appspot.com/products/add'
        let newProduct = {
          name: this.item.name,
          price: this.item.price,
          image: this.item.imageURL,
          description: this.item.detail
        }
        let n = this.item.name;
        let p = this.item.price;
        let i = this.item.imageURL;
        let d = this.item.detail;

         if (n == 0 || p == 0 || i == 0 || d == 0) {
          this.dismissCountDown = this.dismissSecs

        } else {
          axios.post(url, newProduct)
            .then((response) => {
              console.log('added success')
              this.$router.go(-1)


            })
            .catch((error) => {
              console.log(error.message)
            })

        }

      }
    }
  }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .btn-success {
    background-color: #2c3e50;
    border: #2c3e50;
    height: 40px;
    font-size: 13px;
    width: 350px;
    margin: auto;
  }

  h2 {
    font-weight: normal;
    margin-left: auto;
    margin-right: auto;
    font-size: 50px;
  }

  .form-control {
    height: 35px;
    width: 350px;
    font-size: 15px;
    margin: auto;
    border-left-color: #2c3e50;
    border-left-width: 5px;
  }

  .center {
    margin: auto;
  }

  .areatext {
    width: 350px;
    font-size: 15px;
    border-left-color: #2c3e50;
    border-left-width: 5px;
  }

  .btn-danger {
    background-color: #d83e27;
    border: #2c3e50;
    height: 40px;
    font-size: 13px;
    width: 350px;
    margin: auto;
  }
</style>