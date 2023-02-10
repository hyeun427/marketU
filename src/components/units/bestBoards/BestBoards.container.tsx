import BestBoardsUI from "./BestBoards.presenter";
import { useQuery } from "@apollo/client";
import { FETCH_BOARDS_OF_THE_BEST } from "./BestBoards.queries";
import { useRouter } from "next/router";
import { IQuery } from "../../../commons/types/generated/types";

export default function BestBoards() {
  const router = useRouter();
  const { data: dataBoardsOfTheBest } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">
  >(FETCH_BOARDS_OF_THE_BEST);

  // 전체보기
  const onClickAll = () => {
    router.push(`/boards`);
  };

  // 베스트 게시글 상세보기
  const onClickMoveToBestBoardDetail = (id: string) => () => {
    router.push(`/boards/${id}`);
  };

  return (
    <BestBoardsUI
      dataBoardsOfTheBest={dataBoardsOfTheBest}
      onClickMoveToBestBoardDetail={onClickMoveToBestBoardDetail}
      onClickAll={onClickAll}
    />
  );
}
