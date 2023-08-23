import { useGlobalContext } from "./context";
import {Navbar, Hero, Sidebar, Submenu} from './components';
const App = () => {
  
  return <main>
    <Navbar />
    <Hero />
    <Sidebar/>
    <Submenu/>
  </main>;
};
export default App;
