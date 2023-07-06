import {modalAuth} from './auth.js'

const cardsRestaurants = document.querySelector('.cards-restaurants')

const partners = () => {
    const renderItems = (data) => {
        data.forEach((item) => {
            const { image, kitchen, name, price, products, stars, time_of_delivery } = item
            const a = document.createElement('a')
            // console.log(image)

            a.setAttribute('href', '/restaurant.html')
            a.classList.add('card')
            a.classList.add('card-restaurant')
            // a.products = products
            a.dataset.products = products
            console.log(a)

            a.innerHTML = `
                <img src="${image}" alt="${name}" class="card-image" />
                <div class="card-text">
                    <div class="card-heading">
                        <h3 class="card-title">${name}</h3>
                        <span class="card-tag tag">${time_of_delivery} мин</span>
                    </div>

                    <div class="card-info">
                        <div class="rating">
                            ${stars}
                        </div>
                        <div class="price">От ${price} ₽</div>
                        <div class="category">${kitchen}</div>
                    </div>

                </div>
            `

            a.addEventListener('click', (e) => {
                e.preventDefault()  
                
                if (localStorage.getItem('user')) {
                    localStorage.setItem('restaurant', JSON.stringify(item))
    
                    window.location.href = '/restaurant.html'                    
                } else {
                    modalAuth.style.display = 'flex'
                }
            })

            cardsRestaurants.append(a)
        });
    }
    // https://test-648ae-default-rtdb.firebaseio.com/db/partners.json
    // http://localhost/delivery_food/db/partners.json
    fetch('http://127.0.0.1:5500/db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
        })
}

export default partners