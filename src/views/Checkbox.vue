<template>
  <div>
    <span>group1:</span>
    <p-checkbox-group :items="items" column> </p-checkbox-group>
    <span>group2</span>
    <p-checkbox-group :items="items2" :checkedAllBtn='true'> </p-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { value: "香蕉", isSelected: false },
        { value: "苹果", isSelected: false },
        { value: "葡萄", isSelected: false },
      ],
      items2: [
        { value: "香蕉", isSelected: false },
        { value: "2", isSelected: false },
        { value: "3", isSelected: false },
      ],
    };
  },
};
</script>