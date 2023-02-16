import { ComponentType } from "react";
import {
  FieldValues,
  FormState,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
  UseFormStateReturn,
  UseFormTrigger,
} from "react-hook-form";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FormValues {
  // export interface IProductWrite {
  name?: string;
  remarks?: string;
  price?: string;
  contents?: string;
  tags?: string;
  images?: string[];
  zipcode?: string;
  address?: string;
  addressDetail?: string;
  // lat?: number;
  // lng?: number;
}

export interface IProductWriteUIProps {
  ReactQuill: ComponentType<ReactQuill.ComponentProps>;
  register: UseFormRegister<FormValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: UseFormStateReturn<FieldValues>;
  setValue: any;
  getValues: any;
  trigger: any;
  reset: UseFormReset<FormValues>;
  data?: Pick<IQuery, "fetchUseditem">;
  data1?: Pick<IQuery, "fetchUseditem">;
  isEdit: Boolean;
  fileUrls: string[];
  onClickSubmit: (data: FormValues) => void;
  onClickUpdate: (data: FormValues) => void;
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
}

export interface IProductWriteProps {
  isEdit: Boolean;
  data?: any;
}
