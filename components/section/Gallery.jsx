/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import AOSWrapper from "../AOS/AOSWrapper";
import ShowProtocol from "../ShowProkes";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const LightGallery = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

const Gallery = () => {
  return (
    <>
      <AOSWrapper>
        <div
          id="gallery"
          className="w-full bg-[#f7f5f5] px-3 min-h-3xl py-14 p-0 md:p-14  relative"
        >
          <div className="absolute z-20 w-full -top-0.5 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#FFDAB9"
                fill-opacity="1"
                d="M0,32L120,37.3C240,43,480,53,720,101.3C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="absolute z-10 w-full top-0.5 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#6c6c6d28"
                fill-opacity="0.5"
                d="M0,32L120,37.3C240,43,480,53,720,101.3C960,149,1200,235,1320,277.3L1440,320L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
              ></path>
            </svg>
          </div>
          <div className="absolute z-20 -bottom-4 left-0 right-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#F5F5F5"
                fill-opacity="1"
                d="M0,96L120,122.7C240,149,480,203,720,229.3C960,256,1200,256,1320,256L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="absolute  z-10 -bottom-3 left-0 right-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#e2e2e0d5"
                fill-opacity="1"
                d="M0,96L120,122.7C240,149,480,203,720,229.3C960,256,1200,256,1320,256L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
          <div className="text-center  w-full py-4 leading-relaxed">
            <div className="flex items-center justify-center bg-gradient-to-tl from-[#2e2e3a] py-2 via-zinc-500 to-[#4a4a4e]  bg-clip-text text-transparent text-xl sm:text-2xl">
              <span
                data-aos="fade-left"
                data-aos-duration="1000"
                className="p-1 text-3xl alex border-b border-stone-500/50 "
              >
                Happiness
              </span>{" "}
              <span
                data-aos="fade-right"
                data-aos-duration="1000"
                className="alex text-5xl"
              >
                {" "}
                Moments
              </span>
            </div>
          </div>
          <LightGallery
            mode="lg-fade"
            speed={300}
            addClass={true}
            closeOnTap={true}
            isMobile
            elementClassNames="w-full columns-3 px-1 gap-0 py-4 group "
          >
            <Link href="/img/gallery/3.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/3.jpg"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/5.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1400"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/5.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/6.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/6.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/4.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1300"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/4.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/1.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/1.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/2.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1100"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/2.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/7.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1600"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/7.jpg"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/8.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1700"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/8.jpg"
                alt=""
              />
            </Link>
            <Link href="/img/gallery/9.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1800"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/9.jpg"
                alt=""
              />
            </Link>

            <Link href="/img/gallery/10.jpg">
              <img
                data-aos="zoom-in-up"
                data-aos-duration="1900"
                className="img-responsive border-2 border-zinc-400/50 shadow-inner shadow-black"
                src="/img/gallery/10.jpg"
                alt=""
              />
            </Link>
          </LightGallery>
        </div>
      </AOSWrapper>

      <ShowProtocol />
    </>
  );
};

export default Gallery;
