const bodyEl = document.querySelector('body')
const inputEl = document.querySelector('.input')


inputEl.addEventListener('input', () => {
    inputEl.checked ? bodyEl.style.background = 'black' : bodyEl.style.background = 'white'
})
