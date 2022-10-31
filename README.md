# React useded Timer web page

리액트를 활용하여 제작한 연습용 웹페이지 입니다.
- URL : https://juho-jin.github.io/Project6_WeatherWeb/
## 제작하며 배운 점
1. BrowserRouter
  (1) 라우터 설치 : npm 명령어, 터미널에서 실행 npm install react-router-dom
  (2) index file : import { BrowserRouter } from 'react-router-dom';
  (3) App file : import { Route, Routes} from 'react-router-dom';
      - <Routes> 태그 안에 <Route path='path 경로 설정' element={리액트테그}>
2.배포시 참조사항
  github 배포시 브라우저에 랜더링 안될 경우 
