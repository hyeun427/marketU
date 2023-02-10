import { useAuth } from "../../commons/hooks/useAuth";
import * as S from "./MyPage.styles";
import { IMyPageUI } from "./MyPage.types";
import MypagePoint from "./point/MypagePoint.container";
import Sidebar from "./sidebar";
import UseditemsIBought from "./useditemsIBought";
import UseditemsIPicked from "./useditemsIPicked";
import UseditemsISold from "./useditemsISold";

export default function MyPageUI(props: IMyPageUI) {
  useAuth();
  return (
    <S.Container>
      <S.Wrapper>
        <MypagePoint />
        <S.InnerWrapper>
          <Sidebar
            activeMenu={props.activeMenu}
            onClickSidebarMenu={props.onClickSidebarMenu}
            sidebarMenus={props.sidebarMenus}
          />
          <S.Contents>
            {props.activeMenu === "찜한 상품" && (
              <UseditemsIPicked onClickUseditem={props.onClickUseditem} />
            )}
            {props.activeMenu === "구매한 상품" && (
              <UseditemsIBought onClickUseditem={props.onClickUseditem} />
            )}
            {props.activeMenu === "판매한 상품" && (
              <UseditemsISold onClickUseditem={props.onClickUseditem} />
            )}
          </S.Contents>
        </S.InnerWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
