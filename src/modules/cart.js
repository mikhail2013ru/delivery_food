const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    
    const renderItems = (data) => {
        data.forEach(cartItem => {
            console.log(cartItem)
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
