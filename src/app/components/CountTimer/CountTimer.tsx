"use client";
import { useEffect, useState } from "react";

const defaultCountdown = {
  secondes: "OO",
  minutes: "OO",
  heures: "OO",
  jours: "OO",
};

export default function CountTimer() {
  const [CountTimer, setCountTimer] = useState(defaultCountdown);

  function updateTime() {
    const countDownDate = new Date("Jun 22, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountTimer({
      jours: days.toString(),
      heures: hours.toString(),
      minutes: minutes.toString(),
      secondes: seconds.toString(),
    });
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[1rem] mt-2 sm:mt-0 flex gap-0 justify-center sm:gap-10 sm:text-[1.2rem] font-rubikBold">
      <div className="flex flex-col gap-1 items-center">
        <span className="w-[5rem]">{CountTimer.jours}</span>
        <span className=" text-[0.8rem] sm:text-[1.2rem]">Jours</span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="w-[5rem]">{CountTimer.heures}</span>
        <span className=" text-[0.8rem] sm:text-[1.2rem]">Heures</span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="w-[5rem]">{CountTimer.minutes}</span>
        <span className=" text-[0.8rem] sm:text-[1.2rem]">Minutes</span>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <span className="w-[5rem]">{CountTimer.secondes}</span>
        <span className=" text-[0.8rem] sm:text-[1.2rem]">Secondes</span>
      </div>
    </div>
  );
}
