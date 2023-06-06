export const buildNestedStructure = (data: any) => {
	const topLevelItems = [];
	const itemMap: { [index: number]: any } = {};
	let loopCount = 1;

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

			if (loopCount === 1) {
				newItem.id = parentItem.id + '-' + parentItem.subNav.length + 1;
				parentItem.subNav.push(newItem);
				loopCount++;
			}

			newItem.id = parentItem.id + '-' + parentItem.subNav.length;
			parentItem.subNav.push(newItem);
		}

		itemMap[metaDataLevel] = newItem;
	}

	console.log(topLevelItems);

	return {
		items: topLevelItems,
		activeItem: topLevelItems[0]['path'],
	};
};
