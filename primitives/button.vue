<template>
    <div id="button">
        <div class="form-group">
        <button
                :type="type"
                class="btn"
                :class="['btn-' + size, !outline?'btn-' + color: 'btn-outline-' + color, 'float-' + position]"
                @click="$emit('click')"
        >
            <slot></slot>
        </button>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Button",
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
            },
            type: {
                type: String,
                default: "button"
            },
            position: {
                type: String,
                default: "none"

            }
        },

        data() {
            return {

            }
        },

    };
</script>

<style>
</style>
