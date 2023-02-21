import { useState } from "react";
import { getPrice } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/01";
import Payment from "../../payment";
import * as S from "./MypagePoint.styles";
import { IMypagePointUI } from "./MypagePoint.types";

export default function MypagePointUI(props: IMypagePointUI) {
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Wrapper>
      {isOpen && (
        <S.Modal>
          <div>
            <Payment onToggleModal={onToggleModal} />
          </div>
        </S.Modal>
      )}
      <S.Left>
        <S.Image1 src="/img/icon/smile.png" alt="" />
        <span>
          안녕하세요 <b>{props.userData?.fetchUserLoggedIn.name}</b>님
        </span>
      </S.Left>
      <S.Right>
        <S.Image2 src="/img/icon/cash.png" alt="" />
        <div>
          <span>보유금액</span>
          <span>
            {getPrice(props.userData?.fetchUserLoggedIn.userPoint?.amount || 0)}
          </span>
        </div>
        <S.ButtonWrapper>
          <Button01 text={"충전하기"} onClick={onToggleModal} />
        </S.ButtonWrapper>
      </S.Right>
    </S.Wrapper>
  );
}
