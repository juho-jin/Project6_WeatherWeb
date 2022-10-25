import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const handleClick = (s) => {
    const url = {
      '사과' :  '/p2?item=사과&item2=과일',
      '바나나' : '/p2?item=바나나&item2=과일',
      '당근' : '/p2?item=당근&item2=채소'
    }
    navigate(url[s]);
  }

  return (
    <>
      <h1>Home</h1>
      <h2>page1으로 이동</h2>
      <ul>
        <li><Link to='/p1/사과'>사과</Link></li>
        <li><Link to='/p1/바나나'>바나나</Link></li>
        <li><Link to='/p1/당근'>당근</Link></li>
      </ul>

      <h2>page2으로 이동</h2>
      <ul>
        <li><Link to='/p2?item=사과&item2=과일'>사과</Link></li>
        <li><Link to='/p2?item=바나나&item2=과일'>바나나</Link></li>
        <li><Link to='/p2?item=당근&item2=채소'>당근</Link></li>
      </ul>

      <h2>page2으로 이동</h2>
      <ul>
        <button onClick={() => handleClick('사과')}>사과</button>
        <button onClick={() => handleClick('바나나')}>바나나</button>
        <button onClick={() => handleClick('당근')}>당근</button>
      </ul>
    </>
  );
}