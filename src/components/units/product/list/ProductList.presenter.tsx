import * as S from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";
import { IProductListUI } from "./ProductList.types";

export default function ProductListUI(props: IProductListUI) {
  return (
    <S.Wrapper>
      <S.ProductListWrapper>
        <S.ListMenuWrapper>
          <S.MoveToNewItem onClick={props.onClickNewItem}>
            상품 등록
          </S.MoveToNewItem>
          <S.SearchWrapper>
            <S.SearchBox>
              <S.SearchImg src="/img/icon/search.png" width={20} />
              <S.SearchInput
                type="text"
                placeholder="원하시는 상품을 검색해주세요!"
                onChange={props.onChangeSearch}
              />
            </S.SearchBox>
          </S.SearchWrapper>
        </S.ListMenuWrapper>
        <div
          style={{
            width: "100%",
            height: "800px",
            overflow: "auto",
            padding: "20px",
          }}
        >
          <InfiniteScroll
            pageStart={0}
            loadMore={props.onLoadMore}
            hasMore={true}
            useWindow={false}
          >
            <S.ItemListWrapper>
              {props.data?.fetchUseditems.map((el: any) => (
                <S.ItemListRow key={el._id}>
                  <S.ItemInfo>
                    {el.images[0] ? (
                      <>
                        <S.ItemPicture
                          src={`https://storage.googleapis.com/${el.images[0]}`}
                        />
                      </>
                    ) : (
                      <S.ItemPicture src="/ProductDetail/no-img.png" />
                    )}
                    <S.ItemListDetail>
                      <S.ItemListDetailName
                        id={el._id}
                        onClick={props.onClickMoveDetail(el)}
                      >
                        {el.name}
                      </S.ItemListDetailName>
                      <S.ItemListDetailRemarks>
                        {el.remarks}
                      </S.ItemListDetailRemarks>
                      <S.ItemListDetailTags>{el.tags}</S.ItemListDetailTags>
                      <S.ItemListDetailBottom>
                        <S.ItemListDetailSellerIcon src="/ProductList/profile.png" />
                        <S.ItemListDetailSeller>
                          {el.seller.name}
                        </S.ItemListDetailSeller>
                        <S.ItemListDetailPickedIcon src="/ProductList/pick.png" />
                        <S.ItemListDetailPickedCount>
                          {el.pickedCount}
                        </S.ItemListDetailPickedCount>
                      </S.ItemListDetailBottom>
                    </S.ItemListDetail>
                  </S.ItemInfo>
                  <S.ItemListPrice>
                    <S.WonIcon src="/ProductList/won.png" />
                    {`${el.price}원`}
                  </S.ItemListPrice>
                </S.ItemListRow>
              ))}
            </S.ItemListWrapper>
          </InfiniteScroll>
        </div>
      </S.ProductListWrapper>
      <S.TodayListWrapper></S.TodayListWrapper>
    </S.Wrapper>
  );
}
