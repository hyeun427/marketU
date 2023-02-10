// 상품목록 컨테이너
import ProductListUI from "./ProductList.presenter";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { watchListState } from "../../../../commons/store";
import { debounce } from "lodash";
import { FETCH_USED_ITEMS } from "./ProductList.queries";
import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export default function ProductList() {
  // 상품목록
  const {
    data,
    fetchMore,
    refetch: refetchUseditems,
  } = useQuery<Pick<IQuery, "fetchUseditems">>(FETCH_USED_ITEMS);

  const router = useRouter();

  // 검색바
  const getDebounce = debounce((data) => {
    refetchUseditems({ search: data, page: 1 });
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  // 등록하기 버튼
  const onClickNewItem = () => {
    router.push("/products/new");
  };

  // 제품 사진 눌렀을 때 디테일 페이지 이동
  const onClickMoveDetail =
    (el: any) => (event: MouseEvent<HTMLDivElement>) => {
      const watch = JSON.parse(localStorage.getItem("watch") || "[]");

      const { __typename, ...newEl } = el;
      watch.push(newEl);
      localStorage.setItem("watch", JSON.stringify(watch));
      setWatchProduct(watch.slice(watch.length - 3, watch.length));

      router.push(`/products/${event.currentTarget.id}`);
    };

  // 무한 스크롤
  const onLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };
        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
          ],
        };
      },
    });
  };

  // 최근 본 상품
  const [watchProduct, setWatchProduct] = useRecoilState(watchListState);

  return (
    <ProductListUI
      data={data}
      fetchMore={fetchMore}
      onLoadMore={onLoadMore}
      onClickNewItem={onClickNewItem}
      onClickMoveDetail={onClickMoveDetail}
      onChangeSearch={onChangeSearch}
    />
  );
}
