import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useState } from "react";
import 'remixicon/fonts/remixicon.css'

function App() {
  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() =>{
 
    if (!setShowContent) return

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "1",
      ease: "Expo.easeInOut",
    });

      gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "1",
      ease: "Expo.easeInOut",
    });

      gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "1",
      ease: "Expo.easeInOut",
    });
    

       gsap.to(".character", {
      scale: 1.4,
      x:"-50%",
      bottom:"-25",
      rotate: 0,
      duration: 2,
      delay: "1",
      ease: "Expo.easeInOut",
    });
    
          gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "1",
      ease: "Expo.easeInOut",
    });
    


   const main = document. querySelector(".main");

   main?.addEventListener("mousemove", function(e){
      const xMove = (e.clientX / window.innerWidth -0.5) * 40;
      gsap.to(".main .text",{
       x: `${xMove * 0.4}%`,
      })
          gsap.to(".sky",{
       x: xMove
      })
          gsap.to(".bg",{
       x: xMove, 
      })
          gsap.to(".main ",{
       x: xMove ,
      })
    })
  }, [setShowContent])

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full 
      h-screen overflow-hidden bg-[#000]"
      >
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href=".\images\bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          ></image>
        </svg>
      </div>
      {setShowContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 ">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-3 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[2px] leading-none text-white">Rockstar</h3>
              </div>
            </div>
            <div className="imagesdiv relative overflow-hidden top-0 left-0  w-full h-screen">
              <img
                className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="\images\sky.png"
                alt="img"
              />
              <img
                className="absolute bg scale-[1.8] rotate-[-3deg] top-0 left-0 w-full h-full object-cover"
                src="\images\bg.png"
                alt="img"
              />
               <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 scale-[1.4] rotate-[-10deg] -translate-x-1/2">
              <h1 className="text-[12rem] leading-none -ml-40">grand</h1>
              <h1 className="text-[12rem] leading-none -ml-[0.5px]">theft</h1>
              <h1 className="text-[12rem] leading-none -ml-40">auto</h1>
            </div>
              <img
                className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]"
                src="\images\girlbg.png"
                alt="girl_img"
              />
            </div>
            <div className="btmbar absolute text-white bottom-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">Score</h3>
                </div>
                <img className="absolute h-[45px]  top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2" 
                src="\ps5.png" alt="img" />
            </div>
          </div>
          <div className="w-full h-screen px-10 flex items-center justify-center bg-black">\
          <div className="cntnr flex text-white w-full h-[80%]">
              <div className="limg relative w-1/2 h-full">
            <img className="absolute scale-[1.3] top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 " src="/imag.png" alt="girlimg" />
          </div>
          <div className="rg w-[30%] py-30">
            <h1 className="text-8xl">Still Running</h1>
            <h1 className="text-8xl">Not Hunting</h1>
            <p className="mt-10 text-xl font-[Helvetica_Now_Diaplay]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus esse unde, dignissimos, odio excepturi sapiente natus ipsa impedit ratione dolor reprehenderit, iusto labore.</p>
            <p className=" mt-3  text-xl font-[Helvetica_Now_Diaplay]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus corrupti ducimus maxime praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit et, iste ea eveniet molestiae dignissimos quisquam sequi quibusdam unde debitis tempore ipsam blanditiis voluptas nemo, placeat dolore sit possimus.
            </p>
              <p className=" mt-10  text-xl font-[Helvetica_Now_Diaplay]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis minus corrupti ducimus maxime praesentium Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit et, iste ea eveniet molestiae dignissimos quisquam sequi quibusdam unde debitis tempore ipsam blanditiis voluptas nemo, placeat dolore sit possimus.
            </p>
            <button className="bg-yellow-300 px-10 py-10 text-4xl text-black m-10">Download Now</button>
          </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default App;


// tim 41:min around  /