import BoardListUI from "./BoardList.presenter";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./BoardList.queries";
import { ChangeEvent, MouseEvent, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import { debounce } from "@mui/material";

export default function BoardList() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  //fetchBoard에서 data가져오기
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  console.log(data?.fetchBoards._id);

  // 등록하기 페이지로 연결
  const onClickMoveToBoardNew = () => {
    router.push("/boards/new");
  };

  // 상품상세화면으로 연결
  const onClickMoveToBoardDetail = (id: string) => () => {
    router.push(`/boards/${id}`);
  };

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  // 검색바
  const getDebounce = debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };

  return (
    <BoardListUI
      data={data}
      onClickMoveToBoardNew={onClickMoveToBoardNew}
      onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      refetch={refetch}
      refetchBoardsCount={refetchBoardsCount}
      count={dataBoardsCount?.fetchBoardsCount}
      keyword={keyword}
      onChangeKeyword={onChangeKeyword}
      boardsCount={dataBoardsCount?.fetchBoardsCount}
      onChangeSearch={onChangeSearch}
    />
  );
}
