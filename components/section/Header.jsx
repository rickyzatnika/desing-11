/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Image from "next/legacy/image";
import AOSWrapper from "../AOS/AOSWrapper";
import { images } from "../MyImage";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2500,
    fade: true,
    className: "w-full h-full ",
  };
  return (
    <>
      <AOSWrapper>
        <div
          className="w-full bg-gradient-to-b from-[#FBFBFB] to-[#FFFDD0] overflow-hidden min-h-screen flex flex-col relative items-center justify-center"
          id="header"
        >
          <div className="absolute w-full h-40 bottom-0 bg-gradient-to-t from-[#FBFBFB] z-40"></div>
          <div className="w-full h-full relative z-20 flex flex-col items-center gap-2 justify-between">
            <div className=" w-full opacity-90  h-full absolute -top-44 -left-28 z-10">
              <img src="/img/bunga-2.png" alt="bunga" className="" />
            </div>
            <h1
              data-aos="fade-down"
              data-aos-duration="800"
              className="text-stone-800/80 titles tracking-widest text-xl sm:text-xl"
            >
              The Wedding Of
            </h1>
            <div className=" w-60 opacity-70 animates h-full absolute -bottom-80 -right-20 -z-10">
              <Image
                src="/img/bunga-2.png"
                alt="bunga"
                width={450}
                objectFit="contain"
                height={375}
                priority
              />
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="w-[42%] md:w-[35%] z-10 relative  "
            >
              <Slick {...settings}>
                {images.map((image, i) => (
                  <img
                    key={i}
                    src={image.src}
                    alt=""
                    placeholder="blur"
                    blurdataurl={image.src}
                    className="w-96 h-auto relative p-1 object-cover shadow shadow-black/20  rounded-full "
                  />
                ))}
              </Slick>
              <div className="absolute  rounded-full bg-gradient-to-t from-[#FBFBFB] via-transparent to-[#2a2a2b] top-0 z-30 w-full h-full" />
            </div>
            <div className="text-center flex items-center leading-relaxed py-4">
              <h3
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-3xl md:text-4xl font-[parisienne]  px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] to-stone-500  bg-clip-text text-transparent py-2 "
              >
                Rio
              </h3>
              <p
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="alex bg-gradient-to-r from-stone-500  via-[#b4b49a]  to-stone-500 bg-clip-text text-transparent  text-3xl "
              >
                &
              </p>
              <h4
                data-aos="fade-down"
                data-aos-duration="800"
                className="text-3xl md:text-4xl   px-2 font-semibold bg-gradient-to-r from-stone-500  via-[#b4b49a] font-[parisienne] to-stone-500  bg-clip-text text-transparent py-2"
              >
                Nisa
              </h4>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="flex flex-col relative z-50 items-center gap-1 justify-center"
            >
              <div className="mouse"></div>
            </div>
          </div>
        </div>
      </AOSWrapper>
    </>
  );
};

export default Header;
