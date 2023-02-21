import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 60%;
  margin: 50px auto;
`;

// 메뉴바
export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// 검색바
export const SearchBox = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  width: 400px;
  height: 35px;
  border-radius: 10px;
  margin-right: 20px;
  @media ${breakPoints.tablet} {
    width: 260px;
  }

  @media ${breakPoints.mobile} {
    width: 180px;
  }
`;

export const SearchImg = styled.img`
  margin-left: 10px;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  margin-right: 20px;
  background-color: #f2f2f2;
  border: 0px;
  width: 370px;
  height: 35px;
  :focus {
    outline: none;
  }
`;

// 새 글 버튼
export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #bdbdbd;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0px 7px;
  cursor: pointer;
  :hover {
    background-color: #ff9f9e;
    transition: all ease 0.3s;
    border: none;
    color: white;
  }

  @media ${breakPoints.tablet} {
    width: 70px;
    font-size: 13px;
    padding: 0px 2px;
  }

  @media ${breakPoints.mobile} {
    width: 65px;
    font-size: 11px;
    padding: 0px 2px;
  }
`;

// 연필이미지
export const Image = styled.img`
  width: 20px;
`;

// 리스트
export const TableTop = styled.div`
  border-top: 2px solid gray;
  margin-top: 20px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-around;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;
`;

export const RowTitle = styled.div`
  width: 50%;
  text-align: center;
`;

export const ColumnBasic1 = styled.div`
  width: 10%;
  text-align: center;
`;
export const ColumnBasic2 = styled.div`
  width: 25%;
  text-align: center;
`;
export const ColumnBasic3 = styled.div`
  width: 25%;
  text-align: center;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  text-align: center;
  cursor: pointer;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-around;
  height: 52px;
  line-height: 52px;
  border-bottom: 1px solid gray;

  :hover {
    color: #ff5554;
    transform: scale(1.005);
    transition: all ease 0.2s;
  }
`;

export const TableBottom = styled.div`
  border-bottom: 2px solid gray;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 50px;
`;

export const TextToken = styled.span``;
