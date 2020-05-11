<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/movie">movie</router-link>|
      <router-link to="/signin">sign in</router-link>|
      <router-link to="/signup">sign up</router-link>| -->
      <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand >Online shopping</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" right >
        <router-link to="/signin">
      <b-button variant="outline-info" class="mb-2" v-b-tooltip.hover title="Login">
      <b-icon icon="person-bounding-box" aria-hidden="true"></b-icon> Login</b-button></router-link>

      <b-button variant="outline-info" class="mb-2" v-b-tooltip.hover title="register">
      <b-icon icon="person-plus" aria-hidden="true"></b-icon> Register</b-button>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
   </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
