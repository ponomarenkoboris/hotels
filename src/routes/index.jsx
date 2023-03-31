import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute'
import { Login } from '../pages/Login/Login'
import { Booking } from '../pages/Booking/Booking'

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/booking',
            element: <ProtectedRoute><Booking /></ProtectedRoute>
        },
        {
            path: '*',
            element: <Navigate to={'/'} />
        }
    ])
    return <RouterProvider router={router} />
}