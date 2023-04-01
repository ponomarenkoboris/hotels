import { Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store'

export const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (!user || !user.email || !user.password) return <Navigate to={'/'} replace />

    return <Provider store={store}>{children}</Provider>
}
