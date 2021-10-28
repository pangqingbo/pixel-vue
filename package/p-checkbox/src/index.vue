<template>
    <div id="pcheckContainer" :class="{ checked }">
        
    </div>
</template>

<script>
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
    }
}
</script>

<style scoped>

</style>