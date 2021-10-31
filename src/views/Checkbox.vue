<template>
  <p-checkbox-group :items="items">
      
  </p-checkbox-group>
</template>

<script>
export default {
    data(){
        return {
            items:[
                {value:"香蕉", key: 0, checked: false},
                {value:"苹果", key: 1, checked: false},
                {value:"葡萄", key: 2, checked: false}
            ]
        }
    }
}
</script>