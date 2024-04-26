import React from "react";
import weatherCode from '../assets/WeatherCode/WeatherCode.json';


const RtForeCast = (props) => {
    return (
        <div className="flex justify-center text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            {/* {
              props.rtData && [props.rtData].map(post => {
                return(
                  <div className="text-center" key="locationName">
                    <h1 className=" pl-[60px] mt-[-3.5rem] mb-[-2rem] text-[10rem]">{Math.round(post.temperatureApparent)}°</h1>
                    <h1 className="text-[3rem]">{weatherCode.weatherCode[post.weatherCode]}</h1>
                  </div>
                )
            })} */}
            {
              props.rtData && props.rtData.slice(0,1).map(post => {
                return(
                  <div className="text-center" key="locationName">
                    <h1 className=" pl-[60px] mt-[-3.5rem] mb-[-2rem] text-[10rem]">{Math.round(post.values.temperatureApparent)}°</h1>
                    <h1 className="text-[3rem]">{weatherCode.weatherCode[post.values.weatherCode]}</h1>
                  </div>
                )
            })}
            
        </div>
    )
}

export default RtForeCast;