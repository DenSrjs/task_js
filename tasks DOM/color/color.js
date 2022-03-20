const quantitySelector = document.querySelector('.quantity-selector')
const colorSelector = document.querySelector('.color-selector')
const blocks = document.querySelector('.blocks')

function createMarkup(quantity){
    let markup = ''

    for(let i = 0; i < quantity; i++){
        const block = document.createElement('div')
        block.classList.add('item')
        block.innerText = i + 1

        markup += block.outerHTML
    }

    return markup
}

quantitySelector.addEventListener('change', (e) => {
    const quantity = e.target.value
    const markup = createMarkup(quantity)

    blocks.innerHTML = markup
})

function colorBlock(block, color){
    block.style.backgroundColor = color
}

let changed = false

colorSelector.addEventListener('change', e => {
    const color = e.target.value
    const item = document.querySelectorAll('.item')

    changed = !changed

    for(let i = 0; i < item.length; i++){
        const currentBlock = item[i]
        const blockNumber = i + 1
        let colorToApply = ''

        if(changed){
            colorToApply = blockNumber % 2 !== 0? color : "#fff"
        }else{
            colorToApply = blockNumber % 2 === 0? color : "#fff"
        }

        colorBlock(currentBlock, colorToApply)
    }

})