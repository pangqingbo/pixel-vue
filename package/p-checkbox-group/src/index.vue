<template>
  <div class="pCheckboxGroup">
    <div v-for="(item, index) in items" :key="index">
      <input type="checkbox" v-model="item.isSelected" @change="checkedChange" :id="item.value" />
      <label :for="item.value">{{ item.value }}</label>
    </div>

    <div>
      <span>
        <input v-model="checkedAll" @change="checkedAllChange" type="checkbox" :id="items" />
        <label :for="items">全选/全不选</label>
      </span>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";

export default {
  name: "PCheckboxGroup",
  props: {
    items: Array,
  },
  setup(props) {

    // 全选按钮发生改变时，子选项应该如何变化
    const checkedAll = ref(false);
    let { items } = toRefs(props);
    function checkedAllChange() {
      items.value.forEach((item) => {
        item.isSelected = checkedAll.value;
      });
    }
    
    // 子选项发生改变时，全选按钮应该如何变化
    function checkedChange(){
      checkedAll.value = true;
      items.value.forEach((item) => {
        if(!item.isSelected){
          checkedAll.value = false
        }
      })
    }
    return {
      checkedChange,
      checkedAllChange,
      checkedAll
    };
  },
};
</script>

<style scoped>
.pCheckboxGroup {
  display: flex;
  flex-direction: column;
}
.pCheckboxGroup div {
  padding: 4px;
}
</style>