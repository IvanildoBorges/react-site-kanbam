import Icon from '../../assets/iconList'
import FormController from '../../components/FormController'
import Cores from '../../styles/cores/cores'
import { Container } from './style'

const Login = () => {
  return (
    <Container className='container-login'>
      <div id="container-content">
        <Icon 
          classe="container-icon" 
          tamanho={200} 
          cor1={Cores.verde} 
          cor2={Cores.amareloClaro} 
        />
      </div>
      <FormController page='login' />
    </Container>
  )
}

export default Login