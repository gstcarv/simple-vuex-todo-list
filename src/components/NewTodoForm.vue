<template>
    <form @submit.prevent="clear">
        <h3 class="text-primary">Add new Todo</h3>
        <br>
        <input type="text"
               class="form-control" 
               placeholder="Insert your todo here"
               v-model="todoValue">
        <br>
        <button class="btn btn-primary btn-block" 
                :class="isDisabled"
                :disabled="isDisabled"
                @click="addTodo({todoContent: todoValue})">Add Todo</button>
    </form>
</template>

<script>

import store,{ mapMutations } from 'vuex'

export default {
    name: 'NewTodoForm',
    data: () => ({
        todoValue: ''
    }),
    computed: {
        isDisabled(){
            if(!this.todoValue) return true
            else return false
        }
    },
    methods: {
        ...mapMutations([
            'addTodo'
        ]),
        clear(){
            this.todoValue = ''
        }
    },
}
</script>

<style>

</style>
