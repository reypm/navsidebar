import React, { useState } from 'react';
import { NavItemProps } from './SideNavMenu.model';
import './style.scss';
import NavItem from './NavItem/NavItem';

const SideNavMenu = ({
	items,
	activePath = '',
}: {
	items: NavItemProps<string>[];
	activePath?: string;
}) => {
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
									key={item.path}
									item={item}
									onItemClick={handleClick}
									isShown={activeItem}
									liCssClass="outter-li-0"
									divCssClass="outter-div outter-div-0"
									spanCssClass="outter-text-0"
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
