const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')
    const buttonSend = modalCart.querySelector('.button-primary')
    const clearCart = modalCart.querySelector('.clear-cart')

    const resetCart = () => {
        body.innerHTML = ''
        localStorage.removeItem('cart')
        closeModal()
    }

    console.log(buttonSend)

    const incrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        
        cartArray.map((item) => {
            if (item.id === id) {
                item.count++
                console.log(id)
            }

            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
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

            // cartElem.querySelector('.btn-dec').addEventListener('click', () => {
            //     decrementCount(id)
            // })

            // cartElem.querySelector('.btn-inc').addEventListener('click', () => {
            //     incrementCount(id)
            // })

            body.append(cartElem)
            console.log(cartElem)

        })
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
        } else {

        }
        // if (cartArray) {
        //     console.log('nixera')
        // } else {
        //     fetch('https://jsonplaceholder.typicode.com/posts', {
        //         method: 'POST',
        //         body: cartArray
        //     })
        //     .then(response => {
        //         if (response.ok) {
        //             resetCart()
        //         }
        //     })
        //     .catch(e => {
        //         console.error(e)
        //     })
        // }

    })

    clearCart.addEventListener('click', () => {
        body.innerHTML = ''
        closeModal()
    })

    buttonCart.addEventListener('click', () => {
       if (JSON.parse(localStorage.getItem('cart'))) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }

        openModal()

        const cartArray = JSON.parse(localStorage.getItem('cart'))
        if (JSON.stringify(cartArray) === 'null') {
            console.log('na xyi')
            buttonSend.style.disable = true
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
