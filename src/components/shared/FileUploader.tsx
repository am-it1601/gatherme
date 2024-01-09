import React, { Dispatch, SetStateAction } from 'react'

type FileUploaderProps = {
    imageUrl: string;
    onChange : (value: string) => void;
    setFiles: Dispatch<SetStateAction<File[]>>
}
const FileUploader = ({imageUrl, onChange, setFiles}:FileUploaderProps) => {
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader