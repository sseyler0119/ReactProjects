import './home.scss';
import { LogoS } from '../../constants/images';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'r', 'e', 'n', 'a']; /* ['l', 'o', 'b', 'o', 'd', 'a', 'n']; */
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
         setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br/>
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoS} alt="developer" />
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={nameArray}
                        idx={15}
                    />
                    <br/>
                    <AnimatedLetters 
                        letterClass={letterClass} 
                        strArray={jobArray}
                        idx={22}
                    />
                    </h1>
                    <h2>Fullstack Developer </h2>
                    <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>
                <Logo />
            </div>
            <Loader type='pacman'/>
        </>
    )
}

export default Home;
