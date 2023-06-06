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
	const [activeItem, setActiveItem] = useState({
		expanded: false,
		path: activePath,
	});

	// Listen for parent prop changes and update state
	React.useEffect(() => {
		setActiveItem((originalSubNav) => ({
			expanded: originalSubNav.expanded,
			path: activePath,
		}));
	}, [activePath]);

	const handleClick = (item: NavItemProps<string>) => {
		console.log('click', activeItem.expanded, activeItem.path);
		const hasSubNav = item.subNav && item.subNav.length > 0;
		const subNav = item.subNav;

		if (activeItem.expanded) {
			const currentItemIsOpen: boolean =
				item.path === activeItem.path ||
				(hasSubNav &&
					subNav?.some((_subNavItem) => _subNavItem.path === activeItem.path)) ||
				false;

			setActiveItem({
				expanded: hasSubNav ? !currentItemIsOpen : false,
				path: item.path,
			});
		} else {
			setActiveItem({
				expanded: !!hasSubNav && item.path === activeItem.path,
				path: item.path,
			});
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
									isShown={activeItem.expanded}
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
