import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders copy";
import img from "@/components/assests/profile image.jpg";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center items-center flex-col lg:flex-row md:flex-row  relative  z-10 w-full ">
        <Button
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          style={{
            //   add these two
            //   you can generate the color from here https://
            clipPath: "polygon(25.4% 0%, 100% 0%, 74.6% 100%, 0% 100%)",
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div
            className="max-w-[100%] md:max-w-2xl lg:max-w-[50vw] p-2 border "
            style={{
              clipPath: "polygon(25.4% 0%, 100% 0%, 74.6% 100%, 0% 100%)",
              background: "none",
            }}
          >
            <img
              style={{
                clipPath: "polygon(25.4% 0%, 100% 0%, 74.6% 100%, 0% 100%)",
                width: "350px",
                height: "auto",
              }}
              src={img.src}
              alt=""
            />
          </div>
        </Button>

        <div className="my-10 lg:my-0 md:my-0 ml-0 md:ml-20 lg:ml-20 max-w-[100vw] md:max-w-2xl lg:max-w-[50vw] flex flex-col  items-start   justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-start text-[40px] md:text-3xl lg:text-4xl"
          />

          <p className="text-start md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Lijan, a React Next.js Developer & Digital Marketer based in Bangladesh.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
