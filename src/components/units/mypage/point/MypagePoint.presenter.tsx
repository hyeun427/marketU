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
        <img src="/img/icon/smile.png" alt="" width="40" height="40" />
        <span>
          안녕하세요 <b>{props.userData?.fetchUserLoggedIn.name}</b>님
        </span>
      </S.Left>
      <S.Right>
        <img src="/img/icon/wallet.png" width="35" height="38" />
        <div>
          <span>보유금액</span>
          <span>
            ₩{" "}
            {getPrice(props.userData?.fetchUserLoggedIn.userPoint?.amount || 0)}
          </span>
        </div>
        <S.ButtonWrapper>
          <Button01
            type="button"
            title="충전하기"
            style={{ padding: "0.5rem 2.5rem" }}
            onClick={onToggleModal}
          />
        </S.ButtonWrapper>
      </S.Right>
    </S.Wrapper>
  );
}
