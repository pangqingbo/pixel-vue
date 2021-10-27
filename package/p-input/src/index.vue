 <template>
    <div id="inputContainer" :style="styleArr" :class="type">
        <div>
            <div class="iconSlot"><slot name="preicon"></slot></div>
            <div>
                <label v-show="type" :class="classObj">{{placeholder}}</label>
                <input
                type="text"
                :placeholder="placeholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                @focus="setBorder(),upperPlaceholder()"
                @blur="removeBorder"
                ref="myInput"
                >
            </div>
            <div class="iconSlot"><slot name="suficon"></slot></div>
        </div>
    </div>
</template>

<script>
import { ref, toRefs } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';

export default {
    name: 'PInput',
    props: {
        placeholder: String,
        modelValue: String,
        type: String,
    },
    emits: ['update:modelValue'],
    setup(props){
        let { type } = toRefs(props);
        const myInput = ref(null);
        let classObj = ref(null);
        function upperPlaceholder(){
            if(type.value === 'noBorder'){
                classObj.value = {
                    active: true,
                }
            }
        }
        onMounted(() => {
            if(type.value === 'noBorder'){
                myInput.value.placeholder = ''
            }
        })

        // 输入框获取焦点时执行此函数，设置input输入框的颜色和阴影为蓝色
        // 通过将最外层div的样式绑定到一个包含对象的数组styleArr来应用样式
        let styleArr = ref([]);
        function setBorder(){
            styleArr.value.push({
                border: '1px solid skyblue',
                boxShadow: '0 0 2px skyblue',
            })
            return styleArr
        }

        // 输入框失去焦点时执行此函数，将input输入框恢复为原来的样式
        function removeBorder(){
            classObj.value = null;
            styleArr.value.pop();
        }
        return {
            styleArr,
            setBorder,
            removeBorder,
            upperPlaceholder,
            classObj,
            myInput
        }
    }
}
</script>

<style scoped>
div#inputContainer{
    display: inline-block;
    border: 1px solid black;
    text-indent: justify;
    background: #fff;
}
div#inputContainer div{
    float: left;
}
input{
    width: 220px;
    height: 22px;
    border: none;
    outline: none;
}
div.iconSlot{
    margin: 0 3px;
}
div#inputContainer.noBorder{
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
}
div#inputContainer.noBorder>div:first-child{
    border-bottom: 1px solid rgba(128, 128, 128, 0.479);
}
div#inputContainer.noBorder div div:nth-child(2){
    position: relative;
}
div#inputContainer.noBorder div label{
    position: absolute;
    color: gray;
    left: 1px;
    transition: .3s all ease;
    pointer-events: none;
}
div#inputContainer.noBorder div label.active{
    transform: translateY(-16px);
}
</style>