import React from 'react';
import { NavItemProps } from '../SideNavMenu.model';
import ChevronDownIcon from '../Icon/ChevronDownIcon';

const NavItem = ({
	item,
	onItemClick,
	isShown,
}: {
	item: NavItemProps<string>;
	onItemClick: any;
	isShown: string;
}) => {
	const hasSubNav = item.subNav && item.subNav.length > 0;
	const subNav = item.subNav;

	return (
		<li className="side-navigation-panel-select-wrap">
			<div onClick={() => onItemClick(item)}>
				<span className="side-navigation-panel-select-option-wrap">{item.title}</span>
				{hasSubNav ? <ChevronDownIcon /> : ''}
			</div>
			{hasSubNav && isShown.includes(item.id) && (
				<ul className="side-navigation-panel-select">
					{subNav?.map((item: NavItemProps<string>) => {
						return (
							<NavItem
								key={item.path}
								item={item}
								onItemClick={onItemClick}
								isShown={isShown}
							/>
						);
					})}
				</ul>
			)}
		</li>
	);
};

export default NavItem;
