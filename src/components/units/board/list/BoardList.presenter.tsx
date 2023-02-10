import * as Ls from "./BoardList.style";
import { getDate } from "../../../../commons/libraries/utils";
import { IBoardListUIProps } from "./BoardList.types";
import Searchbars01 from "../../../commons/searchbars/01/Searchbars01.container";
import { v4 as uuidv4 } from "uuid";
import PagiNation01 from "../../../commons/paginations/01";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { boardsPageState } from "../../../../commons/store";

export default function BoardListUI(props: IBoardListUIProps) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const boardsPage = useRecoilValue(boardsPageState);

  useEffect(() => {
    setCurrentPage(boardsPage || 1);
  }, [boardsPage]);

  return (
    // 리스트 전체영역
    <Ls.Wrapper>
      {/* 검색창 */}
      <Ls.SearchBox>
        <Ls.SearchImg src="/img/icon/search.png" width={20} />
        <Ls.SearchInput
          type="text"
          placeholder="제목을 검색해주세요!"
          onChange={props.onChangeSearch}
        />
      </Ls.SearchBox>
      <Ls.TableTop />
      {/* 리스트 헤더영역 */}
      <Ls.Row>
        <Ls.ColumnHeaderBasic>번호</Ls.ColumnHeaderBasic>
        <Ls.ColumnHeaderTitle>제목</Ls.ColumnHeaderTitle>
        <Ls.ColumnHeaderBasic>작성자</Ls.ColumnHeaderBasic>
        <Ls.ColumnHeaderBasic>날짜</Ls.ColumnHeaderBasic>
      </Ls.Row>
      {/* 리스트 영역 */}
      {/* 리스트 불러오기를 10번 반복하는 코드*/}
      {props.data?.fetchBoards.map((el) => (
        <Ls.Row key={el._id}>
          <Ls.ColumnBasic>
            {/* 아랫줄 id값 출력을 번호로 바꿔줄 것 */}
            {String(el._id).slice(-4).toUpperCase()}
          </Ls.ColumnBasic>
          <Ls.ColumnTitle id={el._id} onClick={props.onClickMoveToBoardDetail}>
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <Ls.TextToken key={uuidv4()} isMatched={props.keyword === el}>
                  {el}
                </Ls.TextToken>
              ))}
          </Ls.ColumnTitle>
          <Ls.ColumnBasic>{el.writer}</Ls.ColumnBasic>
          <Ls.ColumnBasic>{getDate(el.createdAt)}</Ls.ColumnBasic>
        </Ls.Row>
      ))}
      <Ls.TableBottom />
      {/* 리스트 푸터영역 */}
      <Ls.Footer>
        <PagiNation01
          totalDataCount={props.boardsCount}
          pageRangeToShow={5}
          dataCountPerPage={10}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          refetch={props.refetch}
        />
        <Ls.Button onClick={props.onClickMoveToBoardNew}>
          <img src="/img/icon/pencil.png" width={"20"} />
          게시물 등록하기
        </Ls.Button>
      </Ls.Footer>
    </Ls.Wrapper>
  );
}
