<template>
  <div>
    <p-input v-model='searchText' placeholder='edit me'>
      <template #preicon>
        <i class="fas fa-search" style="color: blue"></i>
      </template>
      <template #suficon>
        <i class="fas fa-info"></i>
      </template>
    </p-input>
    <p>value is:{{searchText}}</p>
  </div>
  <div>
    <p-input placeholder='Name' type="withAnimation">
      <template #preicon>
        <i class="fas fa-search" style="color: blue"></i>
      </template>
      <template #suficon>
        <i class="fas fa-info"></i>
      </template>
    </p-input>
  </div>
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
      routes,
      searchText: ''
    }
  },
}
</script>

<style>
#nav{
  width: 500px;
  margin-top: 10px;
  background-color: rgba(128, 128, 128, 0.267);
}
#nav a.router-link-active{
  text-decoration: none;
  font-weight: bold;
}
</style>
