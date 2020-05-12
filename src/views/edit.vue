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
        <b-card-body title="EDIT" style="font-size:17px">
          <b-row class="my-1">
    <b-col sm="2">
        Name:
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" placeholder="edit name"></b-form-input>
    </b-col>
  </b-row>
  <br>
             <b-row class="my-1">
    <b-col sm="2">
        Descript:
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" placeholder="edit descript"></b-form-input>
    </b-col>
  </b-row>
   <br>
             <b-row class="my-1">
    <b-col sm="2">
        Image:
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" placeholder="edit image"></b-form-input>
    </b-col>
  </b-row>

   <br>
             <b-row class="my-1">
    <b-col sm="2">
        Price:
    </b-col>
    <b-col sm="10">
      <b-form-input id="input-large" size="lg" placeholder="edit price"></b-form-input>
    </b-col>
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
    <b-button size="lg" variant="outline-success"  style="font-size:20px" v-b-tooltip.hover title="Save">Save</b-button>

    <router-link to="/owner">
  <b-button size="lg" variant="outline-danger" style="font-size:20px;margin-left:50px" v-b-tooltip.hover title="cancle">cancle</b-button>
  </router-link>
  <br>
  <br>
  
  </div>
      <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged">
      <p style="font-size:20px">Edit data Success {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
  
  </div>
  
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'edit',
    components: {
      HelloWorld
    },
    data() {
      return {
           dismissSecs: 6,
        dismissCountDown: 0,
      }
    }, methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs 
        // เอาcodeนี้ไปวางไว้ในfunctionตอนกดsaveแล้วมันทำงานเสร็จจะเอาไว้alertเฉยๆว่าsaveสำเร็จนะ
      }
    }
  }
</script>
<style>
</style>