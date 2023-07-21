import renderItems from "./renderItems.js"

const inputSearch = (data) => {
    const input = document.querySelector('.input-search')    
    input.addEventListener('keydown', (e) => {
        let newData = []
        if(e.keyCode === 13) {
            const searchText = new RegExp(input.value.trim(), 'i');
            for (const value of data) {
                if ((input.value.trim() !== '')) {
                    if (searchText.test(value.kitchen) || searchText.test(value.name)) {
                        newData.push(value)  
                        input.value = ''
                        document.querySelector('.cards-restaurants').innerHTML = ''
                    }
                }
            }

            renderItems(newData)            
        }
        
    })
}

export default inputSearch
    
    