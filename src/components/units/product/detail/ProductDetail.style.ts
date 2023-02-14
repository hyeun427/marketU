import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const OutWrapper = styled.div`
  width: 70%;
  border: 1px solid black;
  margin: 50px 0px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  border: none;
  box-shadow: 0px 0px 10px gray;
  @media ${breakPoints.tablet} {
    width: 80%;
    margin: 0px auto;
  }

  @media ${breakPoints.mobile} {
    width: 60%;
    margin: 0px auto;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding-bottom: 20px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.img`
  margin-right: 10px;
  width: 45px;
`;

export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Seller = styled.div``;

export const Date = styled.div`
  color: #828282;
`;

export const IconWrapper = styled.div`
  text-align: center;
`;

export const Share = styled.img`
  height: 13px;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const Spot = styled.img`
  width: 25px;
`;

export const Body = styled.div`
  width: 100%;
  min-height: 800px;
  @media ${breakPoints.tablet} {
    width: 80%;
    margin: 0px auto;
  }

  @media ${breakPoints.mobile} {
    width: 60%;
    margin: 0px auto;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const ProductName = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #4f4f4f;
`;

export const PickWrapper = styled.div`
  text-align: center;
`;
export const PickIcon = styled.img`
  width: 90%;
  cursor: pointer;
`;

export const Pick = styled.div``;

export const Price = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`;

// 이미지
export const SliderWrapper = styled.div`
  width: 100%;
  height: 384px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

export const SliderItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: #fff;
`;

export const SliderImg = styled.img`
  width: 60%;
  height: 350px;
  object-fit: contain;
`;

// 내용
export const Contents = styled.p`
  width: 100%;
  height: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 50px;
`;

// 태그
export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  padding-bottom: 50px;
  border-bottom: 1px solid gray;
`;

export const Tag = styled.div`
  margin-right: 20px;
  font-weight: 500;
  font-size: 16px;
  color: #bdbdbd;
`;

// 지도
export const Map = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding: 30px;
  border-bottom: 1px solid gray;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Button = styled.button`
  width: 179px;
  height: 45px;
  background-color: white;
  border: 1px solid gray;
  margin: 0px 12px;
  cursor: pointer;

  :hover {
    background-color: #ffc6ce;
  }
`;
