import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 50px;
  padding-left: 20px;
  border-bottom: 1px solid #c4c4c4;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  cursor: pointer;
`;

export const LogoTitle = styled.div`
  margin: auto;
  font-size: large;
  font-weight: bold;
`;

export const LogoImg = styled.img`
  height: 80px;
  object-position: -15px -23px;
`;

export const Menu1 = styled.div`
  margin: auto;
  text-align: center;
  width: 100px;
  font-size: large;
  font-weight: bold;
  color: #828282;
  cursor: pointer;
`;

export const DropdownImg = styled(MenuIcon)`
  width: 70px;
  height: 35px;
  margin-top: 7px;
  cursor: pointer;
`;
