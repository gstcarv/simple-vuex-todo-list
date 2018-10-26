<template>
  <div id="app">
    <TheNavbar />
    <br>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <todos-table />
        </div>
        <div class="col-md-6">
          <new-todo-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import TodosTable from './components/TodosTable'
import TheNavbar from './components/TheNavbar'
import NewTodoForm from './components/NewTodoForm'

export default {
  name: 'app',
  components: {
    TheNavbar,
    TodosTable,
    NewTodoForm
  }
}
</script>

<style>



</style>
