import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
// import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({});

  const handleResponse = (response) => {
    setWeather({
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
    console.log(response.data);
  };

  const formSubmit = (event) => {
    event.preventDefault();
    search();
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const search = () => {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  };
  return (
    <div className="Weather">
      <form onSubmit={formSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="enter a city"
              className="form-control"
              autoFocus="on"
              onChange={changeCity}
            />
          </div>
          <div className="col-3">
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <WeatherInfo data={weather} />
    </div>
  );
}

// import React, { useState } from "react";
// import WeatherInfo from "./WeatherInfo";
// // import WeatherForecast from "./WeatherForecast";
// import axios from "axios";
// import "./Weather.css";

// export default function Weather(props) {
//   const [weatherData, setWeatherData] = useState({ ready: false });
//   const [city, setCity] = useState(props.defaultCity);

//   function handleResponse(response) {
//     setWeatherData({
//       ready: true,
//       coordinates: response.data.coord,
//       temperature: response.data.main.temp,
//       humidity: response.data.main.humidity,
//       date: new Date(response.data.dt * 1000),
//       description: response.data.weather[0].description,
//       icon: "http://openweathermap.org/img/wn/10d@2x.png",
//       wind: response.data.wind.speed,
//       city: response.data.name,
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     search();
//   }

//   function handleCityChange(event) {
//     setCity(event.target.value);
//   }

//   function search() {
//     const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(handleResponse);
//   }

//   if (weatherData.ready) {
//     return (
//       <div className="Weather">
//         <form onSubmit={handleSubmit}>
//           <div className="row">
//             <div className="col-9">
//               <input
//                 type="search"
//                 placeholder="Enter a city.."
//                 className="form-control"
//                 autoFocus="on"
//                 onChange={handleCityChange}
//               />
//             </div>
//             <div className="col-3">
//               <input
//                 type="submit"
//                 value="Search"
//                 className="btn btn-primary w-100"
//               />
//             </div>
//           </div>
//         </form>
//         <WeatherInfo data={weatherData} />
//         {/* <WeatherForecast coordinates={weatherData.coordinates} />  */}
//       </div>
//     );
//   } else {
//     search();
//     return "Loading...";
//   }
// }
