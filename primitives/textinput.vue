<template>
    <div id="textinput">
        <div class="form-group">

            <label for="name">{{label}}</label>

            <div class="input-group">
                <input
                        type="text"
                        :placeholder='placeholder'
                        class="form-control"
                        @input="$emit('input',$event.target.value)"
                        :id="id"
                        :value="value"
                        :disabled="disabled"
                        :autocomplete="autocomplete"
                >
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "textinput",
        props: {
            placeholder: {
                type: String,
                default: 'Enter Text'
            },
            size: {
                type: Number,
                default: 12
            },
            id: {
                type: String,
                default: "name"
            },
            value: {
                type: String,
            },
            disabled: {
                type: Boolean,
                default: false
            },
            autocomplete: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: "Name"
            }

        },
    }
</script>

<style scoped>

</style>
