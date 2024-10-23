import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlight = () => {

    useGSAP(()=>{
        gsap.to('#title',{
            opacity:1,
            delay:2,
            duration:2,
            y:0,

        })

        gsap.to('.link',{
            opacity:1,
            delay:2,
            duration:2,
            stagger:0.25,
            y:0,
        })
    },[])

    return ( <>
    <section className=" w-screen overflow-hidden common-padding h-full bg-zinc">
    <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            
          </div>
        </div>

        <VideoCarousel />
      </div>
    </section>
    </> 
    );
}
 
export default Highlight;