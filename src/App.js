import { useState } from 'react';
import './App.css';
import Counter from './components/counter';


function App() {
  const [counter, setCounter] = useState(0);


  console.log(counter);



  return (
    <div className="App">
      <Counter value={counter} setValue={setCounter} />
    </div>
  );
}

export default App;
