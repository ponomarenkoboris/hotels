import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    reducer, 
    loginState, 
    actionTypes,
    validateEmail,
    validatePassword
} from './login.utils';
import './Login.scss'

export const Login = () => {
    const [{ password, email }, dispatch] = useReducer(reducer, loginState);
    const navigate = useNavigate()

    const formSubmitHandler = (event) => {
        event.preventDefault()
        const { email, password } = event.target.elements
        
        const emailResult = validateEmail(email.value);
        const passwordResult = validatePassword(password.value);
        
        if (emailResult.isValid && passwordResult.isValid) {
            dispatch({ type: actionTypes.SET_STATE_IS_VALID })
            sessionStorage.setItem('user', JSON.stringify({ email: email.value, password: password.value }))
            navigate('/hotels')

        } else if (!emailResult.isValid && !passwordResult.isValid) {
            const payload = { emailTip: emailResult.tip, passwordTip: passwordResult.tip }
            dispatch({ type: actionTypes.SET_STATE_IS_NOT_VALID, payload })

        } else if (!emailResult.isValid) {
            dispatch({ type: actionTypes.SET_EMAIL_IS_NOT_VALID, payload: emailResult.tip })

        } else if (!passwordResult.isValid) {
            dispatch({ type: actionTypes.SET_EMAIL_IS_NOT_VALID, payload: passwordResult.tip })

        }
    }

    return (
        <div className='login__wrapper'>
            <div className="login__container">
                <div className="login">
                    <p className='login__title'>Simple Hotel Check</p>
                    <form onSubmit={formSubmitHandler}>
                        <label className={email.isValid ? 'email' : 'email danger'}>
                            <p className='label__text'>Логин</p>
                            <input type="text" className='email__input' name='email' />
                            <p className='label__tip'>{email.tip}</p>
                        </label>
                        <label className={password.isValid ? 'password' : 'password danger'}>
                            <p className='label__text'>Пароль</p>
                            <input type="password" className='password__input' name='password' />
                            <p className="label__tip">{password.tip}</p>
                        </label>
                        <button className='button'>Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
