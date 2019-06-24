<template>
  <div id="dropdown">
      <div :class="[direction]">
          <button
                  class="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  :class="['btn-' + size, !outline?'btn-' + color: 'btn-outline-' + color]">
              {{ title }}
          </button>
          <slot></slot>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Dropdown",
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
            title: {
                type: String,
                default: 'Default'
            },
            direction: {
                type: String,
                default: 'dropdown'
            }
        }
    }
</script>

<style scoped>

</style>