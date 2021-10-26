<template>
  <div id="nav">
    <router-link v-for="(item,index) in routes" :to="item.path" :key="index">{{item.name}}</router-link>
    <router-view/>
  </div>
</template>

<script>
import { routes } from './router/index.js';

export default {
  name: 'App',
  data(){
    return {
      routes
    }
  },
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#nav{
  width: 500px;
  margin: 10px 10px;
  background-color: rgba(128, 128, 128, 0.267);
}
#nav a.router-link-active{
  text-decoration: none;
  font-weight: bold;
}
</style>
