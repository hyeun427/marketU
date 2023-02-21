// 게시물 등록 및 수정 프리젠터
import * as S from "./ProductWrite.style";
import { IProductWriteUIProps } from "./ProductWrite.types";
import { v4 as uuidv4 } from "uuid";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import Upload from "../../../commons/uploads/02/Uploads02.container";

export default function ProductWriteUI(props: IProductWriteUIProps) {
  return (
    <form
      onSubmit={props.handleSubmit(
        props.isEdit ? props.onClickUpdate : props.onClickSubmit
      )}
    >
      <S.Wrapper>
        <S.left>
          {props.fileUrls.map((el: any, index: number) => {
            if (index === 0)
              return (
                <div>
                  <Upload
                    type="button"
                    key={uuidv4()}
                    index={index}
                    fileUrl={el}
                    onChangeFileUrls={props.onChangeFileUrls}
                    defaultValue={`https://storage.googleapis.com/${el}` || ""}
                  />
                  <S.DeleteBtn
                    onClick={props.onClickDeleteImage(index)}
                  ></S.DeleteBtn>
                </div>
              );
          })}
        </S.left>

        <S.right>
          {/* 상품명 */}
          <S.Inner>
            <S.Label>상품명</S.Label>
            <S.Input
              type="text"
              placeholder="상품명을 작성해주세요."
              {...props.register("name")}
              defaultValue={props.data?.fetchUseditem.name || ""}
            />
            <S.Error>{props.formState.errors?.name?.message}</S.Error>
          </S.Inner>

          <S.InnerWrapeer>
            {/* 한줄요약 */}
            <div>
              <S.Label>한줄요약</S.Label>
              <S.Input
                type="text"
                placeholder="상품에 대해 간단히 작성해주세요."
                {...props.register("remarks")}
                defaultValue={props.data?.fetchUseditem.remarks || ""}
              />
              <S.Error>{props.formState.errors?.remarks?.message}</S.Error>
            </div>
            {/* 가격 */}
            <div>
              <S.Label>판매 가격</S.Label>
              <S.Input
                type="text"
                placeholder="판매 가격을 입력해주세요."
                {...props.register("price")}
                defaultValue={Number(props.data?.fetchUseditem.price || "")}
              />
              <S.Error>{props.formState.errors?.price?.message}</S.Error>
            </div>
          </S.InnerWrapeer>

          {/* 상품설명 */}
          <S.Inner>
            <S.Label>상품설명</S.Label>

            <S.Quill
              onChange={props.onChangeContents}
              id="contents"
              placeholder="상품을 설명해주세요."
              defaultValue={props.data?.fetchUseditem.contents || ""}
            />
            <S.Error>{props.formState.errors?.contents?.message}</S.Error>
          </S.Inner>

          {/* 태그 */}
          <div>
            <S.Label>태그입력</S.Label>
            <S.Input
              type="text"
              placeholder="태그를 입력하고 스페이스바를 눌러주세요. 작성한 태그를 눌러서 삭제할 수 있어요."
              {...props.register("tags")}
              onKeyUp={props.onKeyUpHash}
            />
            <span>
              {props.hashArr.map((el, idx) => (
                <span key={idx}>{el}</span>
              ))}
            </span>
            <div>
              {props.hashArr.map((el: string) => (
                <S.HashTagWrapper key={uuidv4()}>
                  <S.HashTag onClick={props.onClickDeleteTag(el)}>
                    {el}
                  </S.HashTag>
                </S.HashTagWrapper>
              ))}
            </div>
            <S.Error>{props.formState.errors?.tags?.message}</S.Error>
          </div>

          {/* 지도 */}
          <S.MapWrapper>
            <S.Label>거래위치</S.Label>
            <S.Inner>
              <S.MapDetailWrapperHead>
                <S.AddressNumber
                  id="zipcode"
                  value={
                    props.zipcode
                      ? props.zipcode
                      : props.data?.fetchUseditem.useditemAddress?.zipcode
                  }
                  readOnly={true}
                  defaultValue={props.zipcode || ""}
                />
                <S.AddressSearch onClick={props.onClickModal}>
                  우편번호 검색
                </S.AddressSearch>
                {props.isOpen && (
                  <Modal
                    open={true}
                    title={"우편번호 검색"}
                    onOk={props.onClickModal}
                    onCancel={props.onClickModal}
                  >
                    <DaumPostcode onComplete={props.onClickPostCode} />
                  </Modal>
                )}
              </S.MapDetailWrapperHead>
              <S.MapDetailWrapperBottom>
                <S.Input
                  id="address"
                  readOnly={true}
                  value={
                    props.address ||
                    props.data?.fetchUseditem.useditemAddress?.address ||
                    ""
                  }
                />
                <S.Input
                  id="addressDetail"
                  placeholder="상세 주소를 입력하세요"
                  onChange={props.onChangeAddressDetail}
                  value={
                    props.addressDetail ||
                    props.data?.fetchUseditem.useditemAddress?.addressDetail ||
                    ""
                  }
                />
              </S.MapDetailWrapperBottom>
            </S.Inner>
          </S.MapWrapper>
        </S.right>
      </S.Wrapper>
      <S.ButtonWrapper>
        <S.SubmitButton
          onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </S.SubmitButton>
        <S.SubmitButton onClick={props.onClickCancel}>취소</S.SubmitButton>
      </S.ButtonWrapper>
    </form>
  );
}
