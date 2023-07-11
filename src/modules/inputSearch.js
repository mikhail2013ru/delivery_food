import { renderItems } from "./menu"

const inputSearch = (data) => {
    const cards = document.querySelectorAll('.cards')
    const input = document.querySelector('.input-search')
    
    
    input.addEventListener('keydown', (e) => {
        if(e.keyCode === 13) {
            const searchText = new RegExp(input.value.trim(), 'i');

            let Arr = data.filter(function (el) {
                return el.kitchen == 'Пицца'
            })

            console.log(Arr)

            // let result = Object.entries(data)
            // console.log(result)
            // let newArr = []
            // for (const key in data) {
            //     // console.log(data[key].kitchen)
            //     data[key].kitchen.push(newArr)
            //     // let newData = data.filter((name) => {
            //     //     return name
            //     // })
            //     // console.log(newData)
            // }

            // console.log(newArr)


            // const newArr = [2,5,6,7]
            // let result = newArr.filter((elem) => {
            //     return elem > 3
            // })

            // console.log(result)
        }
        
    })
}

export default inputSearch
    
    