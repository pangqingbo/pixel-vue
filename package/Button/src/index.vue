<template>
    <a
    :href="href"
    :style="styleArr"
    :class="{
        disabled,
        circle
    }"
    >
        <slot></slot>
    </a>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
    name: "Button",
    props: {
        type:String,
        style:String,
        size:String,
        circle:{
            type: Boolean,
            default: false,
        },
        disabled:{
            type: Boolean,
            default: false,
        },
        href:{
            type:String,
            default: "#",
        }
    },
    setup(props){
        const { type,size } = toRefs(props);

        // 按钮类型比对数组
        const typeArr = [
            {type: 'primary', styleObj: {background: 'linear-gradient(90deg, #6616d0, #ac34e7)',color: '#fff',border:'none'}},
            {type: 'info', styleObj: {background: '#20B2AA',color: '#fff',border:'none'}},
            {type: 'danger', styleObj: {background: '#ff461f',color: '#fff',border:'none'}},
            {type: 'warning', styleObj: {background: '#fff143',color: '#fff',border:'none'}},
        ]

        // 尺寸比对数组 
        const sizeArr = [
            {size: 'small', styleObj: {padding: '6px 7px',width: '50px',fontSize: '10px'}}
        ]
        
        // 定义一个数组来接收函数执行后返回的样式对象
        let styleArr = ref([]);
        
        // 修改样式的函数
        function modifyStyle(arr, attr, attrString){
            let styleObj = arr.find((item) => {
                return item[attrString] == attr.value
            })
            styleObj = styleObj?.styleObj || {};
            styleArr.value.push(styleObj);
            return styleArr
        }

        onMounted(() => {
            modifyStyle(typeArr, type, 'type')
            modifyStyle(sizeArr, size, 'size')
        });

        return {
            styleArr
        }
    }
}
</script>

<style scoped>
a{
    display: block;
    padding: 8px 10px;
    text-align: center;
    text-decoration: none;
    color: rgba(5, 139, 248, 0.8);
    border: 1px solid rgba(5, 139, 248, 0.2);
    border-radius: 3px;
    transition: .5s all;
    letter-spacing: 1px;
    width: 70px;
}
a:hover{
    opacity: .7;
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(117, 117, 117, 0.9);
}
a.circle{
    border-radius: 40px;
}
a.disabled{
    color: #fff;
    pointer-events: none;
    background: gray !important;
    opacity: .6;
}
</style>