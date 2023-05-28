import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CountDownTimer({ ...props }) {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  const intervalRef = useRef();

  useEffect(() => {
    const startTimer = () => {
      const countdownDate = new Date("September 10 2023 00:00:00").getTime();
      intervalRef.current = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (distance < 0) {
          clearInterval(intervalRef.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="w-full flex flex-col item-center justify-center gap-4">
        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-easing="linear"
          className="text-center rounded-tl-[30%] rounded-br-[40%]  flex flex-col pb-3 justify-center items-center shadow-xl mx-auto  w-32 sm:w-36  h-32 sm:h-36 bg-gradient-to-br from-stone-800/10 via-zinc-50 to-stone-900/10 overflow-hidden  clip"
        >
          {/* Timer Days */}
          <div

            className=" text-3xl sm:text-4xl m-auto  flex items-center justify-center">
            <span className="text-zinc-500 titles font-semibold">
              {timerDays}
            </span>
          </div>
          <small className="w-full  text-center text-zinc-500 titles text-lg">
            Hari
          </small>
        </div>
        <div className="w-full px-1 gap-2 flex items-center justify-center h-full">


          {/* Timer Hours */}
          <div
            data-aos="zoom-out-right"
            data-aos-duration="1000"

            className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-2 shadow-xl   w-24 sm:w-28  h-24 sm:h-28 bg-gradient-to-br from-stone-800/10 via-zinc-50 to-stone-900/10 overflow-hidden  clip"
          >
            <div className=" text-2xl sm:text-3xl m-auto  flex items-center justify-center">
              <span className="text-zinc-500 titles font-semibold">
                {timerHours}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-500 titles   text-sm ">
              Jam
            </small>
          </div>
          {/* Timer Minutes */}
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-2 shadow-xl  bg-gradient-to-br w-24 sm:w-28  h-24 sm:h-28 from-stone-800/10 via-zinc-50 to-stone-900/10 overflow-hidden  clip"
          >
            <div className=" text-2xl sm:text-3xl m-auto  flex items-center justify-center">
              <span className="text-zinc-500 titles font-semibold">
                {timerMinutes}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-500 titles   text-sm ">
              Menit
            </small>
          </div>
          {/* Timer Second */}
          <div
            data-aos="zoom-out-left"
            data-aos-duration="1000"
            className="text-center rounded-tl-[30%] rounded-br-[40%] flex flex-col pb-2 shadow-xl  bg-gradient-to-br w-24 sm:w-28  h-24 sm:h-28  from-stone-800/10 via-zinc-50 to-stone-900/10 overflow-hidden  clip"
          >
            <div className=" text-2xl sm:text-3xl m-auto  flex items-center justify-center">
              <span className="text-zinc-500 titles font-semibold">
                {timerSeconds}
              </span>
            </div>
            <small className="w-full  text-center text-zinc-500 titles  text-sm ">
              Detik
            </small>
          </div>
        </div>
      </div>
    </>
  );
}
