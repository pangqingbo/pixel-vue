<template>
  <div class="pCheckboxGroup" :class="{ column }">
    <div v-for="(item, index) in items" :key="index">
      <label>
        <input
          type="checkbox"
          v-model="item.isSelected"
          @change="checkedChange"
        />
        <span>{{ item.value }}</span>
      </label>
    </div>

    <!-- 全选按钮，通过props中的checkedAllBtn控制 -->
    <div v-if="checkedAllBtn">
      <label>
        <input
          v-model="checkedAll"
          @change="checkedAllChange"
          type="checkbox"
        />
        <span>全选/全不选</span>
      </label>
    </div>
    
  </div>
  <!-- 反选按钮 -->
    <div>
      <button @click="checkedReverse" type="checkbox">反选</button>
    </div>
</template>

<script>
import { ref, toRefs } from "@vue/reactivity";

export default {
  name: "PCheckboxGroup",
  props: {
    column: {
      type: Boolean,
      default: false,
    },
    checkedAllBtn: {
      type: Boolean,
      default: false,
    },
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
    function checkedChange() {
      checkedAll.value = true;
      items.value.forEach((item) => {
        if (!item.isSelected) {
          checkedAll.value = false;
        }
      });
    }

    // 绑定反选函数
    function checkedReverse() {
      items.value.forEach((item) => {
        item.isSelected = !item.isSelected;
      });
      checkedChange();
    }
    return {
      checkedReverse,
      checkedChange,
      checkedAllChange,
      checkedAll,
    };
  },
};
</script>

<style scoped>
.pCheckboxGroup {
  display: flex;
}
.pCheckboxGroup div {
  padding: 4px;
}
button{
  margin-left: 6px;
}
.pCheckboxGroup.column {
  flex-direction: column;
}
</style>