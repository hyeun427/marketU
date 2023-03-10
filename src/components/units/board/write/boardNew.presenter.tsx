// 게시물 등록 및 수정 프리젠터
import * as S from "./boardNew.style";
import { IBoardWriteUIProps } from "./boardNew.types";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Upload from "../../../commons/uploads/02/Uploads02.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      {props.isOpen && (
        <Modal open={true}>
          <DaumPostcode onComplete={props.onCompleteAddressSearch} />
        </Modal>
      )}
      <S.Wrapper>
        <S.Title>{props.isEdit ? "게시판 수정" : "게시판 등록"}</S.Title>
        <S.WriterWrapper>
          <S.InputWrapper>
            <S.Label>작성자</S.Label>
            <S.Writer>{props.loginUser?.fetchUserLoggedIn.name}</S.Writer>
          </S.InputWrapper>
          <S.InputWrapper>
            <S.Label>비밀번호</S.Label>
            <S.Password
              type="password"
              placeholder="비밀번호를 작성해주세요."
              onChange={props.onChangePassword}
            />
            <S.Error>{props.passwordError}</S.Error>
          </S.InputWrapper>
        </S.WriterWrapper>
        <S.InputWrapper>
          <S.Label>제목</S.Label>
          <S.Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <S.Error>{props.titleError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>내용</S.Label>
          <S.Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.Error>{props.contentsError}</S.Error>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>주소</S.Label>
          <S.CodeWrapper>
            <S.Code
              placeholder="우편번호"
              readOnly
              value={
                props.zipcode ||
                props.data?.fetchBoard.boardAddress?.zipcode ||
                ""
              }
            />
            <S.SearchCode onClick={props.onClickAddressSearch}>
              우편번호 검색
            </S.SearchCode>
          </S.CodeWrapper>

          <S.Address
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          />
          <S.Address
            onChange={props.onChangeAddressDetail}
            defaultValue={
              props.data?.fetchBoard.boardAddress?.addressDetail || ""
            }
            placeholder="상세 주소를 써주세요."
          />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Label>유튜브</S.Label>
          <S.Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutubeUrl}
            defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
          />
        </S.InputWrapper>

        <S.ImagesWrapper>
          <S.Label>사진첨부</S.Label>
          <S.ImageWrapper>
            {props.fileUrls.map((el: any, index: number) => {
              if (index !== 0 && props.fileUrls[index - 1] !== "")
                return (
                  <S.UploadWrapper>
                    <Upload
                      type="button"
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                    <S.DeleteBtn onClick={props.onClickDeleteImage(index)}>
                      x
                    </S.DeleteBtn>
                  </S.UploadWrapper>
                );
              if (index === 0)
                return (
                  <S.UploadWrapper>
                    <Upload
                      type="button"
                      key={uuidv4()}
                      index={index}
                      fileUrl={el}
                      onChangeFileUrls={props.onChangeFileUrls}
                    />
                    <S.DeleteBtn onClick={props.onClickDeleteImage(index)}>
                      x
                    </S.DeleteBtn>
                  </S.UploadWrapper>
                );
            })}
          </S.ImageWrapper>
        </S.ImagesWrapper>

        <S.ButtonWrapper>
          <S.SubmitButton
            onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
            isActive={props.isEdit ? true : props.isActive}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </S.SubmitButton>
          <S.CancelButton onClick={props.onClickCancel}>
            취소하기
          </S.CancelButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </>
  );
}
