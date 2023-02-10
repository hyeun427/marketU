import BestProductsUI from "./BestProducts.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_USEDITEMS_OF_THE_BEST } from "./BestProducts.queries";
import { useRouter } from "next/router";
import { IQuery } from "../../../commons/types/generated/types";

export default function BestProducts() {
  const router = useRouter();
  const { data: dataUseditemsOfTheBest } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USEDITEMS_OF_THE_BEST);

  // 전체보기
  const onClickAll = () => {
    router.push(`/products`);
  };

  // 베스트 게시글 상세보기
  const onClickMoveToBestItemDetail = (id: string) => () => {
    router.push(`/products/${id}`);
  };

  return (
    <BestProductsUI
      dataUseditemsOfTheBest={dataUseditemsOfTheBest}
      onClickMoveToBestItemDetail={onClickMoveToBestItemDetail}
      onClickAll={onClickAll}
    />
  );
}
