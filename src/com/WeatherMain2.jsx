import weather from '../db/weather2.json';
import item from '../db/item.json';
import '../css/Main.css';
import { Link } from 'react-router-dom';

export default function WeatherMain2() {
    const witem = weather.response.body.items.item;
    const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" };
    const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" };

    const lis = Object.entries(witem).map((m) => (
        m[1].category === 'PTY' ? 
        (<li key={m[1].category}>
            <span>{item[m[1].category][0]}</span>
            <span>{m[1].obsrValue}{pty[m[1].obsrValue]}</span>
        </li>)
        : (m[1].category === 'SKY' ?         
        (<li key={m[1].category}>
            <span>{item[m[1].category][0]}</span>
            <span>{m[1].obsrValue}{sky[m[1].obsrValue]}</span>
        </li>)
        : <li key={m[1].category}>
            <span>{item[m[1].category][0]}</span>
            <span>{m[1].obsrValue}{item[m[1].category][1]}</span>
        </li>)));
    const lis2 = Object.entries(witem);

    console.log(lis2);
    return (
        <>
            <h1>기상 단기 예보</h1>
            <li><Link to="/">홈으로</Link></li>
            <ul className='wUinfo'>
                {lis}
            </ul>
            <li><Link to="/WeatherMain">중기 예보</Link></li>
        </>
    );
}