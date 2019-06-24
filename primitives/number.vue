<template>
    <div id="number">
        <div class="col" :class="['col-md-' + size]">
            <div class="form-group">
                <div class="input-group">

                <input
                        type="number"
                        :placeholder='placeholder'
                        class="form-control form-control-alternative"
                        @input="$emit('input',$event.target.value)"
                        :min="min"
                        :max="max"
                >
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "number",
        props: {
            placeholder: {
                type: String,
                default: 'Enter Count'
            },
            size: {
                type: Number,
                default: 12
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
            }
        }
    }
</script>

<style scoped>

</style>