import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductListUI {
  data?: Pick<IQuery, "fetchUseditems">;
  onLoadMore: () => void;
  onChangeSearch: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickMoveDetail: (id: string) => () => void;
  onClickNewItem: () => void;
}
