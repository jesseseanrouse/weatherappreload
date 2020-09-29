import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form/Form';
import Weather from './Components/Weather/Weather';

function App() {
	// Set States
	const [zip, setZip] = useState('');
	const [weatherData, setData] = useState({});
  const [view, setView] = useState(false);

  // I tried to .map it. it says that it is not a function. I tried something else, more details in Weather.js
  // console.log(weatherData)
  // const WeatherRender = weatherData.map((ele, index) => {
  //   return (
  //     <Weather 
  //       maxTemp={ele.main.max_temp}
  //       minTemp={ele.main.min_temp}
  //     />
  //   );
  // });

	// getting info for render if accepted in Form
	const zipSearch = (zip) => {
		// Huge Thanks to Riana Shahid for fixing the link for openweathermap
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=${zip}&units=imperial&appid=d555fae949431605abc364eda5bee57c`
		)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
			});
		setView(true);
	};
	return (
		<>
			<Form value={zip} setValue={setZip} func={zipSearch} />
  {/* <div style={{ display: view ? 'block' : 'none' }}>{WeatherRender}</div> */}
			<div style={{ display: view ? 'block' : 'none' }}><Weather data={weatherData}/></div>
		</>
	);
}

export default App;
