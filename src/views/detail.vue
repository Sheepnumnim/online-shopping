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
        <b-card-body title="Name" style="font-size:20px">
          <b-card-text>
            Detail
          </b-card-text>
           <b-card-text>
            price
          </b-card-text>
        </b-card-body>
        
      </b-col>
      
    </b-row>
  </b-card>
  <br>
  <br>
     <label for="sb-large" style="font-size:20px">quantity : </label>
     <b-form-spinbutton id="sb-large" v-model="value" inline style="font-size:20px;margin-left:50px"></b-form-spinbutton>
  
  <b-button size="lg" variant="outline-primary" style="font-size:20px;margin-left:50px" v-b-tooltip.hover title="Buy">Buy</b-button>
</div>

</b-container>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'detail',
    components: {
      HelloWorld
    },
    data() {
      return {
      }
    },
  }
</script>
<style>
</style>