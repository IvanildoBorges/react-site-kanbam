import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home/Home'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Dashboard from '../pages/Dashboard/DashBoard'
import { ProtectedRoute } from '../components/ProtectedRoutes'

const routes = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/dashboard/*',
          element: <ProtectedRoute element={ <Dashboard />} />,
        },
      ]
    }
  ])

  export default routes;