const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')
    const buttonSend = modalCart.querySelector('.button-primary')
    const clearCart = modalCart.querySelector('.clear-cart')
    const modalPrice = modalCart.querySelector('.modal-pricetag')

    const resetCart = () => {
        body.innerHTML = ''
        localStorage.removeItem('cart')
        closeModal()
    }

    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
       
        cartArray.map((item) => {
            if (item.id === id) {
                item.count++
                console.log(item.id)
            }
            console.log(item)
            return item
        })

        // const countPrice = () => {
        //     cartArray.forEach(({ name, price, id, count }) => {
        //     console.log(price * count)
        //     return price * count
        // })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)

        cartArray.forEach(({ name, price, id, count }) => {
            console.log(price * count)
            return price * count
        })

        console.log(cartArray.price)
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        
        cartArray.map((item) => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0
                // if (item.count > 0) {
                //     item.count--
                // } else {
                //     item.count = 0
                // }
                // console.log(id)
            }

            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
    }
    
    const renderItems = (data) => {
        body.innerHTML = ''
        data.forEach(({ name, price, id, count }) => {
            const cartElem = document.createElement('div')
            cartElem.classList.add('food-row')
            cartElem.innerHTML = `
            <span class="food-name">${name}</span>
            <strong class="food-price">${price} ₽</strong>
            <div class="food-counter">
            <button class="counter-button btn-dec" data-index="${id}">-</button>
            <span class="counter">${count}</span>
            <button class="counter-button btn-inc" data-index="${id}">+</button>
            </div>
            `
            
            body.append(cartElem)

        })
        // return data
        
    }

    body.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('btn-inc')) {
            incrementCount(e.target.dataset.index)
            
        } else if (e.target.classList.contains('btn-dec')) {
            decrementCount(e.target.dataset.index)
        }
    })

    buttonSend.addEventListener('click', () => {
        const cartArray = localStorage.getItem('cart')

        if (JSON.stringify(cartArray) !== 'null') {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: cartArray
            })
            .then(response => {
                if (response.ok) {
                    resetCart()
                }
            })
            .catch(e => {
                console.error(e)
            })
        }
    })

    clearCart.addEventListener('click', () => {
        body.innerHTML = ''
        closeModal()
    })

    buttonCart.addEventListener('click', () => {
        body.innerHTML = ''
        if (JSON.parse(localStorage.getItem('cart'))) {
                renderItems(JSON.parse(localStorage.getItem('cart')))
        }

        openModal()

        const cartArray = JSON.parse(localStorage.getItem('cart'))

        // const resultSum = () => {
        //     Object.keys(cartArray).reduce((total, key) => {
        //         total += cartArray[key].price
        //         return total
        //     }, 0)
        // }

        if (JSON.stringify(cartArray) === 'null') {
            modalPrice.textContent = `Ваша корзина пуста!`
            buttonSend.style.display = 'none'
        } else {
            buttonSend.style.display = 'flex'
            let result = 0
            cartArray.forEach(({ price } ) => {
                result = result + price
                return result
            })

            modalPrice.textContent = `${result} ₽`
        }
    })

    const openModal = () => {
        modalCart.classList.add('is-open')
    }

    close.addEventListener('click', () => {
        closeModal()
    })
    
    const closeModal = () => {
        modalCart.classList.remove('is-open')
    }

    return {
        openModal, closeModal, buttonCart, modalCart, close
    }
}

const {openModal, closeModal, buttonCart, modalCart } = cart()
export {openModal, closeModal, buttonCart, modalCart }

export default cart 
