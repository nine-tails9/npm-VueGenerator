<template>
    <div id="edit">
        <span class="input-group-prepend">
            <button class="btn" :class="['btn-' + size, !outline?'btn-' + color: 'btn-outline-' + color]">
                Edit
            </button>
        </span>
    </div>
</template>

<script>
    export default {
        name: "edit",
        props: {
            size: {
                type: String,
                default: 'md'
            },
            color: {
                type: String,
                default: 'default'
            },
            outline: {
                type: Boolean,
                default: false
            }
        },
    }
</script>

<style scoped>

</style>