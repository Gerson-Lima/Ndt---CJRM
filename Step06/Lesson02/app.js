// 
const inputUsername = document.querySelector('#username')

inputUsername.addEventListener('keyup', event => {
    const inputValue = event.target.value
    const usernameRegex = /^[a-zA-z]{6,}$/
    
    const p = document.createElement('p')

    if (!usernameRegex.test(inputValue)) {
        p.textContent = 'O valor deve conter no mínimo 6 caracteres, com apenas letras maiúsculas e/ou minúsculas'
        return
    }
    
    p.textContent = 'username válido =)'
})