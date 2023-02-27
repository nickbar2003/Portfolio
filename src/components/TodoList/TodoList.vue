<script setup>
import TodoItem from './TodoItem.vue'
import { reactive } from 'vue'

const todoList = reactive([]);
loadSaved();
let currInput = "Enter new Todo.";


function loadSaved() {

  if (localStorage.getItem('savedTodos')) {
    const existingTodos = JSON.parse(localStorage.getItem('savedTodos'));
    for (let i = 0; i < existingTodos.length; i++) {
      todoList.push(existingTodos[i]);
    }
  }
}

function addTodo() {
  todoList.push(currInput);
  localStorage.setItem('savedTodos', JSON.stringify(todoList));
  currInput = "Enter new Todo.";
}

function removeTodo(title) {
  const indexToRemove = todoList.indexOf(title);

  if (indexToRemove > -1) {
    todoList.splice(indexToRemove, 1);
  }
  localStorage.setItem('savedTodos', JSON.stringify(todoList));

}

</script>


<template>
  <div>
    <router-link id="go-back" to='/'>Go Back</router-link>
    <div id="Todo-title">To-Do List</div>
    <TodoItem :title="todo" v-for="todo in todoList" @remove-clicked='removeTodo' />
    <div id="add-todo">
      <input id="new-todo-text" type="text" v-model="currInput">
      <button id="add-todo-btn" type="button" @click="addTodo">
        Add
      </button>
    </div>
  </div>
</template>


<style scoped>
#Todo-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 40pt;
  border-bottom: dotted .1em #8cb879;
  margin-left: 10em;
  margin-right: 10em;
  text-shadow: .05em .05em .25em grey;
}

#go-back {
  color: #8cb879;
  text-shadow: .05em .05em .25em #8cb879;
  border: solid .05em #8cb879;

}

#add-todo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: .5em;
}
</style>
