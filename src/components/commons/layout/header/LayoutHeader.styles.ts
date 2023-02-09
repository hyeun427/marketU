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
  :hover {
    border-bottom: #ffc6ce 3px solid;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
`;

export const User = styled.div`
  margin-right: 5px;
`;

export const SignUpButton = styled.button`
  padding-right: 10px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  :hover {
    color: #ff007f;
    font-weight: 500;
  }
`;

export const Button = styled.button`
  margin: 5px;
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  :hover {
    color: #ff007f;
    font-weight: 500;
  }
`;
