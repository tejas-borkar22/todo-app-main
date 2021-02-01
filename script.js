const todoIp = document.querySelector("#todo-ip")

const todoList = [];

todoIp.addEventListener("keyup",function(event){
    if(event.key == "Enter" || event.keyCode == 13){
        // To add Todos on enter
        todoList.push(event.target.value);   //Pushing values in an array
        // console.log(todoList);
        todoIp.value ="";                    //To make Ip bar null
    }
})

function changeTheme(){
    document.body.classList.toggle("light");       //To change the theme/mode
}