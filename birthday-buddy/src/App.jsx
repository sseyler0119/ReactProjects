import { useState } from 'react';
import personData from './data';
import List from './components/List';

const App = () => {
  const [people, setPeople] = useState(personData);
  
  return <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      <List people={people }/>
      <button className="btn btn-block" type='button' onClick={() => setPeople([])}>Clear All</button>
    </section>
  </main>;
};
export default App;
