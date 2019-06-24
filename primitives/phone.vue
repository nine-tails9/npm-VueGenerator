<template>
    <div id="phone">
        <div class="col" :class="['col-md-' + size]">
            <div class="form-group">
                <label for="tel">Tel</label>
                <div class="input-group">

                <input
                        type="tel"
                        :placeholder='placeholder'
                        class="form-control"
                        @input="$emit('input',$event.target.value)"
                        :minlength="minlength"
                        :maxlength="maxlength"
                        :id="id"
                        :value="value"
                        :disabled="disabled"
                >
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Phone",
        props: {
            placeholder: {
                type: String,
                default: 'Enter Contact'
            },
            size: {
                type: Number,
                default: 12
            },
            minlength: {
                type: Number,
                default: 10
            },
            maxlength: {
                type: Number,
                default: 10
            },
            id: {
                type: String,
                default: 'phone'
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>