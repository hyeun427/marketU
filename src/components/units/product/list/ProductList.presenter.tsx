import * as S from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IProductListUI } from "./ProductList.types";
import { v4 as uuidv4 } from "uuid";
import styled from "@emotion/styled";

export default function ProductListUI(props: IProductListUI) {
  const Infinite = styled(InfiniteScroll)`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  `;

  return (
    <S.Wrapper>
      <S.ProductListWrapper>
        <S.ListMenuWrapper>
          <S.MoveToNewItem onClick={props.onClickNewItem}>
            상품 등록
          </S.MoveToNewItem>
          <S.SearchBox>
            <S.SearchImg src="/img/icon/search.png" width={20} />
            <S.SearchInput
              type="text"
              placeholder="원하시는 상품을 검색해주세요!"
              onChange={props.onChangeSearch}
            />
          </S.SearchBox>
        </S.ListMenuWrapper>
        <S.ItemListWrapper>
          <Infinite
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            {props.data?.fetchUseditems.map((el: any) => (
              <S.ItemWrapper
                key={uuidv4()}
                id={el._id}
                onClick={props.onClickMoveDetail(el._id)}
              >
                <S.ImgWrapper>
                  {el.images[0] ? (
                    <>
                      <S.ItemPicture
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    </>
                  ) : (
                    <S.ItemPicture src="/img/icon/noImage.png" />
                  )}
                </S.ImgWrapper>
                <S.ItemInfo>
                  <S.ItemDetailName>{el.name}</S.ItemDetailName>
                  <S.ItemDetailRemarks>{el.remarks}</S.ItemDetailRemarks>
                  <S.ItemPrice>{`${el.price}원`}</S.ItemPrice>
                </S.ItemInfo>
              </S.ItemWrapper>
            )) || <></>}
          </Infinite>
        </S.ItemListWrapper>
      </S.ProductListWrapper>
    </S.Wrapper>
  );
}
