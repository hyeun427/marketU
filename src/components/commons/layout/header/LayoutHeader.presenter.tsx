import SideMenu from "../side";
import {
  Logo,
  Header,
  LogoTitle,
  LogoImg,
  Menu,
  Menu1,
  User,
  Detail,
  Button,
  Count,
  Icon,
  DetailIcon,
  MediaSide,
} from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <>
      <Header>
        {props.accessToken ? (
          <>
            <Menu>
              <Logo onClick={props.onClickLogo}>
                <LogoTitle>마켓 U</LogoTitle>
                <LogoImg src="/img/logo/ponyo.png" />
              </Logo>
              <Menu1 onClick={props.onClickLogo}>메인</Menu1>
              <Menu1 onClick={props.onClickMoveToMarket}>마켓</Menu1>
              <Menu1 onClick={props.onClickMoveToBoardList}>커뮤니티</Menu1>
              <Menu1 onClick={props.onClickMypage}>마이페이지</Menu1>
            </Menu>

            <Detail>
              <User>{props.userData?.fetchUserLoggedIn.name}님 환영합니다</User>
              <Icon src="/img/icon/cash.png" alt="보유캐쉬" />
              <User>
                {props.userData?.fetchUserLoggedIn.userPoint?.amount}P
              </User>
              <Icon src="/img/icon/shopping_cart.png" alt="찜한갯수" />
              <Count onClick={props.onClickMypage}>
                {props.dataItemsCountIPicked?.fetchUseditemsCountIPicked}
              </Count>

              <Button onClick={props.onClickLogout}>로그아웃</Button>
            </Detail>
          </>
        ) : (
          <>
            <Menu>
              <Logo onClick={props.onClickLogo}>
                <LogoTitle>마켓 U</LogoTitle>
                <LogoImg src="/img/logo/ponyo.png" />
              </Logo>
              <Menu1 onClick={props.onClickLogo}>메인</Menu1>
              <Menu1 onClick={props.onClickMoveToMarket}>마켓</Menu1>
              <Menu1 onClick={props.onClickMoveToBoardList}>커뮤니티</Menu1>
            </Menu>

            <Detail>
              <Button onClick={props.onClickLogin}>로그인</Button>
              <Button onClick={props.onClickSignin}>회원가입</Button>
            </Detail>
          </>
        )}
      </Header>
      <MediaSide>
        <SideMenu />
      </MediaSide>
    </>
  );
}
