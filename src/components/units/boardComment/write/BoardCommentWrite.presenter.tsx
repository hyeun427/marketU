import * as S from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <S.Wrapper>
      {!props.isEdit && (
        <>
          <S.PencilIcon src="/img/icon/pencil.png" width={"20"} />
          <span>댓글</span>
        </>
      )}
      <S.InputWrapper>
        <S.Input
          placeholder="작성자"
          onChange={props.onChangeWriter}
          readOnly={!!props.el?.writer}
          defaultValue={props.el?.writer || ""}
        />
        <S.Input
          placeholder="비밀번호"
          type="password"
          onChange={props.onChangePassword}
        />
        <S.Star onChange={props.onChangeStar} />
      </S.InputWrapper>

      <S.ContentsWrapper>
        <S.Contents
          onChange={props.onChangeContents}
          defaultValue={props.el?.contents}
          maxLength={100}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />

        <S.BottomWrapper>
          <S.ContentsLength>{props.contents.length}/100</S.ContentsLength>

          <S.Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.Button>
        </S.BottomWrapper>
      </S.ContentsWrapper>
    </S.Wrapper>
  );
}
