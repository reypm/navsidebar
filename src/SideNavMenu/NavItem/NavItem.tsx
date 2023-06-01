import React from 'react'
import {NavItemProps} from "../SideNavMenu.model";
import {ChevronDownIcon, ChevronUpIcon} from "../Icon";

const NavItem = ({
  item,
  activeSubNav,
  setActiveSubNav,
  isItemSelected,
  isActiveTab
}: {
  item: NavItemProps<string>,
  activeSubNav: any,
  setActiveSubNav: any,
  isItemSelected: boolean,
  isActiveTab: boolean
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
        expanded:
          item.subNav && item.subNav.length > 0
            ? !currentItemOrSubNavItemIsOpen
            : false, // disable expansion value, if not expandable
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
    <li className="side-navigation-panel-select-wrap">
      <div
        onClick={(): void => {
          handleSubNavExpand(item);
        }}
        className={`side-navigation-panel-select-option ${
          isItemSelected
            ? 'side-navigation-panel-select-option-selected'
            : ''
        }`}
      >
      <span className="side-navigation-panel-select-option-wrap">
        <a href={item.path} className="side-navigation-panel-select-option-text">
          {item.title}
        </a>
      </span>

      {item.subNav && item.subNav.length > 0 && (isActiveTab ? <ChevronUpIcon /> : <ChevronDownIcon />)}
      </div>
    </li>
  )
}

export default NavItem;