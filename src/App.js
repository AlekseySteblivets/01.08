import { useState } from 'react';
import './App.css';
import Counter from './components/counter';

function App() {
  const [counter, setCounter] = useState({
    state1: 0,
    state2: 0,
  });

  const currentCounter = key => {
    return newCounterState => {
      setCounter(prevState => ({
        ...prevState,
        [key]: newCounterState,
      }));
    };
  };

  console.log(counter);

  return (
    <div className="App">
      <Counter
        value={counter.state1}
        setValue={currentCounter('state1')}
        name={'a'}
      />
      <Counter
        value={counter.state2}
        setValue={currentCounter('state2')}
        name={'b'}
      />
    </div>
  );
}

export default App;
