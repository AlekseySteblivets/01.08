import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, changeCounter } from './redux/reducers';


import './App.css';
import Counter from './components/counter';



function App() {


  const dispatch = useDispatch();

  const reduxCounter = useSelector(state => state.counter);
  console.log(reduxCounter)

  const [counter, setCounter] = useState({
    state1: 0,
    state2: 0,
  });

  const changeReduxCounter = (newCounterState) => {
    console.log(newCounterState)
    return dispatch(changeCounter(newCounterState))
  };
  

  // const reduxIncrement = () => {
  //   return dispatch(increment())
  // };
  
  // const reduxDecrement = () => {
  //   return dispatch(decrement())
  // };

  const currentCounter = key => {
    return newCounterState => {
      setCounter(prevState => ({
        ...prevState,
        [key]: newCounterState,
      }));
    };
  };

  // console.log(counter);

  return (
    
      <div className="App">
      
      <Counter
        value={counter.state1}
        setValue={currentCounter('state1')}
        name={'a'}
      />
      <Counter
        value={reduxCounter.counter}
        setValue={changeReduxCounter}
        name={'b'}
      />
    </div>
  
    
  );
}

export default App;
