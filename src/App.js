import Home from './com/Home';
import WeatherMain from './com/WeatherMain';
import WeatherMain2 from './com/WeatherMain2';
import { Route, Routes } from 'react-router-dom';
// import Nav from './pages/Nav.js';
// import Home from './pages/Home.js';
// import Page1 from './pages/Page1.js';
// import Page2 from './pages/Page2.js';

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />} /> */}
        <Route path="/" element={<Home/>} />
        <Route path="/WeatherMain" element={<WeatherMain/>} />
        <Route path="/WeatherMain2" element={<WeatherMain2/>} />
      </Routes>
    </>
  );
}

export default App;
