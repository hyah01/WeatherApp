import React from "react";
import weatherCode from '../assets/WeatherCode/WeatherCode.json';
import { WeatherImgs } from "../constants";
import Image from "next/image";

const HourlyForeCast = (props) => {

    return (
        <div className={`${props.hourly ? " mx-auto mt-10 flex justify-between isolate rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 px-[5rem] py-10 backdrop-blur-lg" : " "} `}>
            {
            props.hourly && props.hourly.slice(0,24).map(post => {
              return (
                <div key={post.time} className="text-center text-[30px] font-bold text-white max-w-[40px]">
                    <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">{((parseInt(post.time.slice(11,13))+16)%12+1).toString()}<span className="text-[25px]">{((parseInt(post.time.slice(11,13))+16)%23+1) <= 12 ? "AM": "PM"}</span></h1>
                    {/* this display days of the week and increment cur by one for every element that is being map and module to reset the day */}
                    <h2 className="text-gray-500">{Math.round(post.values.temperatureApparent)}°</h2>
                    <div className="flex justify-center items-center">
                        <Image src={WeatherImgs[post.values.weatherCode]}
                               width={70} />
                    </div>
                    
                </div>
              )
            })
          }
        </div>
    )
}

export default HourlyForeCast;