export interface NavItemProps<T> {
	id: string;
	title: string;
	path: string;
	metaData?: NavMetadata;
	subNav?: NavItemProps<T>[];
}

export interface NavMetadata {
	level: string;
	fileType: string;
	displayOnOverview: string;
}
