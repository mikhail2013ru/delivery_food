import renderItems from "./renderItems.js"

const inputSearch = (data) => {
    const cards = document.querySelectorAll('.cards')
    const input = document.querySelector('.input-search')
    
    
    input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {
            const searchText = new RegExp(input.value.trim(), 'i');
            const result = Object.values(data)

            let newArr = []
            newArr = result.filter((item) => {
                if (!searchText.test(item.kitchen)) {
                    return item
                }
                // return item.kitchen === 'Пицца'
            })

            cards.forEach((card) => {
                const title = card.querySelector('.category');
                console.log(title)
                if (!searchText.test(title.textContent)) {
                    card.parentNode.style.display = 'none';
                } else {
                    card.parentNode.style.display = '';
                }
            });
            input.value = '';

            // newArr.forEach((card) => {
            //     console.log(card)
            //     // card.parentNode.style.display = 'none';
            // })


            
            // console.log(newArr)
            // renderItems(newArr)
        }
        
    })
}

export default inputSearch
    
    