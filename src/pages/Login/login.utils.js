const loginState = {
    password: {
        isValid: true,
        tip: ''
    },
    email: {
        isValid: true,
        tip: ''
    }
}

const actionTypes = {
    SET_EMAIL_IS_NOT_VALID: 'SET_EMAIL_IS_NOT_VALID',
    SET_PASSWORD_IS_NOT_VALID: 'SET_PASSWORD_IS_NOT_VALID',
    SET_STATE_IS_NOT_VALID: 'SET_STATE_IS_NOT_VALID',
    SET_STATE_IS_VALID: 'SET_STATE_IS_VALID'
}

const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.SET_EMAIL_IS_NOT_VALID:
            return { password: { ...loginState.password }, email: { isValid: false, tip: action.payload } }
        case actionTypes.SET_PASSWORD_IS_NOT_VALID:
            return { email: { ...loginState.email }, password: { isValid: false, tip: action.payload } }
        case actionTypes.SET_STATE_IS_VALID:
            return loginState
        case actionTypes.SET_STATE_IS_NOT_VALID: 
            const { emailTip, passwordTip } = action.payload
            return { email: { isValid: false, tip: emailTip }, password: { isValid: false, tip: passwordTip } }
        default: 
            return state
    }
}

const validatePassword = (password) => {
    const result = { isValid: true, tip: '' }

    if (password.length < 8 ) {
        result.tip = 'Пароль должен быть минимум 8 символов'
    } else if (!(/^[^а-яё]+$/iu).test(password)) {
        result.tip = 'Пароль не должен содержать символы кириллицы'
    }

    result.isValid = result.tip ? false : true

    return result
}

const validateEmail = (email) => {
    const result = { isValid: true, tip: '' }

    if (!email.length) {
        result.tip = 'Поле email не заполнено'
    } else if (!(/^[^@\s]+@[^@\s]+\.[^@\s]+$/).test(email)) {
        result.tip = 'Неверно введён email'
    }

    result.isValid = result.tip ? false : true

    return result
}

export {
    loginState,
    actionTypes,
    validatePassword,
    validateEmail,
    reducer
}