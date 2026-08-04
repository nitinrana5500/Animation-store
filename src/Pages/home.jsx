import { useRef } from "react";
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useGSAP } from "@gsap/react";
import Banner from "../Components/banner";
import FixedBanner from "../Components/fixed-banner";


function Home() {


  return (
    <>
      <Banner />
      <FixedBanner />
    </>
  );
}

export default Home;
