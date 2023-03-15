import { Link } from 'react-router-dom';
import { Box, Container } from './style';

const Home = () => {
  return (
    <Container className='home-page'>
      <Box id="page">
        <p className="title" >Site Kanban</p>
        <p className="text" >O seu aliado na organização dos afazeres do dia a dia!</p>
        <Link to={'/register'} className='btn signup'>Registrar</Link>
        <Link to={'/login'} className='btn signin'>Login</Link>
      </Box>
    </Container>
  )
}

export default Home