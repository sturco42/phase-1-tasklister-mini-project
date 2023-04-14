const form = document.querySelector("form")

const createTask = (taskValue) => {
  const li = document.createElement("li")
  li.className = "task-item"
  li.innerText = taskValue

  const button = document.createElement("button")
  button.className = "delete-btn"
  button.innerText = "X"
  button.addEventListener("click", () => li.remove())

  li.appendChild(button)
  tasks.appendChild(li)
}

form.addEventListener("submit", e => {
  e.preventDefault()
  let userInput = e.target
  ["new-task-description"].value
  createTask(userInput)
  e.target.reset()
})