const inputBox = document.getElementById('todo-input')
const listToDo = document.getElementById('todo-list')

function AddTask(){
    if(inputBox.value === ''){
        alert("No task create");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listToDo.appendChild(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listToDo.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data', listToDo.innerHTML);
}

function showTask(){
    listToDo.innerHTML = localStorage.getItem("data");
}
showTask();