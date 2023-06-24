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
        let result = []
        result = cartArray.map((item) => {
            if (item.id === id) {
                item.count++
            }
        
            return { ...item, totalPrice: item.price * item.count }
        })
        console.log(result)
        const totalPrice = result.reduce((sum, elem) => {
            return sum += elem.totalPrice
        }, 0)
        
        modalPrice.textContent = `${totalPrice} ₽`
        localStorage.setItem('cart', JSON.stringify(result))
        renderItems(result)
    }

    const decrementCount = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        let result = []
        
        result = cartArray.map((item) => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0
                // if (item.count > 0) {
                //     item.count--
                // } else {
                //     item.count = 0
                // }
            }

            return { ...item, totalPrice: item.price * item.count }
        })

        result = result.filter(item => item.count)
        const totalPrice = result.reduce((acc, item) => {
            return acc += item.totalPrice
        }, 0)

        modalPrice.textContent = `${totalPrice} ₽`
        localStorage.setItem('cart', JSON.stringify(result))

        if (JSON.stringify(result) === '[]') {
            modalPrice.textContent = `Ваша корзина пуста!`
            buttonSend.style.display = 'none'
        }

        renderItems(result)
    }
    
    const renderItems = (data) => {
        body.innerHTML = ''
        data.forEach(({ name, totalPrice, price, id, count }) => {
            const cartElem = document.createElement('div')
            cartElem.classList.add('food-row')
            cartElem.innerHTML = `
            <span class="food-name">${name}</span>
            <strong class="food-price">${totalPrice || price} ₽</strong>
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

        if (cartArray && (JSON.stringify(cartArray) !== '[]')) {
            buttonSend.style.display = 'flex'
            
            let result = 0
            for(const key in cartArray) {
                const value = cartArray[key];
                result += value['price'];
            }

            modalPrice.textContent = `${result} ₽`
        } else {
            modalPrice.textContent = `Ваша корзина пуста!`
            buttonSend.style.display = 'none'       
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
