import { useEffect, useState } from "react";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";

export default function PagiNation01({
  totalDataCount,
  pageRangeToShow,
  dataCountPerPage,
  currentPage,
  setCurrentPage,
  refetch,
}: {
  totalDataCount: number;
  pageRangeToShow: number;
  dataCountPerPage: number;
  currentPage: number;
  setCurrentPage: (num: number) => void;
  refetch: (variables?: { search?: string; page?: number }) => any;
}) {
  const [totalPage, setTotalPage] = useState<number>(1);
  const [startPage, setStartPage] = useState<number>(1);
  const isLastPage = startPage + pageRangeToShow > totalPage;
  const isStartPage = startPage === 1;

  const onClickPageNumber = (page: number) => () => {
    setCurrentPage(page);
  };

  const onClickFirst = () => {
    if (startPage === 1) return;
    setCurrentPage(1);
  };

  const onClickPrev = () => {
    if (startPage <= 1) return;
    setCurrentPage(startPage - 1);
  };

  const onClickNext = () => {
    if (isLastPage) return;
    setCurrentPage(startPage + pageRangeToShow);
  };

  const onClickLast = () => {
    if (isLastPage) return;
    setCurrentPage(totalPage);
  };

  useEffect(() => {
    setTotalPage(Math.ceil(totalDataCount / dataCountPerPage));
  }, [totalDataCount]);

  useEffect(() => {
    const _startPage = Math.ceil(currentPage / pageRangeToShow);
    setStartPage(_startPage === 1 ? 1 : (_startPage - 1) * pageRangeToShow + 1);
    refetch({ page: currentPage });
  }, [currentPage]);

  if (!totalDataCount && !pageRangeToShow && !dataCountPerPage) return <div />;

  return (
    <S.Wrapper>
      <S.ArrowWrapper disable={isStartPage}>
        <span onClick={onClickFirst}>처음</span>
        <span onClick={onClickPrev}>이전</span>
      </S.ArrowWrapper>

      <S.PageNumberWrapper>
        {new Array(isLastPage ? totalPage - startPage + 1 : pageRangeToShow)
          .fill(1)
          .map((_, index) => {
            return (
              index + startPage >= 1 && (
                <S.PageNumber
                  key={uuidv4()}
                  onClick={onClickPageNumber(index + startPage)}
                  className={
                    currentPage === index + startPage ? "isActive" : ""
                  }
                >
                  <span> {index + startPage} </span>
                </S.PageNumber>
              )
            );
          })}
      </S.PageNumberWrapper>

      <S.ArrowWrapper disable={isLastPage}>
        <span onClick={onClickNext}>다음</span>
        <span onClick={onClickLast}>끝</span>
      </S.ArrowWrapper>
    </S.Wrapper>
  );
}
