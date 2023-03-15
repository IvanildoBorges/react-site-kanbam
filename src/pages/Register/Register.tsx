import Icon from '../../assets/iconList'
import FormController from '../../components/FormController'
import Cores from '../../styles/cores/cores'
import { Container } from './style'

const Register = () => {
  return (
    <Container className='container-register'>
      <div id="container-content">
          <Icon 
            classe="container-icon" 
            tamanho={200} 
            cor1={Cores.amarelo} 
            cor2={Cores.cinza} 
          />
        </div>
      <FormController page='register' />
    </Container>
  )
}

export default Register