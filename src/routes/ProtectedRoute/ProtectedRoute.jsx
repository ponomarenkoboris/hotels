import { Navigate } from 'react-router-dom'

export const ProtectedRoute = ({ children }) => {
    const user = JSON.parse(sessionStorage.getItem('user'))

    if (!user || !user.email || !user.password) return <Navigate to={'/'} replace />

    return children
}
