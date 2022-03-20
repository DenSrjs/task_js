const btnOpen = document.querySelector("#openOverlay")
const body = document.body
const modalWindow = createElement("Hello World!!!")

btnOpen.addEventListener('click', e => {
    body.appendChild(modalWindow)
})

function createElement(content){

    const el = document.createElement('div')
    el.classList.add('overlay')

    el.addEventListener('click', e => {
        if(!e.target.classList.contains('content')){
            close.click()
        }
    })

    const containerElement = document.createElement('div')
    containerElement.classList.add('modal-container')

    const contentElement = document.createElement('div')
    contentElement.textContent = content
    contentElement.classList.add('content')

    const close = document.createElement('button')
    close.textContent = "X"
    close.classList.add('close')
    close.addEventListener('click', () => {
        body.removeChild(el)
    })

    el.appendChild(containerElement)
    containerElement.appendChild(close)
    containerElement.appendChild(contentElement)

    return el
}

