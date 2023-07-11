import { renderItems } from "./menu.js"

const inputSearch = (data) => {
    const cards = document.querySelectorAll('.cards')
    const input = document.querySelector('.input-search')
    
    
    input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {
            const searchText = new RegExp(input.value.trim(), 'i');
            const result = Object.values(data)

            // result = data.filter((card) => {
            //     const { kitchen } = card
            //     return kitchen
            // })

            // console.log(result)
            let newArr = []
            newArr = result.filter((item) => {
                return item.kitchen === 'Пицца'
            })
            
            console.log(newArr)
            renderItems(data)

            // console.log(searchText.test(input.value))    
            // cards.forEach((card) => {
            //     const title = card.querySelector('.category');
            //     console.log(card)
            //     if (!searchText.test(title.textContent)) {
            //         card.parentNode.style.display = 'none';
            //     } else {
            //         // card.parentNode.style.display = '';
            //         console.log('1')
            //     }
            // });
            // input.value = '';
        }
        
    })
}

export default inputSearch
    
    