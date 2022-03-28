// import Button from './Button';
// import styles from './App.module.css';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [cost, setCost] = useState(1);
  const [need, setNeed] = useState(1);
  const onChange = (event) => {
    setCost(event.target.value);
    setNeed(1);
  };
  const handleInput = (event) => {
    setNeed(event.target.value);
  };
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The coins!{loading ? '' : `Here are..${coins.length} coins`}</h1>
      {loading ? (
        <strong>loading...</strong>
      ) : (
        <select onChange={onChange}>
          <option>Select Coin!</option>
          {coins.map((coin, index) => (
            <option
              key={index}
              value={coin.quotes.USD.price}
              id={coin.symbol}
              symbol={coin.symbol}
            >
              {coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <h2>Please enter the amount</h2>
      <div>
        <input
          type='number'
          value={need}
          onChange={handleInput}
          placeholder='dollor'
        />
        $
      </div>
      <h2>You can get {need / cost}</h2>
    </div>
  );
}
export default App;

// https://github.com/SALT0601/ReactJS-Web/commit/ebce52caaf223783d9c230426f062e7b92bc182f
// https://github.com/rootTiket/pracice/blob/main/src/App.js
