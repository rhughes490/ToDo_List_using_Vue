import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      todos: [
        {name: "Buy Shopping", isPriority: false},
        {name: "Clean Bathroom", isPriority: false},
        {name: "Car's MOT", isPriority: false}
      ],
      newTodo: ""
    },
    methods: {
      saveNewTodo: function(){
        this.todos.push({
          name: this.newTodo,
          isPriority: false
        });
        this.newTodo = "";
      },
      makePriority: function(index){
        this.todos[index].isPriority = true;
      }
    }
  });
});
