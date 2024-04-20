import axios from "axios";
import {useState, useEffect, useCallback} from "react"
import weatherData from './weather_test.json'


function App() {

  const [data, setData] = useState(null)
  const [text, setText] = useState("")
  const [daily, setDaily] = useState(null)
  const [hourly, Sethourly] = useState(null)




  useEffect(()=>{
    
  }, [])


  const onPress = async (e) => {
    e.preventDefault();
    try {
      setData(weatherData.location);
      setDaily(weatherData.timelines.daily)
      Sethourly(weatherData.timelines.hourly)
      console.log(weatherData.location)

    } catch(error){
      console.log(error)
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
      console.log(result.data.timelines.daily)

    } catch(error){
      console.log(error)
    }
  }


  return (
    <main className="App">
      <h1>Weather</h1>
      <input type="text" id="location" name='location'onChange={(e) => setText(e.target.value)}/>
      <button id="post" onClick={onPress}> Submit</button>
      
      {
        data && [data].map(post => {
          return(
            <div>
              <h1>{post.name}</h1>
            </div>
          )
      })}
      {
        daily && daily.map(post => {
          return (
            <div key={post.time}>
              <h1>{post.time.slice(5,10).replace("-","/")}</h1>
              <h3>Avg. Temp</h3>
              <h2>{post.values.temperatureAvg}</h2>
            </div>
          )
        })
      }
    </main>
  )
}
export default App;

