import React from 'react';

// I can find the data when I sent it down here without mapping but it doesn't like my empty {} and runs amuck. I can locate the information I want in the object but this doesn't seem to like any path thats not 'standard'

const Weather = (props) => {
	console.log(props.data.main);
	return (
		<>
		<h1>Current Temp</h1>
		<h2>City Name</h2>
		<h3>Weather Description</h3>
	<h3>Max Temp: {props.maxTemp}</h3>
		<h3>Min Temp: {props.minTemp}</h3>
		</>
	)
};

export default Weather;
