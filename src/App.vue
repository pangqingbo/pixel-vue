<template>
  <div id="nav">
    <router-link v-for="(item,index) in routes" :to="item.path" :key="index">{{item.name}}</router-link>
    <router-view/>
  </div>
</template>

<script>
import { routes } from './router/index.js';
import './icon/css/all.min.css'

export default {
  name: 'App',
  data(){
    return {
      routes
    }
  },
}
</script>

<style scoped>
#nav{
  width: 500px;
  min-height: 400px;
  margin-top: 10px;
  /* background-color: rgba(128, 128, 128, 0.267); */
  padding: 10px;
}
#nav a{
  text-decoration: none;
  font-weight: bold;
  margin-right: 15px;
}
</style>
