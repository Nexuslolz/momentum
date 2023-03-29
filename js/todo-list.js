const addTodoBtn = document.querySelector('.add-list')
const removeTodoBtn = document.querySelector('.remove-list')
const todoList = document.querySelector('.todo-list-list')
const key = 'plan'
const separator = '###'

// create todo list action

function createItem(content) {
  const li = document.createElement('li')
  li.classList.add('todo-list__item')

  const label = document.createElement('label')
  label.classList.add('todo-list__label')
  label.textContent = content
  li.append(label)

  const input = document.createElement('input')
  input.classList.add('todo-list__input')
  input.setAttribute('type', 'checkbox')
  label.append(input)

  const customCheckbox = document.createElement('div')
  customCheckbox.classList.add('todo-list__checkbox')
  label.append(customCheckbox)

  todoList.append(li)
}

// asking question about your action

addTodoBtn.addEventListener('click', () => {
  const ask = prompt(lng === 'en' ? dictionary.en.todo.ask : dictionary.ru.todo.ask)

  if (ask === null || ask === '') {
    return
  }

  const prevData = localStorage.getItem(key)
  const keptData = prevData ? prevData + separator : ''
  localStorage.setItem(key, keptData + ask)

  createItem(ask)
})

// delete actions from todo list

removeTodoBtn.addEventListener('click', () => {
  document.querySelectorAll('.todo-list__item').forEach((elem) => {
    elem.remove()
  })

  localStorage.removeItem(key)
})

function getPlan() {
  const savedData = localStorage.getItem(key)
  if (!(savedData)) {
    return
  }

  const items = savedData.split(separator)

  for (const item of items) {
    createItem(item)
  }
}

window.addEventListener('load', getPlan)
