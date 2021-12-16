<template>
    <label class="p-radio">
        <span class="p-radio-input">
            <span class="p-radio-inner"></span>
            <input
            class="p-radio-origin"
            type="radio"
            :name="name"
            :value="modelValue"
            @change="$emit('update:modelValue', $event.target.value)"
            />
        </span>
        <span class="p-radio-label">
            <slot>{{label}}</slot>
        </span>
    </label>
    {{modelValue}}-{{label}}
</template>

<script>
// import { toRefs } from '@vue/reactivity'
// import { watch } from '@vue/runtime-core'
export default {
    name: 'PRadio',
    props: {
        label: {
            type: [String, Number, Boolean],
            default: ''
        },
        value: null,
        name: {
            type: String,
            default: ''
        },
        modelValue: {
            type: String
        }
    },
    emits: ['update:modelValue'],
    // setup(props){
    //     let { modelValue } = toRefs(props)
    //     console.log(modelValue.value)
    //     watch(modelValue.value, (newVal) => {
    //         console.log(newVal)
    //     })
    //     return modelValue
    // }
}
</script>

<style>
.p-radio-input{
    position: relative;
}
.p-radio-inner{
    width: 10px;
    height: 10px;
    position: absolute;
    z-index: 999;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid skyblue;
    border-radius: 50%;
    cursor: pointer;
}
.p-radio-inner::after{
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
}
.p-radio-origin{
    /* opacity: 0; */
}
.p-radio-label{
    cursor: pointer;
}
/* 设置单选框选中后的样式 */
.p-radio.is-checked .p-radio-input .p-radio-inner::after{
    background-color: #409eff;
    transform:scale(.8);
}
.p-radio.is-checked .p-radio-label{
    color: #409eff;
}
</style>