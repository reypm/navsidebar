import './App.css';
import data from './v1.sidenavdata.json';
import SideNavMenu from "./SideNavMenu/SideNavMenu";
import {buildNestedStructure} from "./build-nested-list/build-nested-elements.util";

function App() {
    const { items, activeItem } = buildNestedStructure(data);

    console.log('items', items)
    console.log('activeItem', activeItem)

    return (
        <SideNavMenu items={items} activeItem={activeItem} />
    );
}

export default App;
