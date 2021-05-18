import {useState,useEffect} from 'react'
export default function Practice() {
  //The below keeps stuff stored in local storage properly even after refresh//
  const previousNumber = localStorage.getItem("number") || 0;
  const [number, setNumber] = useState(previousNumber);
  useEffect(() => {
      localStorage.setItem("number", number)
  }, [number])
  // then this function is useless
  function refresh() {
      return localStorage.setItem("number", 0),
      setNumber(0);
  }
return (
  <div className="clicker">
      <p className="number">{number}</p>
      <button className="add-button" onClick={() => setNumber(number + 1)}>+</button>
      <button className="refresh-button" onClick={() => refresh()}>0</button>
      <button className="substract-button" onClick={() => setNumber(number - 1)}>-</button>
  </div>
);
}