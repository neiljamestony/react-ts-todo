import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

const App: React.FC = () => {

  	return(
		<div>
			<Header title="SIMPLE TASK MANAGER"/>
			<Content/>
		</div>
	)
}
export default App;
