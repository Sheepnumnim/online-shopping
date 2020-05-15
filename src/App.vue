<template>
  <div id="app">
    <div id="nav">
  <b-navbar toggleable="sm" type="dark" variant="dark">
     <router-link to="/main">
    <b-button size="sm" variant="outline-noOutline">
    <b-iconstack font-scale="5" rotate="0" animation="cylon-vertical" >
      <b-icon stacked icon="house-door-fill" shift-h="3" shift-v="0" variant="success"></b-icon>
      <b-icon stacked icon="house-door" shift-h="0" variant="success"></b-icon>
    </b-iconstack>
    </b-button>
    </router-link>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
    
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/#/signin" class="nav-item" >| Sign in</b-nav-item>
        <b-nav-item href="/#/signup" class="nav-item" >| Sign up</b-nav-item>
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

.nav-item{
  font-weight: bold;
  color: white;
  font-size: 15px;
}

.nav-item:hover{
  background-color: grey;
  transition: 0.5s;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
