const todoIp = document.querySelector("#todo-ip");
const todosContainer = document.querySelector(".todos");
const completedCount = document.querySelector(".itemsCompleted");
let todoList = [];         //Used "todoList" intsead of "todos"

todoIp.addEventListener("keyup",function(event){                      //To add the Todo's
    if(event.key == "Enter" || event.keyCode == 13){
        // To add Todos on enter
        // console.log(todoList);
        if(event.target.value !== ""){
            todoList.push({value:event.target.value, checked:false });   //Pushing values in an array
            newTodo(event.target.value);
        }
        event.target.value = "";
        countCompleted();
    }
});

function newTodo(value){
    const todo = document.createElement("div");
    const todoText = document.createElement("p");
    const todoCheckbox = document.createElement("input");
    const todoCheckboxLabel = document.createElement("label");
    const todoCross = document.createElement("span");

    let obj = todoList.find((t) => t.value == value);       //Object declaration

    todoText.textContent = value;
    todoCheckbox.type = "checkbox";
    todoCheckbox.name = "checkbox";
    todoCheckboxLabel.htmlFor = "checkbox"; 
    
    todoCheckboxLabel.addEventListener("click",function(event){           //Function for checkbox checked / unchecked
        
        if(todoCheckbox.checked)
        {
            todoCheckbox.checked = false;
            todoText.style.textDecoration = "none";
            todoCheckboxLabel.classList.remove("active");
            obj.checked = false;
            countCompleted();
            // console.log(todoList);
        }
        
        else
        {
            obj.checked = true;
            countCompleted();
            todoCheckbox.checked = true;
            todoText.style.textDecoration = "line-through";
            todoCheckboxLabel.classList.add("active");
            // console.log(todoList);
        }
    });

    todoCross.classList.add("cross");
    todoCross.addEventListener("click",function(event){          //Function For "X" to remove item from list   
        event.target.parentElement.remove();
        todoList = todoList.filter((t) => t.value !== value);   //To remove the item from todo-List
        countCompleted();                 
    });

    todo.classList.add("todo");
    todoCheckboxLabel.classList.add("circle");
    todoCross.classList.add("cross");

    todo.appendChild(todoCheckbox);
    todo.appendChild(todoCheckboxLabel);
    todo.appendChild(todoText);
    todo.appendChild(todoCross);

    todosContainer.appendChild(todo);
}

function countCompleted(){                    //Function for how many items left
    completedCount.textContent = `${
        todoList.filter((t)=> t.checked == false).length         //To create new array by filtering, for items which are unchecked
    }items-left`
}

function changeTheme(){
    document.body.classList.toggle("light");       //To change the theme/mode
}
function clearCompleted(){
    document.querySelectorAll(".todo").forEach((todo) => {
        if(todo.querySelector("input").checked)
        todo.remove();
    });
    countCompleted();
}

function showAll(event){
    document.querySelectorAll(".filters div").forEach((d, i) => {          //To show " All " tab is active. for All index i = 0
        if (i === 0) {
          d.classList.add("filter-activetabs");
        } else {
          d.classList.remove("filter-activetabs");
        }
    });
    document.querySelectorAll(".todo").forEach((todo) => {
        todo.style.display = "grid";
    });
}

function filterActive(){
    document.querySelectorAll(".filters div").forEach((d, i) => {          //To show " Active " tab is active, with index i = 1.
        if (i === 1) {
          d.classList.add("filter-activetabs");
        } else {
          d.classList.remove("filter-activetabs");
        }
    });
    document.querySelectorAll(".todo").forEach((todo) => {
        todo.style.display = "grid";
    if(todo.querySelector("input").checked){
        todo.style.display = "none";
    }
    });
}

function filterCompleted(){
    document.querySelectorAll(".filters div").forEach((d, i) => {          //To show " Completed " tab is active, with index i = 2.
        if (i === 2) {
          d.classList.add("filter-activetabs");
        } else {
          d.classList.remove("filter-activetabs");
        }
    });
    document.querySelectorAll(".todo").forEach((todo) => {
        todo.style.display = "grid";
    if(!todo.querySelector("input").checked){
        todo.style.display = "none";
    }
    });
}