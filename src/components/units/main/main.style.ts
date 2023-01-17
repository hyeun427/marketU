import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin-left: 20px;

  background-color: palegoldenrod;
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

export const Dropdown = styled(MenuIcon)`
  width: 70px;
  height: 35px;
  margin-top: 7px;
  cursor: pointer;
`;

export const Banner = styled.div`
  height: 800px;

  text-align: center;
  /* 삭제 할 것 */
  background-color: #d9d9d9;
`;

export const Main = styled.div`
  margin: 0px 160px;
`;

export const BestWrapper = styled.div`
  width: 380px;
`;

export const BestTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  /* 삭제 할 것 */
  border: 1px solid red;
`;
export const Title = styled.div``;
export const All = styled.div``;

export const BestContents = styled.div`
  width: 380px;
  height: auto;
  padding: 28px 26px;
`;
export const BestContentsImg = styled.div``;

export const WrapperBestContentsSummary = styled.div``;

export const BestContentsTitle = styled.div``;

export const WrapperFlexRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  /* 삭제 할 것 */
  border: 1px solid red;
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 200px;

  /* 삭제 할 것 */
  background-color: lightblue;
`;

export const UserImg = styled.img`
  width: 30%;
  margin-right: 10px;
`;

export const User = styled.div``;

export const PickWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  /* 삭제 할 것 */
  background-color: lightgreen;
`;

export const PickImg = styled(FavoriteBorderOutlinedIcon)`
  margin-right: 10px;
`;

export const PickCount = styled.div``;

export const Price = styled.div``;
