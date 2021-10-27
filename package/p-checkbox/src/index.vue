<template>
    <div id="pcheckContainer" :class="{ checked }" @click="toggleChecked">
        <i class="fas fa-check"></i>
    </div>
</template>

<script>
// import { ref } from '@vue/reactivity'
import "../../public/icon/css/all.min.css"
export default {
    name: 'PCheckbox',
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
            type: Boolean,
            default: false
        },
    },
    setup(){
        function toggleChecked(e){
            console.log(e.target.className.split(' ').filter(item => {
                item !== 'checked'
            }))
        }
        return{
            toggleChecked
        }
    }
}
</script>

<style scoped>
#pcheckContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ebfafc;
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 1),
                3px 3px 5px rgba(0, 0, 0, .1);
}
#pcheckContainer i{
    font-size: 10px;
    pointer-events: none;
}
#pcheckContainer.checked{
    transform: scale(0.95);
    background: linear-gradient(yellow, red);
    color: #fff;
    box-shadow: inset -1px -1px 3px rgba(255, 255, 255, 1),
                inset 3px 3px 5px rgba(0, 0, 0, .1);
}
</style>