import mainImg from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ut maiores quas autem aliquam impedit tempora quae odit nemo, optio inventore blanditiis? 
            Incidunt quibusdam quod dolor adipisci cumque quis temporibus
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={mainImg} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


export default Landing