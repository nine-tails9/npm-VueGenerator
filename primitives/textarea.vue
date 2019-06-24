<template>
    <div id="textarea">

        <div class="form-group">
        <div class="input-group">
            <textarea class="form-control"
                  :rows="rows"
                  :placeholder="placeholder"
                  :cols="cols"
                  @input="$emit('input',$event.target.value)"

        >
        </textarea>
            <slot></slot>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Textarea",
        props: {
            placeholder: {
                type: String,
                default: 'Enter Text Here....'
            },
            rows: {
                type: Number,
                default: 3
            },
            cols: {
                type: Number,
                default: 3
            }
        }
    }
</script>

<style scoped>

</style>