<template>
    <div>
        <p-radio name="sex" label="male" v-model="gender">男</p-radio>
        <p-radio name="sex" label="female" v-model="gender">女</p-radio>
        {{gender}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            gender: "ss"
        }
    }
}
</script>