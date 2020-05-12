<template>
  <div>
<b-container class="bv-example-row">
<div>
  <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://2xkcvt35vyxycuy7x23e0em1a5g-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/dog-Puppy-Young-Dog-Cute-Small-Dog-Pet-BUSINESS-SUIT-2467149_960_720.jpg" alt="Image" class="rounded-0"></b-card-img>
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
    
</div>

</b-container>
<!-- ตารางข้างล่าง ที่แสดงข้อมูล-->
<div>
   
     <b-table :items="items" :fields="fields" striped responsive="sm">
      <template v-slot:cell(edit)="row">
        <router-link to="/edit">
        <b-button variant="outline-primary">Edit</b-button>
        </router-link>
      </template>
      <template v-slot:cell(delete)="row">
        <b-button variant="outline-danger">X</b-button>
      </template>
    </b-table>
  </div>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'owner',
  components: {
    HelloWorld
  },
  data() {
      return {
       fields: ['name', 'image', 'price','description','quantity','edit','delete'],
        items:  [{
                        invId: 1,
                        name: 'eiei',
                        image: 'https://www.jornadacontinental.org/wp-content/uploads/2020/01/2.jpg',
                        price: 100,
                        description: "เอาไว้ใส่วิ่งนะ",
                        quantity: 1
                    },
                    {
                        invId: 2,
                        name: 'hat',
                        image: 'https://images-na.ssl-images-amazon.com/images/I/61KdLTqjadL._AC_UX679_.jpg',
                        price: 200,
                        description: "เอาไว้ใส่วิ่งนะ",
                        quantity: 2
                    },
                    {
                        invId: 3,
                        name: 'shoe',
                        image: 'https://www.jordansaleuk.com/wp-content/uploads/2019/02/air-jordan-1-mid-bred-multi-color-shoes-uk-for-cheap-554724-125.jpeg',
                        price: 300,
                        description: "เอาไว้ใส่วิ่งนะ",
                        quantity: 3
                    },
                    {
                        invId: 4,
                        name: 'shirt',
                        image: 'https://ge.lnwfile.com/agk7gg.jpg',
                        price: 299,
                        description: "เอาไว้ใส่วิ่งนะ",
                        quantity: 4
                    },
                    {
                        invId: 4,
                        name: 'shirt',
                        image: 'https://ge.lnwfile.com/agk7gg.jpg',
                        price: 299,
                        description: "เอาไว้ใส่วิ่งนะ",
                        quantity: 5
                    },
                ],
      }
    }
}
</script>
