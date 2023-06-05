import React from 'react';
import {NavItemProps} from "../SideNavMenu.model";
import ChevronUpIcon from "../Icon/ChevronUpIcon";
import ChevronDownIcon from "../Icon/ChevronDownIcon";

const NavItem = ({
  item,
  activeSubNav,
  setActiveSubNav,
  isActiveTab,
  wrapperClassName,
  selectedItemClassName,
  spanClassName,
  linkClassName
}: {
  item: NavItemProps<string>,
  activeSubNav?: any,
  setActiveSubNav?: any,
  isActiveTab?: boolean,
  wrapperClassName?: string,
  selectedItemClassName?: string,
  spanClassName?: string,
  linkClassName?: string,
}) => {
  const handleSubNavExpand = (item: NavItemProps<string>) => {
    if (activeSubNav.expanded) {
      const currentItemOrSubNavItemIsOpen: boolean =
        // either the parent item is expanded already
        item.path === activeSubNav.selectedId ||
        // or one of its expandable children is selected
        (item.subNav &&
          item.subNav.some(
            (_subNavItem) => _subNavItem.path === activeSubNav.selectedId
          )) ||
        false

      setActiveSubNav({
        // disable expansion value, if not expandable
        expanded: item.subNav && item.subNav.length > 0 ? !currentItemOrSubNavItemIsOpen : false,
        selectedId: item.path
      })
    } else {
      setActiveSubNav({
        expanded: !!(item.subNav && item.subNav.length > 0), // expand if expandable
        selectedId: item.path
      })
    }
  }

  return (
    <li className={wrapperClassName} key={item.path}>
      <div
        onClick={(): void => { handleSubNavExpand(item) }}
        className={selectedItemClassName}
      >

      <span className={spanClassName}>
        <a href={item.path} className={linkClassName}>
          {item.title}
        </a>
      </span>

      {item.subNav && item.subNav.length > 0 && (isActiveTab ? <ChevronUpIcon /> : <ChevronDownIcon />)}
      </div>
    </li>
  )
}

export default NavItem;