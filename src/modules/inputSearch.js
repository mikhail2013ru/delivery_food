import renderItems from "./renderItems.js"

const inputSearch = (data) => {
    const cards = document.querySelectorAll('.cards')
    const input = document.querySelector('.input-search')
    
    
    input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {
            const searchText = new RegExp(input.value.trim(), 'i');
            const result = Object.values(data)

            let newResult = result.map((item) => {
                if (searchText.test(item.kitchen)) {
                    console.log(item)
                }
            })

            // console.log(newResult)

            // cards.forEach((card) => {
            //     const title = card.querySelector('.category');
            //     console.log(title)
            //     if (!searchText.test(title.textContent)) {
            //         card.parentNode.style.display = 'none';
            //     } else {
            //         card.parentNode.style.display = '';
            //     }
            // });
            // input.value = '';
            // renderItems(newResult)
        }
        
    })
}

export default inputSearch
    
    