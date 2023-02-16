import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

// 브라우저 전체
export const Wrapper = styled.div`
  width: 100%;
`;

// 리스트 전체
export const ProductListWrapper = styled.div`
  width: 70%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
`;

// 리스트 헤더 부분
export const ListMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0px 20px;
`;

export const MoveToNewItem = styled.button`
  width: 80px;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  border: 1px solid #bdbdbd;
  background-color: white;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: #ffc6ce;
    border: 1px solid #ffc6ce;
    transition: all ease 0.5s;
  }
  @media ${breakPoints.tablet} {
    width: 75px;
    font-size: 14px;
  }

  @media ${breakPoints.mobile} {
    width: 65px;
    font-size: 13px;
  }
`;

// 검색바 관련
export const SearchBox = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  width: 400px;
  height: 40px;
  border-radius: 10px;
  @media ${breakPoints.tablet} {
    width: 285px;
  }
  @media ${breakPoints.mobile} {
    width: 220px;
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
  font-size: 15px;
  :focus {
    outline: none;
  }
  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;

// 상품 리스트
export const ItemListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ItemWrapper = styled.div`
  width: 22%;
  height: 270px;
  margin-bottom: 20px;
  border: 1px solid black;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    width: 30%;
    height: 260px;
  }
  @media ${breakPoints.mobile} {
    width: 45%;
    height: 250px;
  }
`;

// 이미지
export const ImgWrapper = styled.div`
  width: 100%;
  height: 170px;
`;

export const ItemPicture = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
  /* object-fit: contain; */
`;

// 디테일
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  height: 100px;
  @media ${breakPoints.tablet} {
    height: 90px;
  }
  @media ${breakPoints.mobile} {
    height: 80px;
  }
`;

export const ItemDetailName = styled.div`
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px 0px;
  border-bottom: 1px solid #c4c4c4;
`;

export const ItemDetailRemarks = styled.div`
  padding: 5px 0px;
  font-size: 13px;
  color: gray;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

// export const ItemDetailPickedIcon = styled.img`
//   width: 20px;
//   height: 20px;
//   margin-right: 10px;
// `;

export const ItemPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  font-size: 16px;
  font-weight: 600;
  @media ${breakPoints.tablet} {
    font-size: 15px;
  }
  @media ${breakPoints.mobile} {
    font-size: 13px;
  }
`;
