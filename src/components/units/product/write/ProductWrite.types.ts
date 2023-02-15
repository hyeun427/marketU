import { ComponentType } from "react";
import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  UseFormTrigger,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IProductWrite {
  name?: string;
  remarks?: string;
  price?: string;
  contents?: string;
  tags?: string;
  images?: string[];
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  lat?: number;
  lng?: number;
}
// export interface IProductWrite {
//   name?: string;
//   remarks?: string;
//   price?: string;
//   contents?: string;
//   tags?: string;
// }

export interface IProductWriteUIProps {
  ReactQuill: ComponentType<ReactQuill.ComponentProps>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  trigger: UseFormTrigger<FieldValues>;
  data?: Pick<IQuery, "fetchUseditem">;
  data1?: Pick<IQuery, "fetchUseditem">;
  isEdit: Boolean;
  fileUrls: string[];
  onClickSubmit: (data: IProductWrite) => void;
  onClickUpdate: (data: IProductWrite) => void;
  onChangeContents: (value: string) => void;
  onChangeFileUrls: (fileUrls: string, index: number) => void;
  onClickDeleteImage: (arg: any) => () => void;
  hashArr: string[];
  onKeyUpHash: (event: any) => void;
  isOpen: Boolean;
  onClickCancel: () => void;
  zipcode?: string;
}

export interface IProductWriteProps {
  isEdit: Boolean;
  data?: any;
}
