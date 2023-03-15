import styled from 'styled-components'
import Cores from '../styles/cores/cores'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

type FormControllerProps = {
  page: string
}

const Container = styled.div`
  &.container-form-controller {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Cores.borda};
    transition: all 300ms ease-in;
  }

  @media screen and (max-width: 767px) {
    &.container-form-controller {
      padding: 0 0.5rem;
    }
  }
`;

const BoxForm = styled.div`
  &.container-box-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${Cores.brancoForte};
    border: 1px solid ${Cores.borda};
    border-radius: 1rem;
    width: 40%;
    padding: 2rem 0rem;
    transition: all 300ms ease-in;
  }

  @media screen and (min-width: 1024px) and (max-width: 1300px) {
    &.container-box-form {
      width: 70%;
      padding: 1rem 0rem;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    &.container-box-form {
      width: 80%;
      padding: 1rem 0rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 767px) {
    &.container-box-form {
      width: 90%;
      padding: 1rem 0rem;
    }
  }

  @media screen and (max-width: 480px) {
    &.container-box-form {
      width: 100%;
      padding: 1rem 0rem;
    }
  }
`;

const FormController = ({ page }: FormControllerProps) => {
  return (
    <Container className='container-form-controller'>
      <BoxForm className='container-box-form'>
        <h1 className='form-controller-title'>
          {page[0].toUpperCase() + page.substring(1)}
        </h1>
        {page === 'login' ? <LoginForm /> : null}
        {page === 'register' ? <RegisterForm /> : null}
      </BoxForm>
    </Container>
  )
}

export default FormController