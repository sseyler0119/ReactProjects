import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

  return (
    <>
        <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['A','b', 'o', 'u', 't', ' ', 'M', 'e']}
                    idx={15} />
            </h1>
            <p>
                I'm a very ambitious front-end developer looking for a role in an
                established IT company with the opportunity to work with the latest
                technologies on challenging and diverse projects.
            </p>
            <p>
                I'm quiet confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor \
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>

        <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face1">
                    <FontAwesomeIcon icon={faAngular} color="#dd0031"/>
                </div>
                <div className="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#f06529"/>
                </div>
                <div className="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28a4d9"/>
                </div>
                <div className="face4">
                    <FontAwesomeIcon icon={faReact} color="#5e4df4"/>
                </div>
                <div className="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#e8fd81"/>
                </div>
                <div className="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#ec4b28"/>
                </div>
            </div>
        </div>
        </div>
        <Loader type="pacman" />
    </>
  )
}

export default About