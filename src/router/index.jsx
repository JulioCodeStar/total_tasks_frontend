import {createBrowserRouter} from 'react-router-dom'
import { MainAuth, Login, MainLayout, Home } from '../pages'

const router = [
    {
        element: <MainAuth />,
        children: [
            {
                path: '/login',
                element: <Login />
            }
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
        ]
    }
]

const createRouter = createBrowserRouter(router);
export default createRouter