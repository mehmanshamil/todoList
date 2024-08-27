const todoAddForm = document.querySelector("#todoAddForm")
const todoInput = document.querySelector("#todoName")
const listgrop = document.querySelector(".list-group")
todoAddForm.addEventListener("submit", getForm);

function getForm(e) {
    e.preventDefault()
    let data = JSON.parse(localStorage.getItem("todo")) || []
    if (!todoInput.value.trim()) {
        alert("zehmet olmasa todo daxil edin")
    } else {
        data.push(todoInput.value)
    }
    localStorage.setItem("todo", JSON.stringify(data))
    todoInput.value = ""
    todoVisiable()
}


function todoVisiable() {
    listgrop.innerHTML = ""
    const todo = JSON.parse(localStorage.getItem("todo")) || [];

    if (todo != []) {
        todo.forEach((item, index) => {
            listgrop.innerHTML += `
            <li class="list-group-item d-flex justify-content-between">${item}
            <div class="d-flex  align-items-center">
              <svg onclick="(getModal('${item}',${index}))" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
             <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
             </svg>
               <a href="#" onclick="removeItem(${index})"class="delete-item mx-3">
                 <i class="fa fa-remove rovshan"></i>
               </a>
                </div>
             </li>
           `
        })
    }
}
todoVisiable()

function removeItem(index) {
    let todo = JSON.parse(localStorage.getItem("todo")) || [];
    todo.splice(index, 1)
    localStorage.setItem("todo", JSON.stringify(todo))
    todoVisiable()
}

document.getElementById("todoClearButton").addEventListener("click", allremoveData)
function allremoveData() {
    localStorage.removeItem("todo")
    todoVisiable()
}
let modal = document.getElementById("modal-special")

function getModal(item, index) {
    console.log(item);
    modal.innerHTML = ""
    modal.innerHTML = `<i id="closeDetail" onclick="closedFunc()" class="fa-solid fa-x"></i>
     <input id="valNew" value="${item}" type="text">
     <button onclick="updatedFunc('${index}')">Save</button>`
    modal.style.display = "flex"
}
function closedFunc() {
    modal.style.display = "none"
}

function updatedFunc(index) {
    let newInputValue = document.getElementById("valNew").value
    let todo = JSON.parse(localStorage.getItem("todo")) || []
    console.log(newInputValue);
    if (!newInputValue.trim()) {
        alert("zehmet olmasa yeni deyeri daxil edin")
    } else {
        todo.splice(index, 1, `${newInputValue}`)
        // todo.forEach((item, i) => i == index ? todo.splice(i, 1, newInputValue) : null)
        console.log(todo);
    }
    localStorage.setItem("todo", JSON.stringify(todo))
    todoVisiable()
    closedFunc()
}