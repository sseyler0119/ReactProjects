import { useGlobalContext } from "./context";
import {Navbar, Hero, Sidebar, Submenu} from './components/index';
const App = () => {
  
  return <main>
    <Navbar />
    <Hero />
    <Sidebar/>
    <Submenu/>
  </main>;
};
export default App;
