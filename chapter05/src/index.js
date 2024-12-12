// 사용하지 않는 파일 삭제
// src/App.test.js
// src/logo.svg
// src/reportWebvitals.js
// src/setupText.js

// 사용하지 않을 코드 삭제
// import reportWebVitals from './reportWebVitals'; 파일을 삭제했으므로 임포트문도 삭제
// <React.StrictMode> 리액트 앱 내부의 잠재적인 문제를 검사하거나 코드상의 부작용을 탐지하거나 구버전 리액트 기능을 사용하는지 검사
// </React.StrictMode>


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
