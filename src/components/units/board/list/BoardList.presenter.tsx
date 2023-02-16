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
      <Ls.MenuWrapper>
        <Ls.SearchBox>
          <Ls.SearchImg src="/img/icon/search.png" width={20} />
          <Ls.SearchInput
            type="text"
            placeholder="제목을 검색해주세요!"
            onChange={props.onChangeSearch}
          />
        </Ls.SearchBox>
        {/* 새글버튼 */}
        <Ls.Button onClick={props.onClickMoveToBoardNew}>
          <img src="/img/icon/pencil.png" width={"20"} />
          글쓰기
        </Ls.Button>
      </Ls.MenuWrapper>
      <Ls.TableTop />
      {/* 리스트 헤더영역 */}
      <Ls.TitleRow>
        <Ls.ColumnBasic1>번호</Ls.ColumnBasic1>
        <Ls.RowTitle>제목</Ls.RowTitle>
        <Ls.ColumnBasic2>작성자</Ls.ColumnBasic2>
        <Ls.ColumnBasic3>날짜</Ls.ColumnBasic3>
      </Ls.TitleRow>
      {/* 리스트 영역 */}
      {/* 리스트 불러오기를 10번 반복하는 코드*/}
      {props.data?.fetchBoards.map((el, index: number) => (
        <Ls.Row key={el._id}>
          <Ls.ColumnBasic1>
            {<span>{(currentPage - 1) * 10 + index + 1}</span>}
          </Ls.ColumnBasic1>
          <Ls.ColumnTitle
            id={el._id}
            onClick={props.onClickMoveToBoardDetail(el._id)}
          >
            {el.title
              .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
              .split("@#$%")
              .map((el) => (
                <Ls.TextToken key={uuidv4()}>{el}</Ls.TextToken>
              ))}
          </Ls.ColumnTitle>
          <Ls.ColumnBasic2>{el.writer}</Ls.ColumnBasic2>
          <Ls.ColumnBasic3>{getDate(el.createdAt)}</Ls.ColumnBasic3>
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
      </Ls.Footer>
    </Ls.Wrapper>
  );
}
