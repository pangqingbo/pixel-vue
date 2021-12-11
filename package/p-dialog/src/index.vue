<template>
    <transition name="dialog-fade">
        <div class="pDialogWrapper" v-show="visible">
            <div class="pDialog" :style="{width, marginTop:top}">
                <div class="pDialogHeader">
                    <slot name="header">
                        <span class="pDialogTitle">{{ title }}</span>
                    </slot>
                    <button class="pDialogHeaderBtn" @click="handleClose">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="pDialogBody">
                    <slot></slot>
                </div>
                <div class="pDialogFooter" v-if="$slots.footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "PDialog",
    props: {
        title: {
            type: String,
            default: "标题"
        },
        width: {
            type: String,
            default: "50%"
        },
        top: {
            type: String,
            default: "0"
        },
        visible: {
            type: Boolean,
            default: false
        },
    },
    emits: ['update:visible'],
    setup(props, {emit}){
        const handleClose = () => {
            emit('update:visible', false)
        }
        return{
            handleClose
        }
    }
};
</script>

<style>
.pDialogWrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0;
    overflow: auto;
    z-index: 1999;
    background-color: rgba(0, 0, 0, 0.5);
}
.pDialog {
    position: relative;
    width: 30%;
    background-color: #fff;
    margin: 15vh auto 50px;
    border-radius: 5px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
}
.pDialog .pDialogHeader {
    display: flex;
    justify-content: space-between;
    padding: 15px 20px 10px;
}
.pDialog .pDialogHeader .pDialogTitle {
    font-size: 18px;
    color: #3e3e41;
}
.pDialog .pDialogHeader .pDialogHeaderBtn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-size: 17px;
    color: #909399;
}
.pDialog .pDialogBody {
    padding: 15px 20px;
    font-size: 14px;
    color: #606266;
}
.pDialog .pDialogFooter {
    padding: 10px 20px;
    display: flex;
    justify-content: end;
}
.pDialog .pDialogFooter button:first-child{
    margin-right: 5px;
}
/* dialog显示/隐藏动画效果 */
.dialog-fade-enter-active{
    animation: fade 1s;
}
.dialog-fade-leave-active{
    animation: fade .3s reverse;
}
@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>