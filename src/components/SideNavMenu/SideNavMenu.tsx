import React, { useState } from 'react';
import { NavItemProps } from './SideNavMenu.model';
import './style.scss';
import NavItem from './NavItem/NavItem';

const SideNavMenu = ({ items }: { items: NavItemProps<string>[] }) => {
	const [activeItem, setActiveItem] = useState('');
	const [subMenuClass, setSubMenuClass] = useState('');

	const handleClick = (item: NavItemProps<string>) => {
		console.log(activeItem)
		console.log(item.id)
		
		
		if (activeItem.startsWith(item.id)) {
			const parent = item.id.slice(0, -2);
			setActiveItem(parent);
			//setSubMenuClass('collapsed');
		} else {
			setActiveItem(item.id);
			setSubMenuClass('expanded');
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
									subMenuClass={subMenuClass}
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
