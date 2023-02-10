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
  SignUpButton,
} from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import { gql, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const [isToken] = useRecoilState(accessTokenState);

  return (
    <Header>
      {isToken ? (
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
            <User>{data?.fetchUserLoggedIn.name}님 환영합니다</User>
            <User>{data?.fetchUserLoggedIn.userPoint?.amount}P</User>
            <Button>장바구니</Button>

            <SignUpButton onClick={props.onClickLogout}>로그아웃</SignUpButton>
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
  );
}
