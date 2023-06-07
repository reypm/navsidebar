import React, { useState } from 'react';
import { NavItemProps } from '../SideNavMenu.model';
import ChevronDownIcon from '../Icon/ChevronDownIcon';

const NavItem = ({
	item,
	liCssClass,
	divCssClass,
	spanCssClass,
}: {
	item: NavItemProps<string>;
	liCssClass?: string;
	divCssClass?: string;
	spanCssClass?: string;
}) => {
	const hasSubNav = item.subNav && item.subNav.length > 0;
	const subNav = item.subNav;
	const [activeItem, setActiveItem] = useState('');
	const [selectedClass, setSelectedClass] = useState('');

	const handleClick = (item: NavItemProps<string>) => {
		if (activeItem === item.id) {
			setActiveItem('');
		} else {
			setActiveItem(item.id);
		}
	};

	return (
		<li className={liCssClass}>
			<div onClick={() => handleClick(item)} className={`${divCssClass} ${selectedClass}`}>
				<span className={spanCssClass}>{item.title}</span>
				{hasSubNav && !activeItem.includes(item.id) ? <ChevronDownIcon /> : ''}
			</div>
			{hasSubNav && activeItem.includes(item.id) && (
				<ul className="side-navigation-panel-select-inner">
					{subNav?.map((item: NavItemProps<string>) => {
						return (
							<NavItem
								key={`${item.path}-${item.title}`}
								item={item}
								liCssClass="outer-li-1"
								divCssClass="outer-div outer-div-1"
								spanCssClass="outer-text-1"
							/>
						);
					})}
				</ul>
			)}
		</li>
	);
};

export default NavItem;
