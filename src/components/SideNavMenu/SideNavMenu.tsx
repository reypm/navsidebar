import React, { useState } from 'react';
import { NavItemProps } from './SideNavMenu.model';
import './style.scss';
import NavItem from './NavItem/NavItem';

const SideNavMenu = ({ items }: { items: NavItemProps<string>[] }) => {
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
							return <NavItem key={item.path} item={item} />;
						})}
					</ul>
				</nav>
			)}
		</>
	);
};

export default SideNavMenu;
