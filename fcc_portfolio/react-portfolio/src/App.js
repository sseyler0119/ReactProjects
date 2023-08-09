import './App.scss';
import { Routes, Route } from 'react-router-dom';
import {Home, Layout, About, Contact} from './components';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element ={<Home />} />
          <Route path="about" element ={<About />} />
          <Route path="contact" element ={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
