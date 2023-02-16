import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const OutWrapper = styled.div`
  width: 70%;
  border: 1px solid black;
  margin: 50px 0px;
  padding: 80px;
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

export const Seller = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export const Date = styled.div`
  color: #828282;
  font-size: 14px;
`;

export const PickWrapper = styled.div`
  text-align: center;
`;
export const PickIcon = styled.img`
  width: 90%;
  cursor: pointer;
`;

export const Pick = styled.div``;

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

export const Price = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 53px;
`;

// 이미지
export const ImgWrapper = styled.div`
  width: 100%;
  height: 384px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
`;

export const Img = styled.img`
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
  font-weight: 600;
  font-size: 17px;
  color: #bdbdbd;
`;

// 지도
export const Map = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 80px;
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  font-size: 14px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 15px;
  margin: 0px 12px;
  cursor: pointer;
  :hover {
    background-color: #ff9f9e;
    border: none;
    transition: ease all 0.5s;
    color: #fff;
  }
`;
