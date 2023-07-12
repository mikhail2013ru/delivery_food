import inputSearch from './inputSearch.js';
import renderItems from './renderItems.js';

const partners = () => {
    fetch('http://127.0.0.1:5500/db/partners.json')
        .then((response) => response.json())
        .then((data) => {
            renderItems(data)
            inputSearch(data)
        })
}

export default partners