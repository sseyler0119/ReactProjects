import Form from './components/Form';
import ColorList from './components/ColorList';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#1a759f').all(10));
 
  const addColor = (color) => {
    try {
      /* .all(10) means to increment by 10%, larger values will produce fewer results, 
      smaller values will produce larger results. If this value is changed, you will also 
      need to alter the SingleColor classname index so that it looks for a value other than 10
      index > 10 ? 'color color-light' : 'color'  */
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return <main>
    <Form addColor={addColor} />
    <ColorList colors={colors} />
    <ToastContainer position='top-center' />
  </main>;
};
export default App;
