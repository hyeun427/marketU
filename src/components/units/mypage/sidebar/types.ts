export interface ISidebar {
  activeMenu: string;
  onClickSidebarMenu: (menuName: string) => () => void;
  sidebarMenus: {
    name: string;
  }[];
}
