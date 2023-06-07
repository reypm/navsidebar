import React, { useState } from 'react';
import { NavItemProps } from './SideNavMenu.model';
import './style.scss';
import NavItem from './NavItem/NavItem';

const SideNavMenu = ({ items }: { items: NavItemProps<string>[]; activePath?: string }) => {
	const [activeItem, setActiveItem] = useState('');

	const handleClick = (item: NavItemProps<string>) => {
		if (activeItem === item.id) {
			setActiveItem('');
		} else {
			setActiveItem(item.id);
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
									liCssClass="outer-li-0"
									divCssClass="outer-div outer-div-0"
									spanCssClass="outer-text-0"
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
