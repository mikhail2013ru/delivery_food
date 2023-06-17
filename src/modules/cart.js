const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')

    const incrementCount = (id) => {
        console.log(id)
    }

    const decrementCount = (id) => {
        console.log(id)
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
                    <button class="counter-button btn-dec">-</button>
                    <span class="counter">${count}</span>
                    <button class="counter-button btn-inc">+</button>
                </div>
            `

            cartElem.querySelector('.btn-dec').addEventListener('click', () => {
                decrementCount(id)
            })

            cartElem.querySelector('.btn-inc').addEventListener('click', () => {
                incrementCount(id)
            })

            body.append(cartElem)
            console.log(cartElem)

        })
    }

    buttonCart.addEventListener('click', () => {
       if (JSON.parse(localStorage.getItem('cart'))) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }

        openModal()
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
