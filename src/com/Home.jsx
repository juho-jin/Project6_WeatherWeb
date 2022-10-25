import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>일기예보</h1>
            <ul>            
                <li><Link to="/WeatherMain2">단기 예보</Link></li>
                <li><Link to="/WeatherMain">중기 예보</Link></li>   
            </ul>        
        </>
    );
}

export default Home;