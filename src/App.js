import './App.css';

function App() {
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

    const output = buildNestedStructure();

    console.log('output', output)

    return (
        <></>
    );
}

export default App;
