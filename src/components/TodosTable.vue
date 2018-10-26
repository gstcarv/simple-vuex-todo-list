<template>
    <table class="table table-striped table-hover"
            style="margin-bottom: 50px">
        <thead>
            <tr>
                <th>Todo</th>
                <th>Created At</th>
                <th class="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(todo, index) in todos" 
                :key="index">
                <td>{{ todo.content }}</td>
                <td>{{ todo.createdAt | time }}</td>
                <td class="text-center">
                    <i class="fa fa-trash delete-button"
                       @click="deleteTodo({ index: index })"></i>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import store,{ mapState, mapActions, mapMutations } from 'vuex'

export default {
    name: 'TodosTable',
    computed:{
        ...mapState([
            'todos',
        ])
    },
    filters: {
        time(date){
            return date.toLocaleTimeString()
        }
    },
    methods: {
        ...mapMutations([
            'deleteTodo'
        ])
    }
}
</script>

<style scoped>

.delete-button {
    cursor: pointer
}

.delete-button:hover {
    color: rgb(202, 52, 52)
}

</style>
