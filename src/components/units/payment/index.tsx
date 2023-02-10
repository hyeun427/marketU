import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_POINT_TRANSACTION_OF_LOADING,
  FETCH_USER_LOGGED_IN,
} from "./queries";
import Head from "next/head";
import * as S from "./styles";
import Button01 from "../../commons/buttons/01";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function Payment(props: { onToggleModal: () => void }) {
  const [createPointTransactionOfLoading] = useMutation(
    CREATE_POINT_TRANSACTION_OF_LOADING
  );
  const { data, refetch } = useQuery(FETCH_USER_LOGGED_IN);
  const router = useRouter();
  const [amount, setAmount] = useState(500);

  const requestPay = () => {
    const IMP = window.IMP;
    IMP.init("imp58061661");
    // IMP.init("imp49910675");
    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: `${amount}원 충전`, // 상품이름
        amount: amount, // 결제금액
        buyer_email: data.fetchUserLoggedIn.email,
        buyer_name: data.fetchUserLoggedIn.name,
        m_redirect_url: "http://localhost:3000/mypage",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPointTransactionOfLoading({
              variables: {
                impUid: rsp.imp_uid,
              },
            });
            refetch();
          } catch (error) {
            if (error instanceof Error) alert(error.message);
          }
          props.onToggleModal();
          router.push("/mypage");
        } else {
          alert("결제에 실패 했습니다! 다시 시도해 주세요!");
        }
      }
    );
  };

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(event.target.value));
  };
  return (
    <S.Wrapper>
      <Head>
        {/* jQuery */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* iamport.payment.js */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <S.CloseButtonWrapper>
        <img src="/img/icon/icon_close.svg" onClick={props.onToggleModal} />
      </S.CloseButtonWrapper>
      <S.InputWrapper>
        <input
          placeholder="여기에 충전금액을 입력해주세요"
          type="number"
          onChange={onChangeAmount}
        />
      </S.InputWrapper>
      {amount <= 500 ? (
        <div>
          최소 충전금액은 <b>500</b>원 입니다.
        </div>
      ) : (
        <div>
          충전하기 버튼을 누르시면 <b>{amount}</b>원이 충전됩니다.
        </div>
      )}
      <S.ButtonWrapper>
        <Button01
          type="button"
          title="충전하기"
          onClick={requestPay}
          style={{ padding: "0.5rem 2.5rem" }}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
