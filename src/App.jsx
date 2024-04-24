import axios from "axios";
import {useState, useEffect, useCallback} from "react";
import weatherData from './weather_test.json';
import rtWeatherData from './current_weather_test.json';
import DayForeCast from "./components/DayForeCast";
import DataName from "./components/DataName";
import HourlyForeCast from "./components/HourlyForeCast";





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

      const options = {
        method: 'GET',
        url: "http://localhost:5000",
        headers: {
          location: text
        },
      }

      const result = await axios.request(options)
      setData(result.data.location);
      setDaily(result.data.timelines.daily);
      Sethourly(result.data.timelines.hourly);
      console.log(result.data.timelines.daily);

    } catch(error){
      console.log(error);
    }
  }


  return (
    <main className="h-screen">
      <div className="bg-hero bg-cover bg-no-repeat bg-center h-full">
        <h1 className="text-9xl font-extrabold text-gray-900 leading-tight mb-2 pb-4 relative text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.5)]">
          <span className="bg-clip-text text-transparent bg-gradient-to-r to-pink-200 from-sky-200">Weather Forecast</span>
          <span className="absolute inset-0 mx-auto my-auto top-[170px] w-[70rem] h-3 bg-gradient-to-r from-sky-200 to-pink-200"></span>
        </h1>
        <div className="flex flex-col justify-center items-center">
          <p className="mt-10 text-[30px]">Enter Location or ZipCode (with 2-letter code based on <a className="underline" href="https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#US" target="_blank">ISO-3166</a>)</p>
          <input className="my-5 h-10 w-[500px]" type="text" id="location" name='location'onChange={(e) => setText(e.target.value)}/>
            <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-bold py-2 px-4 rounded-full" id="post" onClick={onPress}> Submit</button>         
        </div>
        <DataName data={data}/>
        <HourlyForeCast hourly={hourly}/>
        <DayForeCast daily={daily}/>

          
      </div>
    </main>
  )
}
export default App;

