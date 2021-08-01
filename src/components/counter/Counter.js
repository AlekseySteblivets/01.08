import { memo } from 'react';

const Counter = ({ value, setValue, name }) => {
  const simpleClick = key => {
    if (key === 'increment') {
      return setValue(value + 1);
    }
    return setValue(value - 1);
  };
  console.log(name);

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => simpleClick('increment')}>Подсчет+</button>
      <button onClick={() => simpleClick('decrement')}>Подсчет-</button>
    </div>
  );
};

const areEqual = (prevProps, nextProps) => {
  if (prevProps.value === nextProps.value) {
    return true;
  }

  return false;
};

export default memo(Counter, areEqual);
