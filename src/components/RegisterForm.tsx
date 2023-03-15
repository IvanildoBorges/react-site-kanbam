import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import useAuthStore from '../context/useAuthStore'
import { RegisterInputProps, registerSchema } from '../schemas/user.schemas'
import styled from 'styled-components'
import Cores from '../styles/cores/cores'

const Form = styled.form`
  &.form-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 90%;
  }
  .box-input {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: none;
    padding-left: 0.5rem;
    color: ${Cores.preto};
    background-color: ${Cores.cinza};
  }
  .box-submit {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    color: ${Cores.branco};
    background-color: ${Cores.roxo};
    cursor: pointer;
    margin-top: 1rem;
    transition: all 300ms ease-in;

    &:hover {
      background-color: ${Cores.rosa};
      color: ${Cores.branco};
    }
  }
`;

const FormBox = styled.div`
  &.form-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.25rem;
  }
  &.form-box-error {
    .span-error {
      font-size: 0.8rem;
      font-weight: 600;
      color: ${Cores.vermelho};
    }
  }
`;

const Label = styled.label`
  &.box-label {
    font-weight: 600;
  }
`;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<RegisterInputProps>({ resolver: zodResolver(registerSchema) })

  const { register: signup, error } = useAuthStore()
  const navigate = useNavigate()

  const onSubmit = async (data: RegisterInputProps) => {
    console.log(data)
    signup(data)
    if (error) {
      return
    } else {
      navigate('/login')
    }
  }

  return (
    <Form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <FormBox className='form-box'>
        <Label className='box-label'>Nome</Label>
        <input className='box-input' placeholder='Nome completo' type='text' {...register('name')} />
        {errors.name ? (
          <FormBox className='form-box-error'>
            <span className='span-error'>{errors.name?.message}</span>
          </FormBox>
        ) : null}
      </FormBox>
      <FormBox className='form-box'>
        <Label className='box-label'>Email</Label>
        <input className='box-input' placeholder='example@mail.com' type='email' {...register('email')} />
        {errors.email ? (
          <FormBox className='form-box-error'>
            <span className='span-error'>{errors.email?.message}</span>
          </FormBox>
        ) : null}
      </FormBox>
      <FormBox className='form-box'>
        <Label className='box-label'>Senha</Label>
        <input className='box-input' placeholder='******' type='password' {...register('password')} />
        {errors.password ? (
          <FormBox className='form-box-error'>
            <span className='span-error'>{errors.password?.message}</span>
          </FormBox>
        ) : null}
      </FormBox>
      <FormBox className='form-box'>
        <Label className='box-label'>Confirmar senha</Label>
        <input className='box-input' placeholder='******' type='password' {...register('passwordConfirmation')} />
        {errors.passwordConfirmation ? (
          <FormBox className='form-box-error'>
            <span className='span-error'>{errors.passwordConfirmation?.message}</span>
          </FormBox>
        ) : null}
      </FormBox>
      <input type='submit' value='Cadastrar' className='box-submit' />
      {error ? (
        <FormBox className='form-box'>
          <span className='span-error'>{error}</span>
        </FormBox>
      ) : null}
    </Form>
  )
}

export default RegisterForm