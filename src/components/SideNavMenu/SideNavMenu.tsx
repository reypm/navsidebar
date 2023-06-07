import React, { useState } from 'react';
import { NavItemProps } from './SideNavMenu.model';
import './style.scss';
import NavItem from './NavItem/NavItem';

const SideNavMenu = ({ items }: { items: NavItemProps<string>[]; activePath?: string }) => {
	const [activeItem, setActiveItem] = useState('');
	const [selectedClass, setSelectedClass] = useState('');

	const handleClick = (item: NavItemProps<string>) => {
		if (activeItem === item.id) {
			setActiveItem('');
			setSelectedClass('');
		} else {
			setActiveItem(item.id);
			setSelectedClass('selected');
		}
	};

	return (
		<>
			{items.length > 0 && (
				<nav
					role="navigation"
					aria-label="side-navigation"
					className="side-navigation-panel"
				>
					<ul className="side-navigation-panel-select">
						{items.map((item: NavItemProps<string>, key: number) => {
							return (
								<NavItem
									key={`${item.path}-${item.title}`}
									item={item}
									onItemClick={handleClick}
									isShown={activeItem}
									liCssClass="outter-li-0"
									divCssClass="outter-div outter-div-0"
									spanCssClass="outter-text-0"
									selectedClass={selectedClass}
								/>
							);
						})}
					</ul>
				</nav>
			)}
		</>
	);
};

export default SideNavMenu;
