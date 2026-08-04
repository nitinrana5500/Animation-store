import Purple from "../assets/images/purple-sky.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function FixedBanner() {
  const fixedbanner = useRef(null);
  const imageRef = useRef(null);
  useGSAP(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: fixedbanner.current,
        start: "top end",
        end: "+=1500",
        scrub: 2,
        pin: true,
        pinSpacing: false,
        markers: false,
      },
    })
    .to(imageRef.current, {
      y: -1000,
      scale: 1,
      ease: "none",
    });
  },[]);

  return (
    <section ref={fixedbanner} className="fixed-banner relative">
      <div className="fixed-banner-img-wr">
        <img
          ref={imageRef}
          className="fixed-banner-img h-[200vh] w-full"
          src={Purple}
          alt="banner"
        />
      </div>

      <div className="fixed-banner-content-wr absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%] w-full max-w-[550px]">
        <h2 className="heading text-[60px] leading-[1.2] text-center text-white">
          Voyeur Verite is an independent, artist-founded creative studio
        </h2>
      </div>
    </section>
  );
}

export default FixedBanner;