import Vue from 'vue'

import VueRouter from 'vue-router'

import SignUp from '../views/signup.vue'

import SignIn from '../views/signin.vue'

import main from '../views/main.vue'


Vue.use(VueRouter)


let router = new VueRouter({

  routes: [

    {

      path: '/',

      redirect: '/main'

    },

    {

      path: '*',

      redirect: '/main'

    },

    {

      path: '/signin',

      name: SignIn,

      component: SignIn

    },

    {

      path: '/signup',

      name: SignUp,

      component: SignUp

    }, {

      path: '/main',

      name: main,

      component: main
    },
    // },

    // {

    //   path: '/movie',

    //   name: MovieList,

    //   component: MovieList,

    //   meta: {

    //     requireAuth: true

    //   }

    

  ]

})


router.beforeEach((to, from, next) => {

  let currentUser = firebase.auth().currentUser

  let requireAuth = to.matched.some(record => record.meta.requireAuth)

  if (requireAuth && !currentUser) {

    next('signin')

  // } else if (!requireAuth && currentUser) {

  //   next('movie')

  } else {

    next()

  }

})

// const router = new VueRouter({

// routes

// })


export default router