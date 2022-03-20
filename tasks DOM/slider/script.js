
const btnLeft = document.querySelector("#left")
const btnRight = document.querySelector("#right")
const items = document.querySelector("#items")

const computedStyle = getComputedStyle(items)

btnLeft.addEventListener("click", e => {
    let currentRight = parseInt(computedStyle.left)
    if(currentRight < 0){
        items.style.left = `${currentRight + 100}px`
    }
})

btnRight.addEventListener("click", e => {
    let currentRight = parseInt(computedStyle.left)
    if(currentRight > -500){
        items.style.left = `${currentRight - 100}px`
    }
})