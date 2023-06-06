export const MenuUtils = (item: any, activeSubNav: any) => {
    const isItemSelected: boolean = item.path === activeSubNav.selectedId;
    const isActiveTab: boolean = activeSubNav.expanded && (isItemSelected || (item.subNav && item.subNav.some((_subNavItem: any) => _subNavItem.path === activeSubNav.selectedId)) || false);

    return {
        isItemSelected,
        isActiveTab
    }
}
