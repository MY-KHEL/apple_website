import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect } from "react";


const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  
    const handleVideoSrcSet = () => {
      if(window.innerWidth < 760) {
        setVideoSrc(smallHeroVideo)
      } else {
        setVideoSrc(heroVideo)
      }
    }
  
    useEffect(() => {
      window.addEventListener('resize', handleVideoSrcSet);
  
      return () => {
        window.removeEventListener('reisze', handleVideoSrcSet)
      }
    }, [])

    useGSAP(()=>{
        gsap.to('.hero-title',{
            opacity:1,
            delay: 1.5,
            stagger:0.4
        })

            gsap.to('.call-to-action',{
                opacity:1,
                delay: 1.5,
                y:0,
                stagger:0.5
                    })
    },[])

    return ( 
    <>
    <section className="w-full nav-height bg- relative">
        <div className="h-5/6 w-full flex-center flex-col mt-8 ">
        <p id="hero-title" className="hero-title">iPhone 16 Pro</p>
        <p className="hero-title">Hello Apple Intelligence</p>
         <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
        </div>

        <div id="call-to-action" className=" mt-6 md:mt-0 call-to-action flex flex-center flex-row opacity-0 translate-y-20 gap-4">

        <a href="#highlight" className="btn "> Learn more  </a>
        <a href="#" className="btn-two  "> Buy </a>

        </div>
        <p className="text-sm pt-2 flex flex-center text-gray call-to-action opacity-0 translate-y-20">Apple Intelligence coming this fall<sup>1</sup></p>
       
    </section>
    </>
    );
}
 
export default Hero;