import React from 'react';
import './App.css';
import bgImg from '../src/computerPic.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';


function App() {
  return (

    <div styles={{ backgroundImage: `url(${bgImg})` }}>
      <Header></Header>



    </div>
  );
}

export default App;
