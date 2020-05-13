<template>
    <div class="row">
        <div class="center">
            <br><br><br>
            <h2>Sign in</h2>
            <br><br>
            <input type="email" class="form-control" placeholder="email" v-model="formData.email">
            <br>
            <input type="password" class="form-control" placeholder="password" v-model="formData.password">
            <br><br><br>
            <button class="btn btn-success btn-block full-width" @click="signIn">Sign in</button>
            <br><br>
            <p>if you don't have any account click sign up</p>
            <router-link to="/signup">
            <button class="btn btn-success btn-block full-width"  >Sign up</button>
            </router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      console.log('Signin')
      firebase.auth().signInWithEmailAndPassword(this.formData.email,this.formData.password)
      .then(user => { //user return มาจาก firebase.auth().signInWithEmailAndPassword ซึ่งถ้าไม่มี .then มันอาจะไปทำคำสั่ง this.$router.replace('cities') ก่อน
        console.log(user)
	    this.$router.replace('/main')
      })
      .catch(error => { //เมื่อรอ return จาก firebase จน timeout
        alert(error.message)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
}
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
.center{
  margin:auto;
}
.form-control{
  height: 35px;
  width: 350px;
  font-size: 15px;
  margin: auto;
  border-left-color: #2c3e50;
  border-left-width: 5px;
}
p{
  font-size: 15px;
}



</style>