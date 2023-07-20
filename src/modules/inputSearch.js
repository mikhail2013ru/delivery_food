import renderItems from "./renderItems.js"

const inputSearch = (data) => {
    const input = document.querySelector('.input-search')
    let newData = []
    
    input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {
            console.log(data)

            data.forEach(name => {
                newData.push(name.kitchen)
            });

            newData = newData.filter(item => {
                const searchText = new RegExp(input.value.trim(), 'i');
                return item.match(searchText)
            })

            
            document.querySelector('.cards-restaurants').innerHTML = ''

            // renderItems(newData)
        }
        
    })
}

export default inputSearch
    
    