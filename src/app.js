import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy Shopping", isCompleted: false},
        {name: "Clean Bathroom", isCompleted: true},
        {name: "Car's MOT", isCompleted: false}
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          name: this.newTodo,
          isCompleted: false
        });
        this.newTodo = "";
      },
      completeTodo: function(index){
        this.todos[index].isCompleted = true;
      }
    }
  });
});
