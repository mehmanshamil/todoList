const todoAddForm = document.querySelector("#todoAddForm")
const todoInput = document.querySelector("#todoName")
const listgrop = document.querySelector(".list-group")
todoAddForm.addEventListener("submit", getForm);

function getForm(e) {
    e.preventDefault()
    var todo = JSON.parse(localStorage.getItem("todo")) || [];
    if (todoInput.value == "" || null) {
        alert("zehmet olmasa deyer daxil edin")
    } else {
        todo.push(todoInput.value)
        localStorage.setItem("todo", JSON.stringify(todo))
        addTodo()
    }
    todoInput.value = ""
}

function addTodo() {
    listgrop.innerHTML = ""
    let todo = JSON.parse(localStorage.getItem("todo")) || [];
    if (todo != [] || todo != null) {
        todo.map((item, index) => {
            listgrop.innerHTML += `
             <li class="list-group-item d-flex justify-content-between">${item}
             <div class="d-flex  align-items-center">
               <svg onclick=(display('${item}')) xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
              </svg>
                <a href="#" onclick=(deleteItem(${index})) class="delete-item mx-3">
                  <i class="fa fa-remove rovshan"></i>
                </a>
                 </div>
              </li>
            `
        })
    }
}

addTodo()

function deleteItem(index) {
    let todo = JSON.parse(localStorage.getItem("todo")) || [];
    todo.forEach((item, i) => i == index ? todo.splice(index, 1) : null)
    localStorage.setItem("todo", JSON.stringify(todo))
    addTodo()
}

document.getElementById("todoClearButton").addEventListener("click", totalTrash)

function totalTrash(e) {
    e.preventDefault()
    localStorage.removeItem("todo")
    addTodo()
}

let modal = document.querySelector("#modal-special")
function display(text) {
    modal.innerHTML = `<i id="closeDetail" onclick="closedFunc()" class="fa-solid fa-x"></i>
    <input id="valNew" value=${text} type="text">
    <button onclick="updatedFunc('${text}')">Save</button>`
    modal.style.display = "flex"
}

function closedFunc() {
    modal.style.display = "none"
}

function updatedFunc(text) {
    let input = document.querySelector("#valNew")
    if (!input.value.trim()) {
        alert("yeni deyer daxil edin")
        return
    }
    let todo = JSON.parse(localStorage.getItem("todo")) || [];
    todo.forEach((item, i) => item == text ? todo.splice(i, 1, input.value) : null)
    localStorage.setItem("todo", JSON.stringify(todo))
    addTodo()
    closedFunc()
}