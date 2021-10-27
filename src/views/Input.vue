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
    <p-input placeholder='Name' type="noBorder">
      <template #preicon>
        <i class="fas fa-search" style="color: blue"></i>
      </template>
      <template #suficon>
        <i class="fas fa-info"></i>
      </template>
    </p-input>
  </div>
</template>

<script>
export default {
    data(){
        return {
            searchText: ''
        }
    }
}
</script>

<style scoped>
div{
    margin: 10px 5px;
}
</style>