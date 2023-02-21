import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
} from "react-hook-form";
import { FormState } from "react-hook-form/dist/types";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FormValues {
  name?: string;
  remarks?: string;
  price?: string;
  contents?: string;
  tags?: string;
  images?: string[];
  zipcode?: string;
  address?: string;
  addressDetail?: string;
}

export interface IProductWriteUIProps {
  register: UseFormRegister<FieldValues>;
  formState: FormState<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  setValue: any;
  trigger: any;
  // getValues: any;
  // reset: UseFormReset<FormValues>;
  data?: Pick<IQuery, "fetchUseditem">;
  data1?: Pick<IQuery, "fetchUseditem">;
  isEdit: Boolean;
  fileUrls: string[];
  onClickSubmit: (data: any) => void;
  onClickUpdate: (data: any) => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickDeleteImage: (arg: any) => () => void;
  hashArr: string[];
  onKeyUpHash: (event: any) => void;
  isOpen: Boolean;
  onClickCancel: () => void;
  zipcode?: any;
  address?: any;
  addressDetail: any;
  onClickModal: () => void;
  onClickPostCode: (data: any) => void;
  onChangeAddressDetail: (event: any) => void;
  onClickDeleteTag: (tag: string) => () => void;
}

export interface IProductWriteProps {
  isEdit: Boolean;
  data?: any;
}
