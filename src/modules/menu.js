import { 
    openModal, closeModal, buttonCart, 
    modalCart
} from './cart'

// import cart from "./cart"
// const {openModal, closeModal, buttonCart, modalCart } = cart()

buttonCart.addEventListener('click', () => {
    openModal()
})

const menu = () => {
    const restourant = 'pizza-plus'
    const cardsMenu = document.querySelector('.cards-menu')

    const changeTitle = (restaurant) => {
        const restaurantTitle = document.querySelector('.restaurant-title')
        const rating = document.querySelector('.rating')
        const price = document.querySelector('.price')
        const category = document.querySelector('.category')
        
        restaurantTitle.textContent = restaurant.name
        rating.textContent = restaurant.stars
        price.textContent = restaurant.kitchen
        category.textContent = restaurant.kitchen
    }

    const addToCart = (cartItem) => {
        const cartArray = localStorage.getItem('cart') ? 
        JSON.parse(localStorage.getItem('cart')) : []

        if (cartArray.some((item) => item.id === cartItem.id)) {
            cartArray.map((item) => {
                if (item.id === cartItem.id) {
                    console.log(item.count++)
                }

                return item
            })
        } else {
            cartArray.push(cartItem)
            console.log(cartArray)
        }
        
        localStorage.setItem('cart', JSON.stringify(cartArray))
    }

    const renderItems = (data) => {
        data.forEach(({ description, id, image, name, price }) => {
            const card = document.createElement('div')
            card.classList.add('card')
            card.innerHTML = `
                <img src="${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title card-title-reg">${name}</h3>
                    </div>
                    <!-- /.card-heading -->
                    <div class="card-info">
                        <div class="ingredients">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец
                            «Халапенье», соус «Тобаско», томаты.
                        </div>
                    </div>
                    <!-- /.card-info -->
                    <div class="card-buttons">
                        <button class="button button-primary button-add-cart">
                            <span class="button-card-text">В корзину</span>
                            <span class="button-cart-svg"></span>
                        </button>
                        <strong class="card-price-bold">${price} ₽</strong>
                    </div>
                </div>
                <!-- /.card-text -->
            `

            card.querySelector('.button-card-text').addEventListener('click', () => {
                const cartItem = {
                    name: name,
                    price: price,
                    id: id,
                    count: 1
                }

                addToCart(cartItem)
            })

            cardsMenu.append(card)
        });
    }

    if (localStorage.getItem('restaurant')) {
        const restaurant = JSON.parse(localStorage.getItem('restaurant'))

        changeTitle(restaurant)
        
        fetch(`./db/${restaurant.products}`)
            .then((response) => response.json())
            .then((data) => {
                renderItems(data)
            })
    } else {
        window.location.href = '/'
    }

}

const { renderItems } = menu()
export { renderItems }
export default menu