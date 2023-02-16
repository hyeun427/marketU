import styled from "@emotion/styled";
import { LikeOutlined, DislikeOutlined } from "@ant-design/icons";
import { breakPoints } from "../../../../commons/styles/media";

export const OutWrapper = styled.div`
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 60%;
  margin: 50px auto;
`;

export const BoardWrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0px 0px 10px gray;
`;

// 작성자 관련 내용
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

export const Writer = styled.div``;

export const Date = styled.div`
  color: #828282;
`;

export const IconWrapper = styled.div`
  text-align: center;
  padding: 5px 0px;
`;

export const Spot = styled.img`
  width: 25px;
`;

// 내용 관련 부분
export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const Content = styled.div`
  padding: 20px 0px;
`;

export const Youtube = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LikeWrapper = styled.div`
  padding-top: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LikeIcon = styled(LikeOutlined)`
  font-size: 24px;
  color: #ff5554;

  margin: 0px 10px 5px;
  cursor: pointer;
`;
export const DislikeIcon = styled(DislikeOutlined)`
  font-size: 24px;
  color: #828282;
  margin: 0px 10px 5px;
  cursor: pointer;
`;
export const LikeCount = styled.div`
  color: #828282;
`;
export const DislikeCount = styled.div`
  color: #828282;
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

// 이미지
export const Images = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 60%;
  object-fit: contain;
  margin-bottom: 10px;
`;
