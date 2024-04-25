import React from "react";
import weatherCode from '../assets/WeatherCode/WeatherCode.json';
import { WeatherImgs } from "../constants";
import Image from "next/image";

const DayForeCast = (props) => {
    console.log(props.daily);
    // get the today's date
    const now = new Date();
    // convert today date into what day it is in the week
    var cur = now.getDay();
    // list of the current day of the week
    const daysOfWeek = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    return (
        <div className={`${props.daily ? "container mx-auto mt-10 flex justify-between isolate rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 px-[5rem] py-10 backdrop-blur-lg overflow-auto" : "hidden"} `}>
            {
            props.daily && props.daily.map(post => {
              return (
                <div key={post.time} className="text-center text-[30px] font-bold text-white">
                    <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">{post.time.slice(5,10).replace("-","/")}</h1>
                    {/* this display days of the week and increment cur by one for every element that is being map and module to reset the day */}
                    <h1 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">{daysOfWeek[(cur++%7)]}</h1>
                    <h2 className="text-gray-500">{Math.round(post.values.temperatureAvg)}°</h2>
                    <h2 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">{weatherCode.weatherCode[post.values.weatherCodeMax]}</h2>
                    <div className="flex justify-center items-center">
                        <Image src={WeatherImgs[post.values.weatherCodeMax]}
                               width={70} />
                    </div>
                    
                </div>
              )
            })
          }
        </div>
    )
}

export default DayForeCast;