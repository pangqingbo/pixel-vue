<template>
    <button
    :class="[{
        disabled,
        round,
        wave,
        circle,
    },`${type}`,`${size}`]"
    @click="handleClick"
    :disabled="disabled"
    >
        <span><slot></slot></span>

        <!-- div用来设置水波纹效果 -->
        <div v-if="wave"></div>
    </button>
</template>

<script>
export default {
    name: "PButton",
    props: {
        type:{
            type: String,
            default: 'default',
        },
        icon:{
            type: String,
            default: '',
        },
        size:{
            type: String,
            default: 'middle',
        },
        round:{
            type: Boolean,
            default: false,
        },
        circle:{
            type: Boolean,
            default: false,
        },
        disabled:{
            type: Boolean,
            default: false,
        },
        wave:{
            type: Boolean,
            default: false,
        },
    },
    emits: ['click'],
    setup(props, {emit}){
        const handleClick = (e) => {
            emit('click', e)
        }
        return {
            handleClick
        }
    }
}
</script>

<style scoped>
button{
    position: relative;
    cursor: pointer;
    display: inline-block;
    padding: 7px 0px;
    color: rgba(5, 139, 248, 0.8);
    border: 1px solid rgba(5, 139, 248, 0.2);
    border-radius: 3px;
    transition: .5s all;
    width: 70px;
    height: 30px;
    /* letter-spacing: 1px; */
    overflow: hidden;
}
button:hover{
    opacity: .7;
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(117, 117, 117, 0.9);
}
button.primary{
    background: #409eff;
    color: #fff
}
button.info{
    background: #67c23a;
    color: #fff
}
button.danger{
    background: #f56c6c;
    color: #fff
}
button.warning{
    background: #e6a23c;
    color: #fff
}
button.small{
    width: 55px;
    padding: 7px 0;
    font-size: 10px;
}
button.round{
    border-radius: 40px;
}
button.circle{
    width: 30px;
    height: 30px;
    padding: 0;
    border-radius: 50%;
}
button.disabled,
button.disabled:hover{
    cursor: not-allowed;
    color:#c0c4cc;
    background-color: #fff;
    border-color: ebeef5;
    transform: none;
}
button.wave div{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #00AEFF;
    top: calc(100% + 22px);
    left: 0;
    transition: 1s;
}
button.wave span{
    position: relative;
    z-index: 1;
    transition: 1s;
}
button.wave:hover span{
    color: #fff;
}
button.wave:hover div{
    top: 0;
}
button.wave div::before{
    content: '';
    position: absolute;
    width: 100%;
    height: 22px;
    top: -21px;
    left: 0;
    background: url(../../public/img/wave.png);
    animation: run 0.5s linear infinite;
}
@keyframes run {
    from{
        background-position-x: 0;
    }
    to{
        background-position-x: 118px;
    }
}
</style>