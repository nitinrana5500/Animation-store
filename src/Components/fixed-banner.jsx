import Purple from "../assets/images/purple-sky.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function FixedBanner() {
  const fixedbanner = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      fixedbanner.current,
      {
        y: "100vh",
      },
      {
        yPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: fixedbanner.current,
          start: "top+=5000 bottom",
          end: "top top",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section ref={fixedbanner} className="fixed-banner relative">
      <div className="fixed-banner-img-wr">
        <img
          className="fixed-banner-img h-full w-full"
          src={Purple}
          alt="banner"
        />
      </div>

      <div className="fixed-banner-content-wr absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px]">
        <h2 className="heading text-[60px] leading-[1.2] text-center text-white">
          Voyeur Verite is an independent, artist-founded creative studio
        </h2>
      </div>
    </section>
  );
}

export default FixedBanner;