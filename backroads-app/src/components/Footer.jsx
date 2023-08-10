import { socialLinks } from "../data";
import Pagelink from "./Pagelink";

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* This is ALMOST the  same but has different classes */}
      {/* <ul className='footer-links'>
        {pageLinks.map((link) => {
          const {id, href, text} = link;
          return (
            <li key={id}>
              <a href={href} className='footer-link'>
                {text}
              </a>
            </li>
          )
        })}
      </ul> */}
      <Pagelink parentClass={'footer-links'} itemClass={'footer-link'} />

      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a
                href={href}
                target='_blank'
                rel='noreferrer'
                className='footer-icon'
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer