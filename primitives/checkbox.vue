<template>
    <div class="checkbox">

        <div class="custom-control custom-checkbox">
            <input
                    class="custom-control-input"
                    :id="id"
                    type="checkbox"
                    :checked = "checked"
                    :disabled = "disabled"
            >
            <label class="custom-control-label" :for="id">
                <slot></slot>
            </label>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Checkbox",
        props: {
            checked: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: "Checkbox"
            },
            id: {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>

</style>