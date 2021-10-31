<template>
  <div
    class="pCheckboxGroup"
    :class="{ row, border }"
  >
    <div
        v-for="item in items"
        :key="item.key"
    >
      <input type="checkbox" :checked="item.checked" name="" :id="item.value" />
      <label :for="item.value">{{ item.value }}</label>
    </div>
    <div>
      <span>
        <input @click="checkedAll" type="checkbox" name="" id="checkAll">
        <label for="checkAll">全选/全不选</label>
      </span>
    </div>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";

export default {
  name: "PCheckboxGroup",
  props: {
    row: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    items: Array,
  },
  setup(props) {
    let { items } = toRefs(props);
    function checkedAll() {
        Array.from(items.value).forEach((item) => {
            item.checked = !item.checked
        })
    }
    return {
      checkedAll,
    };
  },
};
</script>

<style scoped>
.pCheckboxGroup{
    display: flex;
    flex-direction: column;
}
.pCheckboxGroup div{
  padding: 4px;
}
</style>