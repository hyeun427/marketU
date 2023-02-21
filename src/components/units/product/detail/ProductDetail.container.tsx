import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  FETCH_USER_LOGGED_IN,
  USED_ITEM_PICK,
} from "./ProductDetail.queries";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../../commons/store";

export default function ProductDetail() {
  const router = useRouter();
  const accessToken = useRecoilValue(accessTokenState);

  // 상품 데이터 불러오기
  const { data, refetch } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.productsId },
  });

  // 상품 찜하기
  const [toggleUseditemPick] = useMutation(USED_ITEM_PICK);

  // // 상품 삭제하기
  const [deleteUseditem] = useMutation(DELETE_USED_ITEM);

  // 로그인 정보 불러오기 쿼리
  const { data: data2 } = useQuery(FETCH_USER_LOGGED_IN);

  // 결제 관련 쿼리
  const [BuyPoint] = useMutation(
    CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING
  );

  // 찜하기 버튼 누를 때
  const onClickPick = async () => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다!");
      return router.push("/logIn");
    }
    try {
      await toggleUseditemPick({
        variables: { useditemId: String(router.query.productsId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { useditemId: String(router.query.productsId) },
          },
        ],
      });
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "다시 시도해주세요😥" });
    }
  };

  // 바로 구매하기
  const onClickBuy = async () => {
    if (!accessToken) {
      alert("로그인 후 이용 가능합니다!");
      return router.push("/logIn");
    }
    if (
      data2?.fetchUserLoggedIn.userPoint.amount >= data?.fetchUseditem.price
    ) {
      try {
        await BuyPoint({
          variables: { useritemId: router.query.productsId },
        });
        refetch();
        router.push("/products");
        alert("상품이 구매되었습니다.");
      } catch (error) {
        alert("다시 시도해주세요😥");
      }
    } else {
      alert("포인트를 충전해 주세요");
      router.back();
    }
  };

  // 목록으로 가기
  const onClickMoveToList = () => {
    router.push("/products");
  };

  // 수정하기
  const onClickMoveToEdit = () => {
    router.push(`/products/${router.query.productsId}/edit`);
  };

  // 취소하기
  const onClickCancel = () => {
    router.back();
  };

  // 삭제하기
  const onClickDelete = async () => {
    try {
      await deleteUseditem({
        variables: { useditemId: String(router.query.productsId) },
      });
      Modal.success({ content: "삭제가 완료되었습니다." });
      router.push("/products");
    } catch (error) {
      if (error instanceof Error)
        Modal.error({ content: "다시 시도해주세요😥" });
    }
  };
  return (
    <ProductDetailUI
      data={data}
      data2={data2}
      onClickPick={onClickPick}
      onClickBuy={onClickBuy}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickCancel={onClickCancel}
      onClickDelete={onClickDelete}
    />
  );
}
