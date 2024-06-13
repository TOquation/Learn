const containerEl = document.querySelector('.container')
const iconEl = document.querySelector('.icon')
const inputEl = document.querySelector('.input')

iconEl.addEventListener('click', () => {
    inputEl.classList.toggle('hide')
})
