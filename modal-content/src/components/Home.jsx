import { useGlobalContext } from '../context';
import {FaBars} from 'react-icons/fa';
import './home.css';

const Home = () => {
    const {openSidebar, openModal} = useGlobalContext();

  return (
    <main>
        <button className="sidebar-toggle" onClick={openSidebar}><FaBars/></button>
        <button className='btn' onClick={openModal}>Show Modal</button>
    </main>
  )
}
export default Home