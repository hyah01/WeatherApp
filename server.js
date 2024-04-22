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
app.get('/', (req,res)=>{    
    
    const API = process.env.REACT_PUBLIC_API_KEY;
    const location = req.headers.location.replace(" ", "%20");

    const options = {
        method: 'GET',
        url: `https://api.tomorrow.io/v4/weather/forecast?location=${location}&timesteps=1h%2C1d&units=imperial&apikey=${API}`,
        //url: `https://swapi.dev/api/people/${location}/`,
        headers: {
            accept: 'application/json'
        }
   };
   
    axios.request(options).then(function (response) {
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}
)
