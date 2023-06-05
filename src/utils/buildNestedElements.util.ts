export const buildNestedStructure = (data: any) => {
  const topLevelItems = [];
  const itemMap: {[index: number]: any} = {};

  for (const item of data) {
    const {title, path, metaData} = item;
    const newItem = {
      title: title.replace(/-/g, " "),
      path,
      metaData ,
      subNav: []
    };

    const metaDataLevel = +metaData.level;

    if (metaDataLevel === 1) {
      topLevelItems.push(newItem);
    } else {
      const parentLevel = metaDataLevel - 1;
      const parentItem = itemMap[parentLevel];

      parentItem.subNav.push(newItem);
    }

    itemMap[metaDataLevel] = newItem;
  }

  return {
    items: topLevelItems,
    activeItem: topLevelItems[0]['path']
  };
}
