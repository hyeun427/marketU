import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState, useRecoilValue } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import { IQuery } from "../../../../commons/types/generated/types";
import {
  FETCH_USEDITEMS_COUNT_I_PICKED,
  FETCH_USER_LOGGED_IN,
  LOGOUT_USER,
} from "../header/LayoutHeader.queries";
import {
  Logo,
  LogoTitle,
  LogoImg,
  Menu,
  Menu1,
  Menu2,
  Menu3,
  User,
  Detail,
  Button1,
  Count,
  Icon,
} from "./styles";

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [logoutUser] = useMutation(LOGOUT_USER);
  const { data: dataItemsCountIPicked } = useQuery<
    Pick<IQuery, "fetchUseditemsCountIPicked">
  >(FETCH_USEDITEMS_COUNT_I_PICKED);
  const { data: userData } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogin = () => {
    router.push("/logIn");
  };

  const onClickLogout = () => {
    try {
      logoutUser();
      setUserInfo({
        email: "",
        name: "",
      });
      alert("로그아웃 하였습니다.");
      location.reload();
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  const onClickSignin = () => {
    router.push("/signIn");
  };

  const onClickMypage = () => {
    router.push("/mypage");
  };

  const onClickLogo = () => {
    router.push("/");
  };

  const onClickMoveToBoardList = () => {
    router.push("/boards");
  };

  const onClickMoveToMarket = () => {
    router.push("/products");
  };

  return (
    <>
      <Menu>
        <Logo onClick={onClickLogo}>
          <LogoTitle>마켓 U</LogoTitle>
          <LogoImg src="/img/logo/ponyo.png" />
        </Logo>
      </Menu>

      <Button
        type="primary"
        onClick={showDrawer}
        style={{ backgroundColor: "white", boxShadow: "none" }}
      >
        <img src="/img/icon/hamburger.png" style={{ width: "32px" }} />
      </Button>

      <Drawer
        title="환영합니다✨"
        placement="right"
        onClose={onClose}
        open={open}
        width={320}
      >
        {accessToken ? (
          <>
            <Menu3>
              <User>{userData?.fetchUserLoggedIn.name}님 환영합니다</User>
              <Menu2>
                <Icon src="/img/icon/cash.png" alt="보유캐쉬" />
                <User>{userData?.fetchUserLoggedIn.userPoint?.amount}P</User>
              </Menu2>
              <Menu2>
                <Icon src="/img/icon/shopping_cart.png" alt="찜한갯수" />
                <Count onClick={onClickMypage}>
                  {dataItemsCountIPicked?.fetchUseditemsCountIPicked}
                </Count>
              </Menu2>
            </Menu3>

            <Menu>
              <Menu1 onClick={onClickLogo}>메인</Menu1>
            </Menu>
            <Menu>
              <Menu1 onClick={onClickMoveToMarket}>마켓</Menu1>
            </Menu>
            <Menu>
              <Menu1 onClick={onClickMoveToBoardList}>커뮤니티</Menu1>
            </Menu>
            <Menu>
              <Menu1 onClick={onClickMypage}>마이페이지</Menu1>
            </Menu>

            <Detail>
              <Button1 onClick={onClickLogout}>로그아웃</Button1>
            </Detail>
          </>
        ) : (
          <>
            <Menu>
              <Menu1 onClick={onClickLogo}>메인</Menu1>
            </Menu>
            <Menu>
              <Menu1 onClick={onClickMoveToMarket}>마켓</Menu1>
            </Menu>
            <Menu>
              <Menu1 onClick={onClickMoveToBoardList}>커뮤니티</Menu1>
            </Menu>
            <Menu>
              <Menu1 onClick={onClickMypage}>마이페이지</Menu1>
            </Menu>

            <Detail>
              <Button1 onClick={onClickLogin}>로그인</Button1>
              <Button1 onClick={onClickSignin}>회원가입</Button1>
            </Detail>
          </>
        )}
      </Drawer>
    </>
  );
};

export default SideMenu;
