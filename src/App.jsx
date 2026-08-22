import './App.css'
import Home from './Pages/home'
import Header from './Components/header'
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Lenis from "lenis";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  useEffect(() => {
  const lenis = new Lenis({
    autoRaf: true,
    duration: 3,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  return () => lenis.destroy();
}, []);
  return (
    <>
      <Header/>
      <Home/>
    </>
  )
}

export default App
