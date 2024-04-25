import {useState} from "react";
import weatherCode from '../assets/WeatherCode/WeatherCode.json';
import { WeatherImgs } from "../constants";
import Image from "next/image";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import next from "next";

const HourlyForeCast = (props) => {

    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
      if (current === 0) setCurrent(3);
      else setCurrent(current - 1)

    }
    let nextSlide = () => {
      if (current === 3) setCurrent(0);
      else setCurrent(current + 1)
    }
    return (
        <div className={`${props.hourly ? " mx-auto mt-10 rounded-xl bg-white/10 shadow-lg ring-1 ring-black/5 px-[2rem] py-10 backdrop-blur-lg" : "hidden"} `}>
            <div className=" overflow-hidden relative overflow-x-scroll">
              <div className={`flex transition ease-out duration-400 gap-[1rem]`} style={{transform: `translateX(-${current * 100}%)`}} >
                {
                props.hourly && props.hourly.slice(0,24).map(post => {
                  return (
                    <div key={post.time} className="text-center text-[30px] font-bold text-white min-w-[5rem]">
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
              {/* <div className=" absolute top-0 h-full w-full justify-between items-center flex text-white">
                <button onClick={previousSlide}>
                  <BsFillArrowLeftCircleFill />
                </button>
                <button onClick={nextSlide}>
                  <BsFillArrowRightCircleFill />
                </button>
              </div> */}
            </div>
        </div>
    )
}

export default HourlyForeCast;