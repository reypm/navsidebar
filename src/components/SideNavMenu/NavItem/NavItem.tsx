import React from 'react';
import { NavItemProps } from '../SideNavMenu.model';
import ChevronDownIcon from '../Icon/ChevronDownIcon';
import ChevronUpIcon from '../Icon/ChevronUpIcon';

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

	console.log(isShown.includes(item.id));

	return (
		<li className={liCssClass}>
			<div onClick={() => onItemClick(item)} className={divCssClass}>
				<span className={spanCssClass}>{item.title}</span>
				{hasSubNav && !isShown.includes(item.id) ? <ChevronDownIcon /> : <ChevronUpIcon />}
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
								liCssClass="outter-li-1"
								divCssClass="outter-div outter-div-1"
								spanCssClass="outter-text-1"
							/>
						);
					})}
				</ul>
			)}
		</li>
	);
};

export default NavItem;
