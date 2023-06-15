export {modalAuth}

const modalAuth = document.querySelector('.modal-auth')
const buttonOut = document.querySelector('.button-out')
const buttonCart = document.querySelector('.button-cart')

const auth = () => {
    const userName = document.querySelector('.user-name')
    const buttonAuth = document.querySelector('.button-auth')
    const closeAuth = document.querySelector('.close-auth')
    const logInForm = document.querySelector('#logInForm')
    const inputLogin = document.querySelector('#login')
    const inputPassword = document.querySelector('#password')
    
    const login = (user) => {
        buttonAuth.style.display = 'none'
        buttonOut.style.display = 'flex'
        userName.style.display = 'flex'
        userName.textContent = user.login
        modalAuth.style.display = 'none'
        buttonCart.style.display = 'flex'
    }

    const logout = () => {
        userName.textContent = ''
        userName.style.display = 'none'
        buttonOut.style.display = 'none'
        buttonAuth.style.display = 'flex'
        buttonCart.style.display = 'none'

        localStorage.removeItem('user')
    }

    buttonAuth.addEventListener('click', () => {
        modalAuth.style.display = 'flex'
    })

    closeAuth.addEventListener('click', () => {
        modalAuth.style.display = 'none'
    })

    buttonOut.addEventListener('click', () => {
        logout()
    })

    logInForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const user = {
            login: inputLogin.value,
            password: inputPassword.value
        }
        
        localStorage.setItem('user', JSON.stringify(user))
        login(user)
    })

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')))
    }
}

export default auth