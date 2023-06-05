import {NavItemProps} from "../SideNavMenu/SideNavMenu.model";

export const MenuUtils = (item: NavItemProps<string>, activeSubNav: any) => {
  const isItemSelected: boolean = item.path === activeSubNav.selectedId;
  const isActiveTab: boolean = activeSubNav.expanded && (isItemSelected || (item.subNav && item.subNav.some((_subNavItem: NavItemProps<string>) => _subNavItem.path === activeSubNav.selectedId)) || false);

  return {
    isItemSelected,
    isActiveTab
  }
}
