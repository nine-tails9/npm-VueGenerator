<template>
    <div id="email">
            <div class="col" :class="['col-md-' + size]">
                <div class="form-group">
                    <label for="email">Email</label>

                    <div class="input-group">
                    <input
                            type="email"
                            :placeholder='placeholder'
                            class="form-control"
                            @input="$emit('input',$event.target.value)"
                            :id="id"
                            :disabled="disabled"
                            :value="value"
                    >
                    <slot></slot>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Email",
        props: {
            placeholder: {
                type: String,
                default: 'Enter Mail'
            },
            size: {
                type: Number,
                default: 12
            },
            id: {
                type: String,
                default: "email"
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: String
            }

        },

        data() {
            return {
            }
        },

        methods: {
            update(){
                console.log('tes')
            }
        }

    };
</script>

<style>
</style>
