import './App.css';
import data from './v1.sidenavdata.json';
import { buildNestedStructure } from './components/utils/buildNestedElements.util';
import SideNavMenu from './components/SideNavMenu/SideNavMenu';
import React from 'react';

function App() {
	return (
		<nav role="navigation" aria-label="side-navigation" className="side-navigation-panel">
			<SideNavMenu items={buildNestedStructure(data)} />
		</nav>
	);
}

export default App;
