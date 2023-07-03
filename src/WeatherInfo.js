import React from "react";

const WeatherInfo = (props) => {
  return (
    <div>
      <h1>{props.city}</h1>
      <ul>
        <li>{/* <FormattedDate date={weather.date} /> */}</li>
        <li>clear sky</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex">
            <img src={props.data.iconUrl}></img>
            <h1>{Math.round(props.data.temperature)}</h1>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Precipitation: <span></span>%
            </li>
            <li>
              Humidity: <span>{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span>{props.data.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;

// import React from "react";
// import FormattedDate from "./FormattedDate";
// import WeatherIcon from "./WeatherIcon";
// import WeatherTemperature from "./WeatherTemperature";

// export default function WeatherInfo(props) {
//   return (
//     <div className="WeatherInfo">
//       <h1>{props.data.city}</h1>
//       <ul>
//         <li>
//           <FormattedDate date={props.data.date} />
//         </li>
//         <li className="text-capitalize">{props.data.description}</li>
//       </ul>
//       <div className="row mt-3">
//         <div className="col-6">
//           <div className="d-flex">
//             <div>
//               <WeatherIcon code={props.data.icon} size={52} />
//             </div>

//             <div>
//               <WeatherTemperature celsius={props.data.temperature} />
//             </div>
//           </div>
//         </div>
//         <div className="col-6">
//           <ul>
//             <li>Humidity: {props.data.humidity}%</li>
//             <li>Wind: {props.data.wind} km/h</li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }
