import React from 'react'
import {NavItemProps} from "../SideNavMenu.model";

const SubNavItem = ({
  item,
  activeSubNav,
  setActiveSubNav,
  isActiveTab
}: {
  item: NavItemProps<string>,
  activeSubNav: any,
  setActiveSubNav: any,
  isActiveTab: boolean
}) => {
  return (
    {item.subNav && item.subNav.length > 0 && isActiveTab && (
      <ul className="side-navigation-panel-select-inner">
        {item.subNav.map((subNavItem: NavItemProps<string>) => {
          return (
          <li
            key={subNavItem.path}
            className="side-navigation-panel-select-inner-wrap"
          >
            <div
              onClick={(): void => {
                setActiveSubNav({
                  ...activeSubNav,
                  selectedId: subNavItem.path,
                });
              }}
              className={`side-navigation-panel-select-inner-option ${
                activeSubNav.selectedId === subNavItem.path
                  ? 'side-navigation-panel-select-inner-option-selected'
                  : ''
              } `}
            >
              <span className="side-navigation-panel-select-inner-option-wrap">
                <USBLink
                  linkType="basic"
                  addClasses="side-navigation-panel-select-option-text"
                  href={subNavItem.path}
                >
                {subNavItem.title}
              </USBLink>
              </span>
            </div>
          </li>
          );
        })}
      </ul>
    )}
)
};

export default SubNavItem