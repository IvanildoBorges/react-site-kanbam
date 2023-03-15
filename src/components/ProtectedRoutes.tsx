import { Route, Routes } from 'react-router-dom'
import useAuthStore from '../context/useAuthStore'
import Home from '../pages/Home/Home'

export const ProtectedRoute = ({ element, ...rest }: {
  element: JSX.Element
}) => {
  const { isAuthenticated } = useAuthStore()
  return (
    <Routes {...rest}>
      {
        isAuthenticated 
          ? <Route path='/*' element={element} /> 
          : <Route path='/*' element={<Home />} />
      }
    </Routes>
  )
}