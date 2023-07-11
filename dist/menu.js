/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0osMERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZWxpdmVyeV9mb29kLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXV0aCBmcm9tIFwiLi9tb2R1bGVzL2F1dGhcIjtcclxuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbW9kdWxlcy9tZW51XCI7XHJcblxyXG5hdXRoKClcclxubWVudSgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   modalAuth: () => (/* binding */ modalAuth)\n/* harmony export */ });\n\r\n\r\nconst modalAuth = document.querySelector('.modal-auth')\r\nconst buttonOut = document.querySelector('.button-out')\r\nconst buttonCart = document.querySelector('.button-cart')\r\nconst footerLink = document.querySelector('.footer-nav')\r\n\r\nconst auth = () => {\r\n    const userName = document.querySelector('.user-name')\r\n    const buttonAuth = document.querySelector('.button-auth')\r\n    const closeAuth = document.querySelector('.close-auth')\r\n    const logInForm = document.querySelector('#logInForm')\r\n    const inputLogin = document.querySelector('#login')\r\n    const inputPassword = document.querySelector('#password')\r\n    \r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none'\r\n        buttonOut.style.display = 'flex'\r\n        userName.style.display = 'flex'\r\n        userName.textContent = user.login\r\n        modalAuth.style.display = 'none'\r\n        buttonCart.style.display = 'flex'\r\n    }\r\n\r\n    const logout = () => {\r\n        userName.textContent = ''\r\n        userName.style.display = 'none'\r\n        buttonOut.style.display = 'none'\r\n        buttonAuth.style.display = 'flex'\r\n        buttonCart.style.display = 'none'\r\n\r\n        localStorage.removeItem('user')\r\n    }\r\n\r\n    buttonAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex'\r\n    })\r\n\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none'\r\n    })\r\n\r\n    buttonOut.addEventListener('click', () => {\r\n        logout()\r\n    })\r\n\r\n    logInForm.addEventListener('submit', (event) => {\r\n        event.preventDefault()\r\n\r\n        const user = {\r\n            login: inputLogin.value,\r\n            password: inputPassword.value\r\n        }\r\n        \r\n        localStorage.setItem('user', JSON.stringify(user))\r\n        login(user)\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')))\r\n    }\r\n\r\n    footerLink.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        const trg = e.target\r\n        if (trg.classList.contains('footer-link--active')) return\r\n        document.querySelector('.footer-link--active').classList.remove('footer-link--active')\r\n        trg.classList.add('footer-link--active')            \r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVsaXZlcnlfZm9vZC8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQge21vZGFsQXV0aH1cclxuXHJcbmNvbnN0IG1vZGFsQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1hdXRoJylcclxuY29uc3QgYnV0dG9uT3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1vdXQnKVxyXG5jb25zdCBidXR0b25DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jYXJ0JylcclxuY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItbmF2JylcclxuXHJcbmNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKVxyXG4gICAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpXHJcbiAgICBjb25zdCBjbG9zZUF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXV0aCcpXHJcbiAgICBjb25zdCBsb2dJbkZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nSW5Gb3JtJylcclxuICAgIGNvbnN0IGlucHV0TG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9naW4nKVxyXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwYXNzd29yZCcpXHJcbiAgICBcclxuICAgIGNvbnN0IGxvZ2luID0gKHVzZXIpID0+IHtcclxuICAgICAgICBidXR0b25BdXRoLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgIHVzZXJOYW1lLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW5cclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGJ1dHRvbkNhcnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnXHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICAgICAgYnV0dG9uQ2FydC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJylcclxuICAgIH1cclxuXHJcbiAgICBidXR0b25BdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnXHJcbiAgICB9KVxyXG5cclxuICAgIGNsb3NlQXV0aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfSlcclxuXHJcbiAgICBidXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9nb3V0KClcclxuICAgIH0pXHJcblxyXG4gICAgbG9nSW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuXHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgbG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkodXNlcikpXHJcbiAgICAgICAgbG9naW4odXNlcilcclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuICAgICAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKVxyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlckxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnN0IHRyZyA9IGUudGFyZ2V0XHJcbiAgICAgICAgaWYgKHRyZy5jbGFzc0xpc3QuY29udGFpbnMoJ2Zvb3Rlci1saW5rLS1hY3RpdmUnKSkgcmV0dXJuXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1saW5rLS1hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdmb290ZXItbGluay0tYWN0aXZlJylcclxuICAgICAgICB0cmcuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxpbmstLWFjdGl2ZScpICAgICAgICAgICAgXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhdXRoIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buttonCart: () => (/* binding */ buttonCart),\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   modalCart: () => (/* binding */ modalCart),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nconst cart = () => {\r\n    const buttonCart = document.getElementById('cart-button')\r\n    const modalCart = document.querySelector('.modal-cart')\r\n    const close = modalCart.querySelector('.close')\r\n    const body = modalCart.querySelector('.modal-body')\r\n    const buttonSend = modalCart.querySelector('.button-primary')\r\n    const clearCart = modalCart.querySelector('.clear-cart')\r\n    const modalPrice = modalCart.querySelector('.modal-pricetag')\r\n\r\n    const resetCart = () => {\r\n        body.innerHTML = ''\r\n        localStorage.removeItem('cart')\r\n        closeModal()\r\n    }\r\n\r\n    const incrementCount = (id) => {\r\n        const cartArray = JSON.parse(localStorage.getItem('cart'))\r\n        let result = []\r\n        result = cartArray.map((item) => {\r\n            if (item.id === id) {\r\n                item.count++\r\n            }\r\n        \r\n            return { ...item, totalPrice: item.price * item.count }\r\n        })\r\n        console.log(result)\r\n        const totalPrice = result.reduce((sum, elem) => {\r\n            return sum += elem.totalPrice\r\n        }, 0)\r\n        \r\n        modalPrice.textContent = `${totalPrice} ₽`\r\n        localStorage.setItem('cart', JSON.stringify(result))\r\n        renderItems(result)\r\n    }\r\n\r\n    const decrementCount = (id) => {\r\n        const cartArray = JSON.parse(localStorage.getItem('cart'))\r\n        let result = []\r\n        \r\n        result = cartArray.map((item) => {\r\n            if (item.id === id) {\r\n                item.count = item.count > 0 ? item.count - 1 : 0\r\n                // if (item.count > 0) {\r\n                //     item.count--\r\n                // } else {\r\n                //     item.count = 0\r\n                // }\r\n            }\r\n\r\n            return { ...item, totalPrice: item.price * item.count }\r\n        })\r\n\r\n        result = result.filter(item => item.count)\r\n        const totalPrice = result.reduce((acc, item) => {\r\n            return acc += item.totalPrice\r\n        }, 0)\r\n\r\n        modalPrice.textContent = `${totalPrice} ₽`\r\n        localStorage.setItem('cart', JSON.stringify(result))\r\n\r\n        if (JSON.stringify(result) === '[]') {\r\n            modalPrice.textContent = `Ваша корзина пуста!`\r\n            buttonSend.style.display = 'none'\r\n        }\r\n\r\n        renderItems(result)\r\n    }\r\n    \r\n    const renderItems = (data) => {\r\n        body.innerHTML = ''\r\n        data.forEach(({ name, totalPrice, price, id, count }) => {\r\n            const cartElem = document.createElement('div')\r\n            cartElem.classList.add('food-row')\r\n            cartElem.innerHTML = `\r\n            <span class=\"food-name\">${name}</span>\r\n            <strong class=\"food-price\">${totalPrice || price} ₽</strong>\r\n            <div class=\"food-counter\">\r\n            <button class=\"counter-button btn-dec\" data-index=\"${id}\">-</button>\r\n            <span class=\"counter\">${count}</span>\r\n            <button class=\"counter-button btn-inc\" data-index=\"${id}\">+</button>\r\n            </div>\r\n            `\r\n        \r\n            body.append(cartElem)\r\n\r\n        })\r\n        // return data\r\n        \r\n    }\r\n\r\n    body.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n        if (e.target.classList.contains('btn-inc')) {\r\n            incrementCount(e.target.dataset.index)\r\n            \r\n        } else if (e.target.classList.contains('btn-dec')) {\r\n            decrementCount(e.target.dataset.index)\r\n        }\r\n    })\r\n\r\n    buttonSend.addEventListener('click', () => {\r\n        const cartArray = localStorage.getItem('cart')\r\n\r\n        if (JSON.stringify(cartArray) !== 'null') {\r\n            fetch('https://jsonplaceholder.typicode.com/posts', {\r\n                method: 'POST',\r\n                body: cartArray\r\n            })\r\n            .then(response => {\r\n                if (response.ok) {\r\n                    resetCart()\r\n                }\r\n            })\r\n            .catch(e => {\r\n                console.error(e)\r\n            })\r\n        }\r\n    })\r\n\r\n    clearCart.addEventListener('click', () => {\r\n        body.innerHTML = ''\r\n        closeModal()\r\n    })\r\n\r\n    buttonCart.addEventListener('click', () => {\r\n        body.innerHTML = ''\r\n        if (JSON.parse(localStorage.getItem('cart'))) {\r\n                renderItems(JSON.parse(localStorage.getItem('cart')))\r\n        }\r\n\r\n        openModal()\r\n\r\n        const cartArray = JSON.parse(localStorage.getItem('cart'))\r\n\r\n        if (cartArray && (JSON.stringify(cartArray) !== '[]')) {\r\n            buttonSend.style.display = 'flex'\r\n            \r\n            let result = 0\r\n            for(const key in cartArray) {\r\n                const value = cartArray[key];\r\n                result += value['price'];\r\n            }\r\n\r\n            modalPrice.textContent = `${result} ₽`\r\n        } else {\r\n            modalPrice.textContent = `Ваша корзина пуста!`\r\n            buttonSend.style.display = 'none'       \r\n        }\r\n    })\r\n\r\n    const openModal = () => {\r\n        modalCart.classList.add('is-open')\r\n    }\r\n\r\n    close.addEventListener('click', () => {\r\n        closeModal()\r\n    })\r\n    \r\n    const closeModal = () => {\r\n        modalCart.classList.remove('is-open')\r\n    }\r\n\r\n    return {\r\n        openModal, closeModal, buttonCart, modalCart, close\r\n    }\r\n}\r\n\r\nconst {openModal, closeModal, buttonCart, modalCart } = cart()\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart); \r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9jYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0NBQW9DLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esb0NBQW9DLFlBQVk7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsS0FBSztBQUMzQyx5Q0FBeUMscUJBQXFCO0FBQzlEO0FBQ0EsaUVBQWlFLEdBQUc7QUFDcEUsb0NBQW9DLE1BQU07QUFDMUMsaUVBQWlFLEdBQUc7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxRQUFRO0FBQ2hELFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLCtDQUErQztBQUNBO0FBQ3REO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5X2Zvb2QvLi9zcmMvbW9kdWxlcy9jYXJ0LmpzP2FjMGUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FydCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGJ1dHRvbkNhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydC1idXR0b24nKVxyXG4gICAgY29uc3QgbW9kYWxDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNhcnQnKVxyXG4gICAgY29uc3QgY2xvc2UgPSBtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLmNsb3NlJylcclxuICAgIGNvbnN0IGJvZHkgPSBtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKVxyXG4gICAgY29uc3QgYnV0dG9uU2VuZCA9IG1vZGFsQ2FydC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLXByaW1hcnknKVxyXG4gICAgY29uc3QgY2xlYXJDYXJ0ID0gbW9kYWxDYXJ0LnF1ZXJ5U2VsZWN0b3IoJy5jbGVhci1jYXJ0JylcclxuICAgIGNvbnN0IG1vZGFsUHJpY2UgPSBtb2RhbENhcnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXByaWNldGFnJylcclxuXHJcbiAgICBjb25zdCByZXNldENhcnQgPSAoKSA9PiB7XHJcbiAgICAgICAgYm9keS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdjYXJ0JylcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRDb3VudCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICByZXN1bHQgPSBjYXJ0QXJyYXkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jb3VudCsrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgdG90YWxQcmljZTogaXRlbS5wcmljZSAqIGl0ZW0uY291bnQgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSByZXN1bHQucmVkdWNlKChzdW0sIGVsZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1bSArPSBlbGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9LCAwKVxyXG4gICAgICAgIFxyXG4gICAgICAgIG1vZGFsUHJpY2UudGV4dENvbnRlbnQgPSBgJHt0b3RhbFByaWNlfSDigr1gXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxyXG4gICAgICAgIHJlbmRlckl0ZW1zKHJlc3VsdClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWNyZW1lbnRDb3VudCA9IChpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSlcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW11cclxuICAgICAgICBcclxuICAgICAgICByZXN1bHQgPSBjYXJ0QXJyYXkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jb3VudCA9IGl0ZW0uY291bnQgPiAwID8gaXRlbS5jb3VudCAtIDEgOiAwXHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoaXRlbS5jb3VudCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBpdGVtLmNvdW50LS1cclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgaXRlbS5jb3VudCA9IDBcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgLi4uaXRlbSwgdG90YWxQcmljZTogaXRlbS5wcmljZSAqIGl0ZW0uY291bnQgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNvdW50KVxyXG4gICAgICAgIGNvbnN0IHRvdGFsUHJpY2UgPSByZXN1bHQucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYyArPSBpdGVtLnRvdGFsUHJpY2VcclxuICAgICAgICB9LCAwKVxyXG5cclxuICAgICAgICBtb2RhbFByaWNlLnRleHRDb250ZW50ID0gYCR7dG90YWxQcmljZX0g4oK9YFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0JywgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSlcclxuXHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkgPT09ICdbXScpIHtcclxuICAgICAgICAgICAgbW9kYWxQcmljZS50ZXh0Q29udGVudCA9IGDQktCw0YjQsCDQutC+0YDQt9C40L3QsCDQv9GD0YHRgtCwIWBcclxuICAgICAgICAgICAgYnV0dG9uU2VuZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJJdGVtcyhyZXN1bHQpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJlbmRlckl0ZW1zID0gKGRhdGEpID0+IHtcclxuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKCh7IG5hbWUsIHRvdGFsUHJpY2UsIHByaWNlLCBpZCwgY291bnQgfSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjYXJ0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIGNhcnRFbGVtLmNsYXNzTGlzdC5hZGQoJ2Zvb2Qtcm93JylcclxuICAgICAgICAgICAgY2FydEVsZW0uaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvb2QtbmFtZVwiPiR7bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJmb29kLXByaWNlXCI+JHt0b3RhbFByaWNlIHx8IHByaWNlfSDigr08L3N0cm9uZz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb2QtY291bnRlclwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY291bnRlci1idXR0b24gYnRuLWRlY1wiIGRhdGEtaW5kZXg9XCIke2lkfVwiPi08L2J1dHRvbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudGVyXCI+JHtjb3VudH08L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjb3VudGVyLWJ1dHRvbiBidG4taW5jXCIgZGF0YS1pbmRleD1cIiR7aWR9XCI+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBib2R5LmFwcGVuZChjYXJ0RWxlbSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyByZXR1cm4gZGF0YVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2J0bi1pbmMnKSkge1xyXG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudChlLnRhcmdldC5kYXRhc2V0LmluZGV4KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnRuLWRlYycpKSB7XHJcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidXR0b25TZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcnRBcnJheSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JylcclxuXHJcbiAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkgIT09ICdudWxsJykge1xyXG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBjYXJ0QXJyYXlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRDYXJ0KClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY2xlYXJDYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gJydcclxuICAgICAgICBjbG9zZU1vZGFsKClcclxuICAgIH0pXHJcblxyXG4gICAgYnV0dG9uQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBib2R5LmlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkpIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW1zKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvcGVuTW9kYWwoKVxyXG5cclxuICAgICAgICBjb25zdCBjYXJ0QXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpXHJcblxyXG4gICAgICAgIGlmIChjYXJ0QXJyYXkgJiYgKEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkgIT09ICdbXScpKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvblNlbmQuc3R5bGUuZGlzcGxheSA9ICdmbGV4J1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IDBcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGtleSBpbiBjYXJ0QXJyYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY2FydEFycmF5W2tleV07XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gdmFsdWVbJ3ByaWNlJ107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1vZGFsUHJpY2UudGV4dENvbnRlbnQgPSBgJHtyZXN1bHR9IOKCvWBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBtb2RhbFByaWNlLnRleHRDb250ZW50ID0gYNCS0LDRiNCwINC60L7RgNC30LjQvdCwINC/0YPRgdGC0LAhYFxyXG4gICAgICAgICAgICBidXR0b25TZW5kLnN0eWxlLmRpc3BsYXkgPSAnbm9uZScgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxDYXJ0LmNsYXNzTGlzdC5hZGQoJ2lzLW9wZW4nKVxyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNsb3NlTW9kYWwoKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBtb2RhbENhcnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtb3BlbicpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGJ1dHRvbkNhcnQsIG1vZGFsQ2FydCwgY2xvc2VcclxuICAgIH1cclxufVxyXG5cclxuY29uc3Qge29wZW5Nb2RhbCwgY2xvc2VNb2RhbCwgYnV0dG9uQ2FydCwgbW9kYWxDYXJ0IH0gPSBjYXJ0KClcclxuZXhwb3J0IHtvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGJ1dHRvbkNhcnQsIG1vZGFsQ2FydCB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0IFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/cart.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   renderItems: () => (/* binding */ renderItems)\n/* harmony export */ });\n/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ \"./src/modules/cart.js\");\n\r\n\r\n// import cart from \"./cart\"\r\n// const {openModal, closeModal, buttonCart, modalCart } = cart()\r\n\r\n_cart__WEBPACK_IMPORTED_MODULE_0__.buttonCart.addEventListener('click', () => {\r\n    (0,_cart__WEBPACK_IMPORTED_MODULE_0__.openModal)()\r\n})\r\n\r\nconst menu = () => {\r\n    const restourant = 'pizza-plus'\r\n    const cardsMenu = document.querySelector('.cards-menu')\r\n\r\n    const changeTitle = (restaurant) => {\r\n        const restaurantTitle = document.querySelector('.restaurant-title')\r\n        const rating = document.querySelector('.rating')\r\n        const price = document.querySelector('.price')\r\n        const category = document.querySelector('.category')\r\n        \r\n        restaurantTitle.textContent = restaurant.name\r\n        rating.textContent = restaurant.stars\r\n        price.textContent = restaurant.kitchen\r\n        category.textContent = restaurant.kitchen\r\n    }\r\n\r\n    const addToCart = (cartItem) => {\r\n        const cartArray = localStorage.getItem('cart') ? \r\n        JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n        if (cartArray.some((item) => item.id === cartItem.id)) {\r\n            cartArray.map((item) => {\r\n                if (item.id === cartItem.id) {\r\n                    console.log(item.count++)\r\n                }\r\n\r\n                return item\r\n            })\r\n        } else {\r\n            cartArray.push(cartItem)\r\n            console.log(cartArray)\r\n        }\r\n        \r\n        localStorage.setItem('cart', JSON.stringify(cartArray))\r\n    }\r\n\r\n    const renderItems = (data) => {\r\n        data.forEach(({ description, id, image, name, price }) => {\r\n            const card = document.createElement('div')\r\n            card.classList.add('card')\r\n            card.innerHTML = `\r\n                <img src=\"${image}\" alt=\"${name}\" class=\"card-image\" />\r\n                <div class=\"card-text\">\r\n                    <div class=\"card-heading\">\r\n                        <h3 class=\"card-title card-title-reg\">${name}</h3>\r\n                    </div>\r\n                    <!-- /.card-heading -->\r\n                    <div class=\"card-info\">\r\n                        <div class=\"ingredients\">Соус томатный, сыр «Моцарелла», ветчина, пепперони, перец\r\n                            «Халапенье», соус «Тобаско», томаты.\r\n                        </div>\r\n                    </div>\r\n                    <!-- /.card-info -->\r\n                    <div class=\"card-buttons\">\r\n                        <button class=\"button button-primary button-add-cart\">\r\n                            <span class=\"button-card-text\">В корзину</span>\r\n                            <span class=\"button-cart-svg\"></span>\r\n                        </button>\r\n                        <strong class=\"card-price-bold\">${price} ₽</strong>\r\n                    </div>\r\n                </div>\r\n                <!-- /.card-text -->\r\n            `\r\n\r\n            card.querySelector('.button-card-text').addEventListener('click', () => {\r\n                const cartItem = {\r\n                    name: name,\r\n                    price: price,\r\n                    id: id,\r\n                    count: 1\r\n                }\r\n\r\n                addToCart(cartItem)\r\n            })\r\n\r\n            cardsMenu.append(card)\r\n        });\r\n    }\r\n\r\n    if (localStorage.getItem('restaurant')) {\r\n        const restaurant = JSON.parse(localStorage.getItem('restaurant'))\r\n\r\n        changeTitle(restaurant)\r\n        \r\n        fetch(`./db/${restaurant.products}`)\r\n            .then((response) => response.json())\r\n            .then((data) => {\r\n                renderItems(data)\r\n            })\r\n    } else {\r\n        window.location.href = '/'\r\n    }\r\n\r\n}\r\n\r\nconst { renderItems } = menu()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUdlO0FBQ2Y7QUFDQTtBQUNBLFVBQVUsK0NBQStDO0FBQ3pEO0FBQ0EsNkNBQVU7QUFDVixJQUFJLGdEQUFTO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFDQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTSxTQUFTLEtBQUs7QUFDaEQ7QUFDQTtBQUNBLGdFQUFnRSxLQUFLO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELE9BQU87QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9CQUFvQjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGNBQWM7QUFDQTtBQUN0QixpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL2RlbGl2ZXJ5X2Zvb2QvLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgXHJcbiAgICBvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGJ1dHRvbkNhcnQsIFxyXG4gICAgbW9kYWxDYXJ0XHJcbn0gZnJvbSAnLi9jYXJ0J1xyXG5cclxuLy8gaW1wb3J0IGNhcnQgZnJvbSBcIi4vY2FydFwiXHJcbi8vIGNvbnN0IHtvcGVuTW9kYWwsIGNsb3NlTW9kYWwsIGJ1dHRvbkNhcnQsIG1vZGFsQ2FydCB9ID0gY2FydCgpXHJcblxyXG5idXR0b25DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgb3Blbk1vZGFsKClcclxufSlcclxuXHJcbmNvbnN0IG1lbnUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByZXN0b3VyYW50ID0gJ3BpenphLXBsdXMnXHJcbiAgICBjb25zdCBjYXJkc01lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMtbWVudScpXHJcblxyXG4gICAgY29uc3QgY2hhbmdlVGl0bGUgPSAocmVzdGF1cmFudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXN0YXVyYW50LXRpdGxlJylcclxuICAgICAgICBjb25zdCByYXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0aW5nJylcclxuICAgICAgICBjb25zdCBwcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZScpXHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnknKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJlc3RhdXJhbnRUaXRsZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQubmFtZVxyXG4gICAgICAgIHJhdGluZy50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQuc3RhcnNcclxuICAgICAgICBwcmljZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQua2l0Y2hlblxyXG4gICAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5raXRjaGVuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKGNhcnRJdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FydEFycmF5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSA/IFxyXG4gICAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkgOiBbXVxyXG5cclxuICAgICAgICBpZiAoY2FydEFycmF5LnNvbWUoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGNhcnRJdGVtLmlkKSkge1xyXG4gICAgICAgICAgICBjYXJ0QXJyYXkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pZCA9PT0gY2FydEl0ZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmNvdW50KyspXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYXJ0QXJyYXkucHVzaChjYXJ0SXRlbSlcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY2FydEFycmF5KVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVySXRlbXMgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGRhdGEuZm9yRWFjaCgoeyBkZXNjcmlwdGlvbiwgaWQsIGltYWdlLCBuYW1lLCBwcmljZSB9KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG4gICAgICAgICAgICBjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtpbWFnZX1cIiBhbHQ9XCIke25hbWV9XCIgY2xhc3M9XCJjYXJkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1yZWdcIj4ke25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1oZWFkaW5nIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+0KHQvtGD0YEg0YLQvtC80LDRgtC90YvQuSwg0YHRi9GAIMKr0JzQvtGG0LDRgNC10LvQu9CwwrssINCy0LXRgtGH0LjQvdCwLCDQv9C10L/Qv9C10YDQvtC90LgsINC/0LXRgNC10YZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIMKr0KXQsNC70LDQv9C10L3RjNC1wrssINGB0L7Rg9GBIMKr0KLQvtCx0LDRgdC60L7Cuywg0YLQvtC80LDRgtGLLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIC8uY2FyZC1pbmZvIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcmQtdGV4dFwiPtCSINC60L7RgNC30LjQvdGDPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJidXR0b24tY2FydC1zdmdcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX0g4oK9PC9zdHJvbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0gLy5jYXJkLXRleHQgLS0+XHJcbiAgICAgICAgICAgIGBcclxuXHJcbiAgICAgICAgICAgIGNhcmQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jYXJkLXRleHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcnRJdGVtID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJpY2U6IHByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydChjYXJ0SXRlbSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIGNhcmRzTWVudS5hcHBlbmQoY2FyZClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RhdXJhbnQnKSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50JykpXHJcblxyXG4gICAgICAgIGNoYW5nZVRpdGxlKHJlc3RhdXJhbnQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgZmV0Y2goYC4vZGIvJHtyZXN0YXVyYW50LnByb2R1Y3RzfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbXMoZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNvbnN0IHsgcmVuZGVySXRlbXMgfSA9IG1lbnUoKVxyXG5leHBvcnQgeyByZW5kZXJJdGVtcyB9XHJcbmV4cG9ydCBkZWZhdWx0IG1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;