import React from 'react';
import logo from './logo.svg';
import './App.css';

import DownloadLink from './components/download-link';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
				<DownloadLink
					label="Download"
					filename="test.pdf"
					type="text/pdf;charset=utf8;"
					exportFile={() => "My data file"}
				></DownloadLink>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
