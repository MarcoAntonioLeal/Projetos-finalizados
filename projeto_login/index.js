const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btnEnter = document.querySelector('#enterBtn')

const validateEmail = document.querySelector('#validationEmail')
const validatePassword = document.querySelector('#validationPassword')

function addClass(tagValue, classAdd) {
    return tagValue.classList.add(classAdd)
}

function removeClass(tagValue, classRemove) {
    return setTimeout(() => tagValue.classList.remove(classRemove), 1500)
}

function validationEmail(email) {
    return email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)
}

btnEnter.addEventListener('click', () => {
    if(!email.value || !password.value) {
        addClass(validateEmail, 'classForErrorSpan')
        addClass(validatePassword, 'classForErrorSpan')
        addClass(email, 'classForErrorInput')
        addClass(password, 'classForErrorInput')

        removeClass(validateEmail, 'classForErrorSpan')        
        removeClass(validatePassword, 'classForErrorSpan')
        removeClass(email, 'classForErrorInput')
        removeClass(password, 'classForErrorInput')
        
    }
        try {
            !validationEmail(email.value)[0]
        } catch {
            addClass(validateEmail, 'classForErrorSpan')
            removeClass(validateEmail, 'classForErrorSpan')
        }
    



    console.log(validationEmail(email.value)[0])
    console.log(!email.value)

})