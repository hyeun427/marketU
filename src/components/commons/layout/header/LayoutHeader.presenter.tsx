import {
  Logo,
  Header,
  LogoTitle,
  LogoImg,
  Menu,
  Menu1,
  DropdownImg,
} from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  const items: MenuProps["items"] = [
    {
      label: <a href="/logIn">로그인</a>,
      key: "0",
    },
    {
      label: <a href="/signIn">회원가입</a>,
      key: "1",
    },
  ];

  return (
    <Header>
      <Menu>
        <Logo onClick={props.onClickLogo}>
          <LogoTitle>마켓 U</LogoTitle>
          <LogoImg src="ponyo.png" />
        </Logo>
        <Menu1 onClick={props.onClickLogo}>메인</Menu1>
        <Menu1 onClick={props.onClickMoveToMarket}>마켓</Menu1>
        <Menu1 onClick={props.onClickMoveToBoardList}>커뮤니티</Menu1>
      </Menu>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <DropdownImg />
        </a>
      </Dropdown>
    </Header>
  );
}
