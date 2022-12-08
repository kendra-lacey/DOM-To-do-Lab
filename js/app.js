// Element References
const inp = document.getElementById('tasks')
const btn = document.getElementById ('submit-button')
const list = document.getElementById('to-do-list')




// Helper functions

function handleClick(evt){
  evt.target
}

btn.addEventListener('click', function(evt){
  const li = document.createElement('li')
  li.textContent = inp.value
  document.querySelector('ul').appendChild(li)
  inp.value = ''
})