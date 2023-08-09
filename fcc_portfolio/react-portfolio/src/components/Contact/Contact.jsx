import Loader from 'react-loaders';
import './contact.scss';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';


const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm = useRef();

    useEffect(() => {
        setTimeout(() => {
         setLetterClass('text-animate-hover')
       }, 3000)
     }, [])

     const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_at8lv4r',
                'template_gr7bo7k',
                refForm.current,
                'baePIA2LzFl0K4Fni'   
            )
            .then(
                 () => {
                    alert('Message sent');
                    window.location.reload(false);
                },
                () => {
                    alert('Message failed to send, please try again');
                }
        )
     }
  return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']} 
                        idx={15}
                    />
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                    commodo consequat. 
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type="text" name='name' placeholder='Name' required />
                            </li>
                            <li className="half">
                                <input type="email" name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input type="text" name='subject' placeholder='Subject' required />
                            </li>
                            <li>
                                <textarea placeholder="Message" name="message"></textarea>
                            </li>
                            <li>
                                <input type="submit" className='flat-button' value='SEND'/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className="info-map">
                Serena Vogt,
                <br />
                PNW
                <br />
                <span>email@email.com</span>
            </div>
            <div className="map-wrap">
                <MapContainer center={[45.485168, -122.804489]} zoom={13}>
                    <TileLayer url ="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[45.485168, -122.804489]}>
                        <Popup>Alive and well in the PNW</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type='pacman' />

    </>
  )
}

export default Contact