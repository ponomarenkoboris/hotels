import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute'
import { Login } from '../pages/Login/Login'
import { Hotels } from '../pages/Hotels/Hotels'

export const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/hotels',
            element: <ProtectedRoute><Hotels /></ProtectedRoute>
        },
        {
            path: '*',
            element: <Navigate to={'/'} />
        }
    ])
    return <RouterProvider router={router} />
}