export const buildNestedStructure = (data: any) => {
	const topLevelItems = [];
	const itemMap: { [index: number]: any } = {};
	let loopCount = 1;
	let innerLoopCount = 1;

	for (const item of data) {
		const { title, path, metaData } = item;
		const newItem = {
			id: loopCount.toString(),
			title: title.replace(/-/g, ' '),
			path,
			metaData,
			subNav: [],
		};

		const metaDataLevel = +metaData.level;

		if (metaDataLevel === 1) {
			topLevelItems.push(newItem);
			loopCount++;
		} else {
			const parentLevel = metaDataLevel - 1;
			const parentItem = itemMap[parentLevel];

			newItem.id = metaDataLevel + '-' + parentLevel + '-' + innerLoopCount;

			parentItem.subNav.push(newItem);
			innerLoopCount++;
		}

		itemMap[metaDataLevel] = newItem;
	}

	return topLevelItems;
};
