import {
  Logo,
  Header,
  LogoTitle,
  LogoImg,
  Menu,
  Menu1,
  Dropdown,
} from "./LayoutHeader.styles";
import { ILayoutHeaderProps } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderProps) {
  return (
    <Header>
      <Menu>
        <Logo onClick={props.onClickLogo}>
          <LogoTitle>마켓 U</LogoTitle>
          <LogoImg src="ponyo.png" />
        </Logo>
        <Menu1 onClick={props.onClickLogo}>메인</Menu1>
        <Menu1>마켓</Menu1>
        <Menu1 onClick={props.onClickMoveToBoardList}>커뮤니티</Menu1>
      </Menu>
      <Dropdown />
    </Header>
  );
}
