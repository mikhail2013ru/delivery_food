import renderItems from "./renderItems.js"

const inputSearch = (data) => {
    const input = document.querySelector('.input-search')
    let newData = []
    
    input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {
            const searchText = new RegExp(input.value.trim(), 'i');
            for (const value of data) {
                if (searchText.test(value.kitchen)) {
                    newData.push(value)
                    console.log(value)                    
                }
            }

            document.querySelector('.cards-restaurants').innerHTML = ''

            renderItems(newData)            
        }
        
    })
}

export default inputSearch
    
    