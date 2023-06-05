import React, {useState} from 'react';
import {NavItemProps} from "./SideNavMenu.model";
import NavItem from "./NavItem/NavItem";
import './style.scss';

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

    let mainNav;

    if (items.length > 0) {
        mainNav =
            <nav role="navigation" aria-label="side-navigation" className="side-navigation-panel">
                {items.map((item: NavItemProps<string>) => {
                    const isItemSelected: boolean = item.path === activeSubNav.selectedId;
                    const isActiveTab: boolean = activeSubNav.expanded && (isItemSelected || (item.subNav && item.subNav.some((_subNavItem: NavItemProps<string>) => _subNavItem.path === activeSubNav.selectedId)) || false);

                    let subNav;

                    if (item.subNav && item.subNav.length > 0 && isActiveTab) {
                        subNav =
                            <ul key={item.path} className="side-navigation-panel-select-inner">
                                {item.subNav.map((subNavItem: NavItemProps<string>) => {
                                    return (
                                        <NavItem
                                            item={subNavItem}
                                            activeSubNav={activeSubNav}
                                            setActiveSubNav={setActiveSubNav}
                                            isActiveTab={isActiveTab}
                                            wrapperClassName={'side-navigation-panel-select-inner-wrap'}
                                            selectedItemClassName={`side-navigation-panel-select-inner-option ${activeSubNav.selectedId === subNavItem.path ? 'side-navigation-panel-select-inner-option-selected' : ''}`}
                                            spanClassName={'side-navigation-panel-select-inner-option-wrap'}
                                            linkClassName={'side-navigation-panel-select-option-text'}
                                        />
                                    );
                                })}
                            </ul>
                    }

                    return (
                        <ul key={item.path} className="side-navigation-panel-select">
                            <NavItem
                                item={item}
                                activeSubNav={activeSubNav}
                                setActiveSubNav={setActiveSubNav}
                                isActiveTab={isActiveTab}
                                wrapperClassName={'side-navigation-panel-select-wrap'}
                                selectedItemClassName={`side-navigation-panel-select-option ${isItemSelected ? 'side-navigation-panel-select-option-selected' : ''}`}
                                spanClassName={'side-navigation-panel-select-option-wrap'}
                                linkClassName={'side-navigation-panel-select-option-text'}
                            />
                            {subNav}
                        </ul>
                    )
                })}
            </nav>
    }

    return (
        <>
            {mainNav}
        </>
    );
};

export default SideNavMenu;