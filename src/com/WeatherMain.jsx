import '../css/Main.css';
import WeatherDay from './WeatherDay';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function WeatherMain() {
    let [day, setDay] = useState(3);
    const handeClick =(d)=> {
        setDay(d);
    }

  return (
    <>
        <h1>중기예보</h1>
        <li><Link to="/">홈으로</Link></li>
        <form>
            <button onClick={(e)=>{e.preventDefault(); handeClick(3);}}>3일후날씨</button>
            <button onClick={(e)=>{e.preventDefault(); handeClick(4);}}>4일후날씨</button>
            <button onClick={(e)=>{e.preventDefault(); handeClick(5);}}>5일후날씨</button>
            <button onClick={(e)=>{e.preventDefault(); handeClick(6);}}>6일후날씨</button>
        </form>
        <WeatherDay d={day}/>
        <li><Link to="/WeatherMain2">단기 예보</Link></li>
    </>
  );
}

export default WeatherMain;
