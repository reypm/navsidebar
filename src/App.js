import './App.css';
import data from './v1.sidenavdata.json';
import { buildNestedStructure } from './components/utils/buildNestedElements.util';
import SideNavMenu from './components/SideNavMenu/SideNavMenu';
import React, { useState } from 'react';
import { NavItemProps } from './components/SideNavMenu/SideNavMenu.model';

function App() {
	const { items } = buildNestedStructure(data);

	// const [activeSubNav, setActiveSubNav] = useState({
	// 	expanded: true,
	// 	selectedId: activeItemId,
	// });
	//
	// // Listen for parent prop changes and update state
	// React.useEffect(() => {
	// 	setActiveSubNav((originalSubNav) => ({
	// 		expanded: originalSubNav.expanded,
	// 		selectedId: activeItemId,
	// 	}));
	// }, [activeSubNav]);
	//
	// const handleSubNavExpand = (item: NavItemProps<string>) => {
	// 	if (activeSubNav.expanded) {
	// 		const currentItemOrSubNavItemIsOpen: boolean =
	// 			// either the parent item is expanded already
	// 			item.path === activeSubNav.selectedId ||
	// 			// or one of its expandable children is selected
	// 			(item.subNav &&
	// 				item.subNav.some(
	// 					(_subNavItem) => _subNavItem.path === activeSubNav.selectedId
	// 				)) ||
	// 			false;
	//
	// 		setActiveSubNav({
	// 			// disable expansion value, if not expandable
	// 			expanded:
	// 				item.subNav && item.subNav.length > 0 ? !currentItemOrSubNavItemIsOpen : false,
	// 			selectedId: item.path,
	// 		});
	// 	} else {
	// 		setActiveSubNav({
	// 			expanded: !!(item.subNav && item.subNav.length > 0), // expand if expandable
	// 			selectedId: item.path,
	// 		});
	// 	}
	// };

	return (
		<nav role="navigation" aria-label="side-navigation" className="side-navigation-panel">
			<SideNavMenu items={items} activeItem="" />
		</nav>
	);
}

export default App;
