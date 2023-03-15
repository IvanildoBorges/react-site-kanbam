import { NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import useAuthStore from '../../context/useAuthStore'
import Cores from '../../styles/cores/cores';

const Container = styled.div`
  &.container-menu {
    display: grid;
    height: 5vh;
    min-width: 100vw;
    background-color: ${Cores.branco};
  }
`;

const Menu = styled.div`
  &.menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0vh 2vw;

    .menu-items {
      display: flex;
      gap: 0.5rem;
    }
  }
  .link {
    display: flex;
    align-items: center;
    height: 3vh;
    padding: 0rem 1rem;
    text-decoration: none;
    transition: all 300ms ease-in;
    border-radius: 1rem;
  }
  .link:hover {
    color: ${Cores.branco};
    background-color: ${Cores.rosa};
  }
  .link-enabled {
    font-weight: 600;
    color: ${Cores.branco};
    background-color: ${Cores.roxo};
  }
  .link-disabled {
    color: ${Cores.preto};
  }
`;

const ButtonLogout = styled.button`
  &.button-logout {
    cursor: pointer;
    height: 3vh;
    color: ${Cores.rosa};
    background-color: transparent;
    border: 1px solid ${Cores.rosa};
    font-size: 1rem;
    font-weight: 600;
    padding: 0rem 1rem;
    transition: all 300ms ease-in;
    border-radius: 1rem;
  }
  &.button-logout:hover {
    color: ${Cores.branco};
    background-color: ${Cores.rosa};
    border: 1px solid transparent;
  }
`;


const NavBar = () => {
  const { isAuthenticated, logout } = useAuthStore()
  const navigate = useNavigate()

  const logoutHandler = () => {
    logout()
    navigate('/login')
  }
  return (
    <Container className='container-menu'>
      <Menu className='menu'>
        {!isAuthenticated ? (
          <div className='menu-items'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'link link-enabled' : 'link link-disabled'}>
              Inicio
            </NavLink>
            <NavLink to={'/register'} className={({ isActive }) => isActive ? 'link link-enabled' : 'link link-disabled'}>
              Registrar
            </NavLink>
            <NavLink to={'/login'} className={({ isActive }) => isActive ? 'link link-enabled' : 'link link-disabled'}>
              Entrar
            </NavLink>
          </div>
        ) : (
          <>
            <div className="menu-items">
              <NavLink to={'/dashboard'} className={({ isActive }) => isActive ? 'link link-enabled' : 'link link-disabled'}>
                Dashboard
              </NavLink>
            </div>
            <ButtonLogout className='button-logout' onClick={logoutHandler}>Sair</ButtonLogout>
          </>
        )}
      </Menu>
    </Container>
  )
}

export default NavBar