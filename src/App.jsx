import axios from "axios";
import {useState, useEffect, useCallback} from "react";
import weatherData from './weather_test.json';
import rtWeatherData from './current_weather_test.json';
import DayForeCast from "./components/DayForeCast";
import DataName from "./components/DataName";
import HourlyForeCast from "./components/HourlyForeCast";
import { WeatherImgs } from "./constants";
import RtForeCast from "./components/RtForeCast";
import Image from "next/image";




function App() {

  const [data, setData] = useState(null);
  const [text, setText] = useState("");
  const [daily, setDaily] = useState(null);
  const [hourly, sethourly] = useState(null);
  const [rtData, setRtData] = useState(null);




  useEffect(()=>{
    
  }, [])


  const onPress = async (e) => {
    e.preventDefault();
    try {
      setRtData(weatherData.timelines.hourly)
      setData(weatherData.location);
      setDaily(weatherData.timelines.daily);
      sethourly(weatherData.timelines.hourly);
      console.log(weatherData.location);

    } catch(error){
      console.log(error);
    }
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {

      const API = process.env.NEXT_PUBLIC_API_KEY;
      const location = text

      const options2 = {
        method: 'GET',
        url: `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1h%2C1d&units=imperial&apikey=${API}`,
        headers: {
            accept: 'application/json'
        }
    };

      const result = await axios.request(options2)

      setRtData(result.data.timelines.hourly)
      setData(result.data.location);
      setDaily(result.data.timelines.daily);
      sethourly(result.data.timelines.hourly);
      // setRtData(result.data.data1.data.values)
      // setData(result.data.data2.location);
      // setDaily(result.data.data2.timelines.daily);
      // sethourly(result.data.data2.timelines.hourly);
      // console.log(result.data.data2.timelines.daily);

    } catch(error){
      console.log(error);
    }
  }


  return (
    <main className="">
      <div className={`bg-hero bg-cover bg-no-repeat bg-center ${data ? "h-[100rem]" : "h-screen"} w-100vh`}>
        <Image src={WeatherImgs['Credit']} width={400}/>
        <h1 className="text-white">Code By: <a href="https://hyah01.github.io/profolio-project/">Hy Huynh</a></h1>
        <h1 className="text-[5rem] sm:text-9xl font-extrabold text-gray-900 leading-tight mb-2 pb-4 relative text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r to-pink-200 from-sky-200">Weather Forecast</span>
          <span id="bar" className="absolute inset-0 mx-auto my-auto top-[170px] w-[70rem] h-3 bg-gradient-to-r from-sky-200 to-pink-200"></span>
        </h1>
        <div className="flex flex-col justify-center items-center">
          <p className="mt-10 text-[30px]">Enter Location or ZipCode (with 2-letter code based on <a className="underline" href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#US" target="_blank">ISO-3166</a>)</p>
          <p className="text-[15px]">This is using Tomorrow.io's free API so it will only be able to call the API <span className="font-bold">20</span> times every hour ( Incase it doesn't work use the example API <span 
             className=" underline hover:cursor-pointer" onClick={onPress}>here</span> )
          </p>
          <input className=" w-auto h-[42px] leading-[30px] outline-none border-none font-[2rem] rounded-[20px] py-0 px-[20px] m-4 " type="text" id="location" name='location' placeholder="Type Here" onChange={(e) => setText(e.target.value)}/>
          <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-full" id="post" onClick={handleClick}> Submit</button>         
        </div>
        <DataName data={data}/>
        <RtForeCast rtData={rtData}/>
        <div className="sm:w-[60%]  m-auto">
          <HourlyForeCast hourly={hourly}/>
        </div>
        <DayForeCast daily={daily}/>
        
        
      </div>
    </main>
  )
}
export default App;

