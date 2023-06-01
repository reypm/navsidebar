import React = require('react');
import './sidebar.scss';
import NavItem from "./sidebar/navItem/NavItem";
import data from './v1.sidenavdata.json'

const Sidebar = props => {
    const buildNestedStructure = () => {
        const topLevelItems = [];
        const itemMap = {};

        for (const item of data) {
            const {title, path, metaData} = item;
            const newItem = {title: title.replace(/-/g, " "), path, metaData , subNav: []};

            if (metaData.level === "1") {
                topLevelItems.push(newItem);
            } else {
                const parentLevel = metaData.level - 1;
                const parentItem = itemMap[parentLevel];

                if (parentItem !== undefined) {
                    if (parentItem.subNav === undefined) {
                        parentItem.subNav = [];
                    }
                }

                parentItem.subNav.push(newItem);
            }

            itemMap[metaData.level] = newItem;
        }

        return topLevelItems;
    }

    return (
        <nav className="sidebar">
            {buildNestedStructure().map((item, index) => {
                return <NavItem key={`${item.label}-${index}`} item={item} />;
            })}
        </nav>
    );
};

export default Sidebar;