import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductDetaulUIProps {
  data?: any;
  data2: any;
  onClickMoveToList: () => void;
  onClickMoveToEdit: () => void;
  onClickPick: () => void;
  onClickBuy: () => void;
  onClickCancel: () => void;
  onClickDelete: () => Promise<void>;
}
