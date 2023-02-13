import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { MouseEvent } from "react";
import {
  IQuery,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";

export interface IBoardListUIProps {
  data?: Pick<IQuery, "fetchBoards">;
  boardsCount: number | undefined;
  onClickMoveToBoardNew: () => void;
  onClickMoveToBoardDetail: (id: string) => () => void;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoards">>>;
  refetchBoardsCount: (
    variables: Partial<IQueryFetchBoardsCountArgs>
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchBoardsCount">>>;
  count?: number;
  keyword: string;
  onChangeKeyword: (value: string) => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ITextTokenProps {
  isMatched: boolean;
}
