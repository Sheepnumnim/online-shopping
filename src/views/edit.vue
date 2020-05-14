<template>
  <div>
    <b-container class="bv-example-row">
      <div>
        <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
          <b-row no-gutters>
            <b-col md="6">
              <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="6">
              <b-card-body  style="font-size:7px">
                  <h2>Edit</h2>
                <b-row class="my-1">
                   <br><br>
                   <div class="center">
            <input type="text" class="form-control" placeholder="name" >
            <br>
            <input type="text" class="form-control" placeholder="price" >
            <br>
            <input type="text" class="form-control" placeholder="image url" >
            <br>
            
            <textarea class="areatext" rows="10" placeholder="Detail" ></textarea>
                   </div>

                </b-row>
              </b-card-body>

            </b-col>

          </b-row>
        </b-card>
        <br>
        <br>

      </div>

    </b-container>
    <div>
         
            <button class="btn btn-success btn-block full-width" v-b-tooltip.hover title="add" @click="edit" >edit</button>
            <br><br>
            <button class="btn btn-danger btn-block full-width" v-b-tooltip.hover title="cancle" @click="cancle">Cancle</button>
            <br><br>
            <b-alert :show="dismissCountDown" dismissible variant="success" @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged">
      <p style="font-size:20px">Edit goods success {{ dismissCountDown }} seconds...</p>
      <b-progress variant="success" :max="dismissSecs" :value="dismissCountDown" height="4px"></b-progress>
    </b-alert>
     
    

    </div>
   


  </div>

</template>

<script>
export default {
    name: 'edit',
  data () {
    return {
      item: {
        name: '',
        price: '',
        imageURL:'',
        detail:''
      },  dismissSecs: 5,
        dismissCountDown: 0,
    }
  },
  methods: {
    edit () {
      console.log('edit')
      this.dismissCountDown = this.dismissSecs
      
    },cancle() {
      console.log('cancle')

    },
    countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
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
}.btn-danger{
  background-color: #d83e27;
  border: #2c3e50;
  height: 40px;
  font-size: 13px;
  width: 350px;
  margin: auto;
}

</style>