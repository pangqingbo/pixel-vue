 <template>
    <div id="inputContainer" :class="[`${type}`,{ borderActive }]">
        <div>
            <div class="iconSlot"><slot name="preicon"></slot></div>
            <div>
                <label v-if="type" :class="{ moveUp }">{{placeholder}}</label>
                <input
                type="text"
                :placeholder="`${type==='noBorder'?'':placeholder}`"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)"
                @focus="handleFocus()"
                @blur="handleBlur()"
                >
            </div>
            <div class="iconSlot"><slot name="suficon"></slot></div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    name: 'PInput',
    props: {
        placeholder: String,
        modelValue: null,
        type: String,
    },
    emits: ['update:modelValue'],
    setup(){
        let moveUp = ref(false);
        let borderActive = ref(false);
        function handleFocus(){
            moveUp.value = true;
            borderActive.value = true;
        }

        const handleBlur = () => {
            borderActive.value = false;
            moveUp.value = false;
        }
        
        return {
            moveUp,
            handleBlur,
            borderActive,
            handleFocus
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
div#inputContainer.borderActive{
    border: 1px solid skyblue;
    box-shadow: 0 0 2px skyblue;
}
div.noBorder{
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid transparent;
}
div#inputContainer div{
    float: left;
}
input{
    width: 300px;
    height: 30px;
    border: none;
    outline: none;
    font-size: 16px;
    line-height: 26px;
}
div.iconSlot{
    margin: 0 3px;
    line-height: 32px;
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
    line-height: 32px;
    transition: .3s all ease;
    pointer-events: none;
}
.moveUp{
    transform: translateY(-17px);
}
</style>