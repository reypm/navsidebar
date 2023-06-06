import React from 'react';
import { NavItemProps } from '../SideNavMenu.model';
import ChevronDownIcon from '../Icon/ChevronDownIcon';
import ChevronUpIcon from '../Icon/ChevronUpIcon';

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
		<li
			className={`side-navigation-panel-select-wrap ${
				hasSubNav ? 'side-navigation-panel-select-inner-wrap' : ''
			}`}
		>
			<div
				onClick={() => onItemClick(item)}
				className={`side-navigation-panel-select-option ${
					isShown.includes(item.id) ? 'side-navigation-panel-select-option-selected' : ''
				}`}
			>
				<span className="side-navigation-panel-select-option-wrap">{item.title}</span>
				{hasSubNav ? <ChevronDownIcon /> : ''}
			</div>
			{hasSubNav && isShown.includes(item.id) && (
				<ul className="side-navigation-panel-select-inner">
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
