import Vue from 'vue'
import VueRouter from 'vue-router'
import SignUp from '../views/signup.vue'
import SignIn from '../views/signin.vue'
import main from '../views/main.vue'
import detail from '../views/detail.vue'
import owner from '../views/owner.vue'
import edit from '../views/edit.vue'
import add from '../views/Add'
<<<<<<< HEAD

import graph from '../views/graph.vue'
Vue.use(VueRouter)
=======
>>>>>>> 5e60eee856841c54a7572115db35f091c720147c

Vue.use(VueRouter)

let router = new VueRouter({
<<<<<<< HEAD

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
    {

      path: '/detail',

      name: detail,

      component: detail
    }, {

      path: '/owner',

      name: owner,

      component: owner
    }, {

      path: '/edit',

      name: edit,

      component: edit

    },  {

      path: '/add',

      name: add,

      component: add

    },{

      path: '/graph',

      name: graph,

      component: graph

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

=======
    routes: [{
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
        }, 
        {
            path: '/main',
            name: main,
            component: main
        },
        {
            path: '/detail/:productId',
            name: detail,
            component: detail
        }, 
        {
            path: '/owner',
            name: owner,
            component: owner
        }, 
        {
            path: '/edit/:productId',
            name: edit,
            component: edit
        }, 
        {
            path: '/add',
            name: add,
            component: add
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
>>>>>>> 5e60eee856841c54a7572115db35f091c720147c
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