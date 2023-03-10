import { useMutation } from "@apollo/client";
import { ChangeEvent, useRef } from "react";
import { UPLOAD_FILE } from "./Uploads02.queries";
import { CheckFileValidation } from "./Uploads02.validation";
import UploadUI from "./Uploads02.presenter";

export default function Upload(props: any) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const onClickUpload = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = CheckFileValidation(event.target.files?.[0]);
    if (!file) return;

    try {
      const result = await uploadFile({ variables: { file } });
      props.onChangeFileUrls(result.data.uploadFile.url, props.index);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <UploadUI
      fileRef={fileRef}
      fileUrl={props.fileUrl}
      defaultFileUrl={props.defaultFileUrl}
      onClickUpload={onClickUpload}
      onChangeFile={onChangeFile}
    />
  );
}
