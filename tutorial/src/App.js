import React, { Component, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [scrollDepth, setScrollDepth] = useState(0);

	function determineUsersScrollDepth() {
		const scrolled =  document.documentElement.scrollTop || document.body.scrollTop;
		setScrollDepth(scrolled);
	}

	useEffect(() => {
		window.addEventListener('scroll', determineUsersScrollDepth);

	});

	return (
		<div className="App">

			<header className="App-header">

				<img src={logo} className="App-logo" alt="logo" />

				<p>You've scrolled this far: {scrollDepth}</p>

				<p>
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
				</p>

			</header>

		</div>
	);
}

export default App;
