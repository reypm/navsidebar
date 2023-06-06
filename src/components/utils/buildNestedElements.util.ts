export const buildNestedStructure = (data: any) => {
	const topLevelItems = [];
	const itemMap: { [index: number]: any } = {};

	for (const item of data) {
		const { title, path, metaData } = item;
		const newItem = {
			id: '',
			title: title.replace(/-/g, ' '),
			path,
			metaData,
			subNav: [],
		};

		const metaDataLevel = +metaData.level;

		if (metaDataLevel === 1) {
			newItem.id = topLevelItems.length.toString();
			topLevelItems.push(newItem);
		} else {
			const parentLevel = metaDataLevel - 1;
			const parentItem = itemMap[parentLevel];

			if (parentItem.subNav.length === 0) {
				const parentCopy = {
					...parentItem,
					id: parentItem.id + '-' + parentItem.subNav.length,
					subNav: [],
					title: 'overview',
				};
				parentItem.subNav.push(parentCopy);
			}

			newItem.id = parentItem.id + '-' + parentItem.subNav.length;
			delete parentItem.path;
			parentItem.subNav.push(newItem);
		}

		itemMap[metaDataLevel] = newItem;
	}

	return topLevelItems;
};
