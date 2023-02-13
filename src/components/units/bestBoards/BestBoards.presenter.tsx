import * as S from "./BestBoards.styles";
import { timeForDay } from "../../../commons/libraries/utils";
import { v4 as uuidv4 } from "uuid";
import { IBestBoardsUIProps } from "./BestBoards.types";
import button02 from "../../commons/buttons/02";

export default function BestBoardsUI(props: IBestBoardsUIProps) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.ListTitleContainer>
          <S.ListTitleWrapper>
            <div>
              <div>
                <h2>BEST BOARDS</h2>
                <h1>인기게시글</h1>
              </div>
            </div>
            <button02
              type="button"
              text={"전체보기"}
              onClick={props.onClickAll}
            />
          </S.ListTitleWrapper>
        </S.ListTitleContainer>

        <S.ListItemsWrapper>
          {props.dataBoardsOfTheBest?.fetchBoardsOfTheBest.map((el: any) => (
            <S.ItemWrapper
              key={uuidv4()}
              onClick={props.onClickMoveToBestBoardDetail(el._id)}
            >
              <S.ImageContainer>
                <S.ImageWrapper>
                  {(el?.images.filter((e: any) => e !== "")[0] && (
                    <img
                      src={`https://storage.googleapis.com/${
                        el.images.filter((e: any) => e !== "")[0]
                      }`}
                    />
                  )) || <S.NoImage src="/img/icon/noImage.png" alt="NoImage" />}
                </S.ImageWrapper>
              </S.ImageContainer>
              <S.ContentsWrapper>
                <h1>{el.title}</h1>
                <S.ContentsUser>
                  <div>
                    <img
                      src="/img/icon/smile.png"
                      alt=""
                      width="40"
                      height="40"
                    />
                  </div>
                  <div>
                    <span>{el.writer}</span>
                    <span>{timeForDay(el?.createdAt)}</span>
                  </div>
                </S.ContentsUser>
                <S.ContentsReact>
                  <div>
                    <img src="/img/icon/icon_like_01.svg" alt="좋아요" />
                    <span>{el.likeCount}</span>
                  </div>
                  <div>
                    <img src="/img/icon/icon_like_01.svg" alt="싫어요" />
                    <span>{el.dislikeCount}</span>
                  </div>
                </S.ContentsReact>
              </S.ContentsWrapper>
            </S.ItemWrapper>
          ))}
        </S.ListItemsWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
