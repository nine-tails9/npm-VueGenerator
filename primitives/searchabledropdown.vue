<template>
    <div id="searchabledropdown">
        <div class="row">
            <div class="col" :class="['col-md-' + size]">
                <div class="form-group">
                    <label for="exampleFormControlInput1"></label>
                    <input
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Search.."
                            @focus="expanded = true"
                            @blur="expanded = false"
                            @input="search(query)"
                            v-model="query"
                    >
                    <ul class="list-group list-group-flush" v-show="expanded">
                        <li class="list-group-item" v-for="item in search(query)"> {{ item }}</li>
                    </ul>
                </div>
            </div>


        </div>
    </div>
</template>

<script>
    export default {
        name: "SearchableDropdown",
        props: {
            size: {
                type: Number,
                default: 6
            },

            title: {
                type: String,
                default: 'Default'
            },
            items: {
                type: Array
            }

        },
        data(){
            return {
                expanded: false,
                query: ""
            }
        },
        methods: {
            search(el){
                return this.items.filter(e => {
                    return e.toUpperCase().match(el.toUpperCase());
                });
            }
        }

    }
</script>

<style scoped>

</style>