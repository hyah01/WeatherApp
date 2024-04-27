// defining the server port
const port = 5000

// initializing installed dependencies
const express = require('express')
require('dotenv').config()
const axios = require('axios')
const app = express()
const cors = require('cors')
app.use(cors())

// listening for port 5000
app.listen(5000, ()=> console.log(`Server is running on ${port}` ))



// const options = {method: 'GET', headers: {accept: 'application/json'}};
//     const API = process.env.REACT_APP_API_KEY;

//     fetch(`https://swapi.dev/api/people/1/`, options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

// API request
app.get('/api', (req,res)=>{    
    
    const API = process.env.REACT_PUBLIC_API_KEY;
    const location = req.headers.location;
    

    const options = {
        method: 'GET',
        url: `https://api.tomorrow.io/v4/weather/realtime?location=${location}&units=imperial&apikey=${API}`,
        //url: `https://swapi.py4e.com/api/people/1/`,
        headers: {
            accept: 'application/json'
        }
    };
    const options2 = {
        method: 'GET',
        url: `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1h%2C1d&units=imperial&apikey=${API}`,
        //url: `https://swapi.py4e.com/api/people/2/`,
        headers: {
            accept: 'application/json'
        }
    };
   
    // axios.all([
    //     axios.request(options),
    //     axios.request(options2)
    // ]).then(axios.spread((data1,data2) => 
    //     res.json({
    //         data1: data1.data,
    //         data2: data2.data
    //     })
    // )).catch(function (error) {
    //     console.error(error);
    // });

    axios.request(options2).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}
)

module.exports = app;
