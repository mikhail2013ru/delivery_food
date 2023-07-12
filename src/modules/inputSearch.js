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
                return item.kitchen === 'Пицца'
            })
            
            console.log(newArr)
            // renderItems(newArr)
        }
        
    })
}

export default inputSearch
    
    