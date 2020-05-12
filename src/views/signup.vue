<template>
    <div class="row">
        <!-- <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-md-offset-3"> -->
        <div class="center">
        <br><br><br>
        <h2>Sign up</h2>
        <br><br>
        <input type="email" class="form-control" placeholder="email" v-model="formData.email">
        <br>
        <input type="email" class="form-control" placeholder="comfirm email" v-model="formData.comfirmEmail">
        <br>
        <input type="password" class="form-control" placeholder="password" v-model="formData.password">
        <br>
        <input type="password" class="form-control" placeholder="confirm password" v-model="formData.confirmPassword">
        <br><br><br>
        <button class="btn btn-success btn-block full-width" @click="signUp">Sign Up</button>         
        <!-- </div>           -->
        </div>
    </div>
</template>
<script>
export default {
  name: 'SignUp',
  data () {
    return {
      formData: {
        email: '',
        comfirmEmail: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    signUp () {
      console.log(this.formData.email)
      console.log(this.formData.password)
      if(this.formData.email === this.formData.comfirmEmail && this.formData.confirmPassword === this.formData.password)
      {
        firebase.auth().createUserWithEmailAndPassword(this.formData.email,this.formData.password)
        .then( user => {
            this.$router.replace('/signin')
        })
        .catch( error => {
            alert(error.message)
        })
      }
      else
      {
        console.log('email not match')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
