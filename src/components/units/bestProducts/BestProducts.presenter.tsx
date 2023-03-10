import * as S from "./BestProducts.styles";
import { timeForDay, getPrice } from "../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import { IBestProductsUI } from "./BestProducts.types";
import Button02 from "../../commons/buttons/02";

export default function BestProductsUI(props: IBestProductsUI) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ListTitleContainer>
          <S.ListTitleWrapper>
            <div>
              <div>
                <h2>BEST ITEMS</h2>
                <h1>인기상품</h1>
              </div>
            </div>
            <Button02
              type="button"
              text={"전체보기"}
              onClick={props.onClickAll}
            />
          </S.ListTitleWrapper>
        </S.ListTitleContainer>

        <S.ListItemsWrapper>
          {props.dataUseditemsOfTheBest?.fetchUseditemsOfTheBest.map(
            (el: any) => (
              <S.ItemWrapper
                key={uuidv4()}
                onClick={props.onClickMoveToBestItemDetail(el._id)}
              >
                <S.ImageContainer>
                  <S.ImageWrapper>
                    {(el?.images.filter((e: any) => e !== "")[0] && (
                      <S.Image
                        src={`https://storage.googleapis.com/${
                          el.images.filter((e: any) => e !== "")[0]
                        }`}
                      />
                    )) || (
                      <S.NoImage src="/img/icon/noImage.png" alt="NoImage" />
                    )}
                  </S.ImageWrapper>
                </S.ImageContainer>

                <S.ContentsWrapper>
                  <h1>{el?.name}</h1>
                  <S.ContentsUser>
                    <div>
                      <S.Image1 src="/img/icon/smile.png" alt="" />
                    </div>
                    <div>
                      <span>{el.seller?.name}</span>
                      <span>{timeForDay(el?.createdAt)}</span>
                    </div>
                  </S.ContentsUser>
                  <S.ContentsReact>
                    <div>
                      <S.Image2 src="/img/icon/pick.png" alt="찜" />
                      <span>{el?.pickedCount}</span>
                    </div>
                  </S.ContentsReact>
                  <S.ContentsPrice>
                    <span>
                      <b>{getPrice(el?.price)}</b>
                    </span>
                  </S.ContentsPrice>
                </S.ContentsWrapper>
              </S.ItemWrapper>
            )
          )}
        </S.ListItemsWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
