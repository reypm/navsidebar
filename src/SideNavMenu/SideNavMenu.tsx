import React, {useState} from 'react';
import {NavItemProps} from "./SideNavMenu.model";
import NavItem from "./NavItem/NavItem";

const SideNavMenu = ({
  items,
  activeItem
}: {
  items: NavItemProps<string>[]
  activeItem: string
}) => {
  const [activeSubNav, setActiveSubNav] = useState({
    expanded: true,
    selectedId: activeItem,
  });

  // Listen for parent prop changes and update state
  React.useEffect(() => {
    setActiveSubNav((originalSubNav) => ({
      expanded: originalSubNav.expanded,
      selectedId: activeItem,
    }));
  }, [activeItem]);

  return (
    <>
      {items.length > 0 && (
        <nav
          role="navigation"
          aria-label="side-navigation"
          className="side-navigation-panel"
        >
          {items.map((item: NavItemProps<string>) => {
            const isItemSelected: boolean = item.path === activeSubNav.selectedId;
            const isActiveTab: boolean =
              // item is expanded and
              activeSubNav.expanded &&
              // either the current expandable section is selected
              (isItemSelected ||
                // or some item in the expandable section of the current item is selected or active
                (item.subNav &&
                  item.subNav.some(
                    (_subNavItem: NavItemProps<string>) =>
                      _subNavItem.path === activeSubNav.selectedId
                  )) ||
                false);

            return (
              <ul key={item.path} className="side-navigation-panel-select">
                <NavItem
                  item={item}
                  activeSubNav={activeSubNav}
                  setActiveSubNav={setActiveSubNav}
                  isItemSelected={isItemSelected}
                  isActiveTab={isActiveTab}
                />

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
              <a href={subNavItem.path} className="side-navigation-panel-select-option-text">
                {subNavItem.title}
              </a>
              </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </ul>
              )
          })}
        </nav>
      )}
    </>
  );
};

export default SideNavMenu;