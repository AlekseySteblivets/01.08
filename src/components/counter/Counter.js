
const Counter = ({ value, setValue }) => {

    const simpleClick = (key) => {
        if (key === 'increment') {
            return setValue(prevValue => prevValue + 1);
        }
        return setValue(prevValue => prevValue - 1);
    };



    return (
        <div>
            <span>{value}</span>
            <button onClick={() => simpleClick('increment')}>Подсчет+</button>
            <button onClick={() => simpleClick('decrement')}>Подсчет-</button>

        </div>
    );
};

export default Counter;