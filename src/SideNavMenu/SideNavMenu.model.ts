export interface NavItemProps<T> {
  title: string;
  path: string;
  metaData?: NavMetadata
  subNav?: NavItemProps<T>[];
}
export interface NavMetadata {
  level: string,
  fileType: string,
  displayOnOverview: string
}