import './App.css';
import data from './v1.sidenavdata.json';
import SideNavMenu from './SideNavMenu/SideNavMenu.tsx';
import {buildNestedStructure} from "./utils/buildNestedElements.util";

function App() {
    const { items, activeItem } = buildNestedStructure(data);

    return (
        <SideNavMenu items={items} activeItem={activeItem} />
    );
}

export default App;
