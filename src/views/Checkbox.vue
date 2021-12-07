<template>
  <div>
    group1
    <p-checkbox-group :items="items"> </p-checkbox-group>
    group2
    <p-checkbox-group :items="items2"> </p-checkbox-group>
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
        { value: "1", isSelected: false },
        { value: "2", isSelected: false },
        { value: "3", isSelected: false },
      ],
    };
  },
};
</script>