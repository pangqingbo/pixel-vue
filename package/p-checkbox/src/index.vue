<template>
    <div class="pcheckContainer">
        <input type="checkbox" :checked='checked' :name="name" :id="idGen">
        <label :for="idGen">{{value}}</label>
    </div>
</template>

<script>
export default {
    name: 'PCheckbox',
    props: {
        value: {
            type: String,
            default: 'value'
        },
        name: String,
        checked: {
            type: Boolean,
            default: false
        }
    },
    setup(){
        let idGen = Math.random()
        return {
            idGen
        }
    }
}
</script>

<style scoped>
.pcheckContainer{
    padding: 3px;
    display: flex;
    height: 20px;
}
input{
    width: 14px;
    height: 14px;
}
input,label{
    cursor: pointer;
    line-height: 20px;
}
</style>