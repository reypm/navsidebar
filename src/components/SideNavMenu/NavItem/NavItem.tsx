import React, { useState } from 'react';
import { NavItemProps } from '../SideNavMenu.model';
import ChevronDownIcon from '../Icon/ChevronDownIcon';

const NavItem = ({ item }: { item: NavItemProps<string> }) => {
	const hasSubNav = item.subNav && item.subNav.length > 0;
	const subNav = item.subNav;

	return (
		<li className="side-navigation-panel-select-wrap">
			<div>
				<span className="side-navigation-panel-select-option-wrap">{item.title}</span>
				{hasSubNav ? <ChevronDownIcon /> : ''}
			</div>
			{hasSubNav && (
				<ul className="side-navigation-panel-select">
					{subNav?.map((item: NavItemProps<string>) => {
						return <NavItem key={item.path} item={item} />;
					})}
				</ul>
			)}
		</li>
	);
};

export default NavItem;
