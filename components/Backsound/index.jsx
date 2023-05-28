import React, { useRef } from "react";
import { HiPause, HiPlay } from "react-icons/hi";

const BackSound = ({ isPlay, setIsPlay }) => {
  const audioEl = useRef();

  const playSong = () => {
    setIsPlay(true);
    audioEl.current.play();
  };
  const pauseSong = () => {
    setIsPlay(false);
    audioEl.current.pause();
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsPlay(true);
  //     audioEl.current.play();
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [setIsPlay]);

  return (
    <>
      <div className="w-fit  z-[999999]  fixed flex items-center gap-2 top-4 left-2 lg:left-4">
        <div
          onClick={!isPlay ? playSong : pauseSong}
          className="cursor-pointer  rounded-full   w-fit  shadow-lg shadow-black/30  transition-all duration-700 delay-75 ease-linear  p-2 bg-gradient-to-tr from-[#FBFBFB] via-[#926f56] to-[#FBFBFB]"
        >
          {!isPlay ? (
            <HiPlay
              size={25}
              className={`text-zinc-100/80   shadow rounded-full shadow-black/40 ${
                isPlay === true ? "animate-spin" : "animate-none"
              }`}
            />
          ) : (
            <HiPause
              size={25}
              className={`text-zinc-100/80   shadow rounded-full shadow-black/40 ${
                isPlay === false ? "animate-none" : "animate-spin"
              }`}
            />
          )}
          <audio ref={audioEl} autoPlay loop>
            <source src="/audio/audio.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </>
  );
};

export default BackSound;
