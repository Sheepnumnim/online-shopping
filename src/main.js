import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'hooper/dist/hooper.css';
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

let app

var config = {
  apiKey: "AIzaSyAfqWsoX4Rj6DB3g0RVZLQxL4Nm6l10kQk",
  authDomain: "suchart-ca81f.firebaseapp.com",
  databaseURL: "https://suchart-ca81f.firebaseio.com",
  projectId: "suchart-ca81f",
  storageBucket: "suchart-ca81f.appspot.com",
  messagingSenderId: "932309922929",
  appId: "1:932309922929:web:439a0645e62b0d984157d0"
};
firebase.initializeApp(config);
window.firebase=firebase

firebase.auth().onAuthStateChanged((user)=>{
if(!app){
  app = new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')



}
})

