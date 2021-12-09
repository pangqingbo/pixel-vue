<template>
  <div>
    <p-button @click="visible=true">open</p-button>
    <p-dialog title="温馨提示" width="34%" top="200px" v-model:visible="visible">
      <!-- <template #header>注意</template> -->
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template #footer>
        <p-button @click="visible=false">取消</p-button>
        <p-button type="primary" @click="visible=false">确定</p-button>
      </template>
    </p-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return{
      visible: false,
    }
  }
}
</script>

<style>
</style>