import * as DS from "./BoardDetail.style";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardDetailUIProps } from "./BoardDetail.types";
import { Tooltip } from "antd";
import ReactPlayer from "react-player";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    // <DS.OutWrapper>
    <DS.Wrapper>
      <DS.BoardWrapper>
        <DS.ProfileWrapper>
          <DS.Profile>
            <DS.Photo src="/img/icon/smile.png" />
            <DS.ProfileDetail>
              <DS.Writer>{props.data?.fetchBoard?.writer}</DS.Writer>
              <DS.Date>{getDate(props.data?.fetchBoard?.createdAt)}</DS.Date>
            </DS.ProfileDetail>
          </DS.Profile>

          <DS.IconWrapper>
            <Tooltip
              overlayInnerStyle={{
                borderRadius: "5px",
                textAlign: "center",
              }}
              placement="top"
              title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.addressDetail}`}
            >
              <DS.Spot src="/img/icon/spot.png" />
            </Tooltip>
          </DS.IconWrapper>
        </DS.ProfileWrapper>

        <DS.ContentWrapper>
          <DS.Title>{props.data?.fetchBoard.title}</DS.Title>
          <DS.Content>{props.data?.fetchBoard.contents}</DS.Content>

          {/* 이미지 */}
          {props.data?.fetchBoard?.images ? (
            <DS.Images>
              {props.data?.fetchBoard.images
                ?.filter((el: string) => el)
                .map((el: string, index: number) => (
                  <DS.Img
                    key={index}
                    src={`https://storage.googleapis.com/${el}`}
                  />
                ))}
            </DS.Images>
          ) : (
            <DS.Images>
              <DS.Img src="/img/icon/noImage.png" />
            </DS.Images>
          )}
          {/* 유튜브 영상 출력 */}
          <DS.Youtube>
            {props.data?.fetchBoard.youtubeUrl && (
              <ReactPlayer url={String(props.data?.fetchBoard.youtubeUrl)} />
            )}
          </DS.Youtube>

          <DS.LikeWrapper>
            {/* 좋아요,싫어요 구현 */}
            <DS.IconWrapper>
              <DS.LikeIcon onClick={props.onClickLike} />
              <DS.Count>{props.data?.fetchBoard.likeCount}</DS.Count>
            </DS.IconWrapper>
            <DS.IconWrapper>
              <DS.DislikeIcon onClick={props.onClickDislike} />
              <DS.Count>{props.data?.fetchBoard.dislikeCount}</DS.Count>
            </DS.IconWrapper>
          </DS.LikeWrapper>
        </DS.ContentWrapper>
      </DS.BoardWrapper>

      {props.data2?.fetchUserLoggedIn?.name ===
        props.data?.fetchBoard?.writer && (
        <DS.ButtonWrapper>
          <DS.Button onClick={props.onClickMoveToBoardList}>목록으로</DS.Button>
          <DS.Button onClick={props.onClickMoveToBoardEdit}>수정하기</DS.Button>
          <DS.Button onClick={props.onClickDeleteBoard}>삭제하기</DS.Button>
        </DS.ButtonWrapper>
      )}

      {props.data2?.fetchUserLoggedIn?.name !==
        props.data?.fetchBoard?.writer && (
        <DS.ButtonWrapper>
          <DS.Button onClick={props.onClickMoveToBoardList}>목록으로</DS.Button>
        </DS.ButtonWrapper>
      )}
    </DS.Wrapper>
    // </DS.OutWrapper>
  );
}
