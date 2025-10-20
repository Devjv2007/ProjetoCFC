import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/home'
import NotFound from './pages/notfound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'home', element: <Home /> },
      { index: true, element: <Navigate to="/home" replace /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />
}
