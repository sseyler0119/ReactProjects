import './sidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import { LogoS, LogoSubtitle } from '../../constants/images';
import { FontAwesomeIcon, faHome, faUser, faEnvelope, faLinkedin, faGithub, faYoutube, faSkype } from '../../constants/icons';


const Sidebar = () =>  (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="serena" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/'>
                    <FontAwesomeIcon icon = {faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.github.com/'>
                    <FontAwesomeIcon icon = {faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.youtube.com/'>
                    <FontAwesomeIcon icon = {faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='skype:live:bobangajicsm'>
                    <FontAwesomeIcon icon = {faSkype} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)


export default Sidebar;