import MinImage from "../assets/images/main-img.png"
import Moon from "../assets/images/moon.png"
import Boy from "../assets/images/boy.png"
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);
function Banner() {
    const bannerRef = useRef(null);
    const moonRef = useRef(null);
    const boyRef = useRef(null);
    const contentRef = useRef(null);
    useGSAP(
        () => {
        const timeline = gsap.timeline({
            scrollTrigger: {
            trigger: bannerRef.current,
            start: "top top",
            end: "+=1800",
            scrub: 1,
            pin: true,
            pinSpacing: true,
            markers: false,
            invalidateOnRefresh: true,
            },
        });
        timeline
            .to(moonRef.current, {
            x: 0,
            y: -200,
            rotation: 0,
            scale: 1.1,
            ease: "none",
            duration: 0.3,
        })
        
        .to(
          boyRef.current,
          {
            y: -60,
            scale: 1.1,
            ease: "none",
            duration: 0.5,
          },
          "<"
        )
        .to(
          contentRef.current,
          {
            x: 100,
            opacity: 0,
            ease: "none",
            duration: 0.5,
          },
          "<"
        );
        return () => {
            timeline.scrollTrigger?.kill();
            timeline.kill();
        };
        },
        {
        scope: bannerRef,
        }
    );
    return (
        <section className="banner relative" ref={bannerRef}>
            <div className="banner-media-wr relative h-full">
                <img className="banner-img main-img h-full w-full object-cover" src={MinImage} alt="banner" />
                <div className="banner-inner-media absolute h-max bottom-0 right-[15%] w-[400px]">
                    <img ref={moonRef} className="banner-img moon-img object-contain w-full top-[0px] left-[-80px] absolute" src={Moon} alt="Moon" />
                    <img ref={boyRef} className="banner-img boy-img object-contain w-[300px] relative" src={Boy} alt="Boy" />
                </div>
            </div>
            <div ref={contentRef} className="banner-content w-[500px] flex flex-col h-full flex items-start justify-center">
                <p className="banner-sb-hed text-[14px] uppercase text-[var(--primary-color)]">We Create</p>
                <h2 className="banner-hed text-white text-[55px] leading-[1] font-bold pb-[20px]">Morden Animated Experiences <br/> That <span className="text-[var(--primary-color)]">Inspire</span></h2>
                <p className="banner-desc text-[16px]">We craft stunning animations and intractive visuals that bring brands, stories, and ideas ro life.</p>
                <div className="banner-btns-wr flex gap-[20px] items-center pt-[20px]"> 
                    <a href="#" className="btn btn-primary">View our Work</a>
                    <a href="#" className="btn btn-secondary">Explore Services</a>
                </div>
            </div>
        </section>
    )

}
export default Banner