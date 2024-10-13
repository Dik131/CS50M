const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

newTodo = () => {
  const li = document.createElement('li')
  li.innerHTML = `
    <input type="checkbox"/>
    <button>Delete</button>
    <span>text</span>
  `
}

deleteTodo = () => {}
