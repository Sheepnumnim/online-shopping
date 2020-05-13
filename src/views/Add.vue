<template>
  <div class="row">
        <div class="center">
            <br><br><br>
            <h2>Create</h2>
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
            <button class="btn btn-success btn-block full-width" @click="create">Create</button>
            <br><br>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Create',
  data () {
    return {
      item: {
        name: '',
        price: '',
        imageURL:'',
        detail:''
      }
    }
  },
  methods: {
    create () {
      console.log('create')
      
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
.btn-success{
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
.form-control{
  height: 35px;
  width: 350px;
  font-size: 15px;
  margin: auto;
  border-left-color: #2c3e50;
  border-left-width: 5px;
}
.center{
  margin:auto;
}
.areatext{
    width: 350px;
    font-size: 15px;
    border-left-color: #2c3e50;
    border-left-width: 5px;
}

</style>