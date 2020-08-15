//Dom selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

// Functions
function addTodo(event) {
  //This stops from submission and refreshing of page
  event.preventDefault();

  //Creating Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Creating list elements
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoDiv.classList.add("todo-item");
  // Appending the child to parent
  todoDiv.appendChild(newTodo);

  //Button checked
  const completedButton = document.createElement("button");
  /*below we can also use create element or use inner HTML to add <i>*/
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  // Appending the child to parent
  todoDiv.appendChild(completedButton);

  //Button Thrash
  const TrashButton = document.createElement("button");
  /*below we can also use create element or use inner HTML to add <i>*/
  TrashButton.innerHTML = '<i class="fas fa-trash"></i>';
  TrashButton.classList.add("trash-btn");
  // Appending the child to parent
  todoDiv.appendChild(TrashButton);
  // Appending it to the Ul
  todoList.appendChild(todoDiv);

  // Clear input box after enter
  todoInput.value = "";
}

function deleteCheck(event) {
  // to check what we are clicking on // console.log(event.target);
  //grabbing the item we are clicking on
  const item = event.target;
  //Deleting todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    //To add animation to it
    todo.classList.add("disappear");
    //To remove the element completely from UI and see the animation we add eventlistener End
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //Strike through todo
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "unfinished":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
