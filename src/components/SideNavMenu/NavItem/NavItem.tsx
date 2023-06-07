import React, { useState } from 'react';
import { NavItemProps } from '../SideNavMenu.model';
import ChevronDownIcon from '../Icon/ChevronDownIcon';

const NavItem = ({
	item,
	onItemClick,
	isShown,
	liCssClass,
	divCssClass,
	spanCssClass,
}: {
	item: NavItemProps<string>;
	onItemClick: any;
	isShown: string;
	liCssClass?: string;
	divCssClass?: string;
	spanCssClass?: string;
}) => {
	const hasSubNav = item.subNav && item.subNav.length > 0;
	const subNav = item.subNav;

	return (
		<li className={liCssClass}>
			<div
				onClick={() => onItemClick(item)}
				className={`${divCssClass} ${isShown.includes(item.id)} ? 'selected' : ''`}
			>
				<span className={spanCssClass}>{item.title}</span>
				{hasSubNav ? <ChevronDownIcon /> : ''}
			</div>
			{hasSubNav && isShown.includes(item.id) && (
				<ul className="side-navigation-panel-select-inner">
					{subNav?.map((item: NavItemProps<string>) => {
						return (
							<NavItem
								key={`${item.path}-${item.title}`}
								item={item}
								onItemClick={onItemClick}
								isShown={isShown}
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
