const todoAddForm = document.querySelector("#todoAddForm")
const todoInput = document.querySelector("#todoName")
const listgrop = document.querySelector(".list-group")
todoAddForm.addEventListener("submit", getForm);
let dataBig = []

function getForm(e) {
    e.preventDefault()
    dataBig.push(todoInput.value)
    addTodo(dataBig)
    console.log(dataBig);
    todoInput.value = ""
}
function addTodo(data) {
    listgrop.innerHTML = ""
    data.map((item) => {
        listgrop.innerHTML += `
         <li class="list-group-item d-flex justify-content-between">${item}
         <div class="d-flex  align-items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
</svg>
                            <a href="#" class="delete-item mx-3">
                                <i class="fa fa-remove rovshan"></i>
                            </a>
         </div>
                        </li>
        `
    })
}
document.getElementById("todoClearButton").addEventListener("click", totalTrash)
function totalTrash() {
    dataBig = []
    addTodo(dataBig)
}




