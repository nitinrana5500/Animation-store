import './App.css'
import Home from './Pages/home'
import Header from './Components/header'
import { useRef } from 'react';
import gsap from 'gsap';
import Lenis from "lenis";
import { useGSAP } from '@gsap/react';

function App() {

  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
