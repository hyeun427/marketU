import MyPageUI from "./MyPage.presenter";

import { useRouter } from "next/router";
import { SIDEBAR_MENUS } from "./sidebar/menu";
import { useState } from "react";

export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState(SIDEBAR_MENUS[0].name);
  const router = useRouter();

  const onClickSidebarMenu = (menuName: string) => () => {
    setActiveMenu(menuName);
  };

  const onClickUseditem = (id: string) => () => {
    router.push(`/products/${id}`);
  };

  return (
    <MyPageUI
      activeMenu={activeMenu}
      onClickSidebarMenu={onClickSidebarMenu}
      sidebarMenus={SIDEBAR_MENUS}
      onClickUseditem={onClickUseditem}
    />
  );
}
