export interface IMyPageUI {
  activeMenu: string;
  onClickSidebarMenu: (menuName: any) => () => void;
  sidebarMenus: {
    name: string;
  }[];
  onClickUseditem: (id: any) => () => void;
}
