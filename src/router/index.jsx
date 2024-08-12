import {createBrowserRouter} from 'react-router-dom'
import { MainAuth, Login, MainLayout, Home, Kanban } from '../pages'

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
            {
                path: '/kanban',
                element: <Kanban />
            }
        ]
    }
]

const createRouter = createBrowserRouter(router);
export default createRouter