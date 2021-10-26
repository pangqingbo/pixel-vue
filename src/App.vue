<template>
  <router-link v-for="(item,index) in routes" :to="item.path" :key="index">{{item.name}}</router-link>
  <router-view/>
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
  mounted(){
    console.log(this.routes)
  }
}
</script>

<style>

</style>
