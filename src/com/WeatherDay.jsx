import w from '../db/Date.json';

function WeatherDay(probs) {
    const d = probs.d;
    const witem = w.response.body.items.item[0];
    console.log(witem);
    const items = [];
    const keys = [`rnSt${d}Am`,`rnSt${d}Pm`,`wf${d}Am`,`wf${d}Pm`];
    for(let k of keys)  items.push(witem[k]);  

  return (
    <>
        <ul>
            <li>{d}일후 오전 강수량{items[0]}%</li>
            <li>{d}일후 오후 강수량{items[1]}%</li>
            <li>{d}일후 오전 날씨예보{items[2]}</li>
            <li>{d}일후 오후 날씨예보{items[3]}</li>
        </ul>
    </>
  );
}

export default WeatherDay;
