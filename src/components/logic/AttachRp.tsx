// ! Delete this comment or delete component if its doesn't use
import isImage from 'is-image';
import Downloader from 'js-file-downloader';
import isString from 'lodash/isString';
import Prettysize from 'prettysize';
import { FC, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import {
  ACCEPTED_IMAGE_FORMATS,
  IMAGE_MAX_SIZE,
} from '../../configs/file-formats.config';
import { toBase64 } from '../../utils/to-base-64';

type Props = {
  base64Image?: boolean;
  valueNames?: Record<string, any>;
  withFile?: boolean;
  minSize?: number;
  base64?: boolean;
  maxSize: number;
  accept?: {
    displayName: string;
    format: string;
  }[];
  value: Array<any>;

  onChange: (files: Record<string, any>[] | null) => void;
  render: (props: Record<string, any>) => void;
};

interface INewFile {
  base64: unknown | string | undefined;
  file: File;
  name: string;
  size: number;
  id: number;
}

export const AttachRp: FC<Props> = (props) => {
  const {
    base64Image,
    valueNames,
    onChange,
    withFile,
    maxSize = IMAGE_MAX_SIZE,
    minSize = 1,
    accept = [...ACCEPTED_IMAGE_FORMATS],
    base64,
    render,
    value,
  } = props;

  const [files, setFiles] = useState<Record<string, any>[] | []>([]);
  const [id, setId] = useState<number>(1);

  useEffect(() => {
    if (value) {
      let fileId = id;

      const sizeKey = (valueNames && valueNames.size) || 'size';

      const files = value.map((file: File) => ({
        name: file[(valueNames && valueNames.name) || 'name'],
        size: isString(file[sizeKey])
          ? file[sizeKey]
          : Prettysize(file[sizeKey]),
        id: fileId++,
      }));

      setId(fileId);
      setFiles(files);

      if (onChange) onChange(files);
    }
  }, [onChange, id, value, valueNames]);

  useEffect(() => {
    if (value === null && files.length) setFiles([]);
  }, [value, files.length]);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop: async (acceptedFiles, notAcceptedFiles) => {
      if (acceptedFiles.length) {
        const file = acceptedFiles[0];
        await addFile(file);
      } else if (notAcceptedFiles.length) {
        console.error('file error');
      }
    },
    ...(accept && { accept: accept.map((item) => item.format).join(', ') }),
    noClick: true,
    minSize,
    maxSize,
    noDrag: true,
  });

  const handleDelete = (deletedId: string) => {
    const newFiles = [...files].filter(
      (item: Record<string, any>) => item.id !== deletedId
    );

    setFiles(newFiles);

    if (onChange) {
      onChange(newFiles.length ? newFiles : null);
    }
  };

  const addFile = async (file: File) => {
    const newFile = {
      name: file.name,
      size: Prettysize(file.size),
      id,
    } as INewFile;

    if (base64) {
      const base64String = await toBase64(file);

      newFile.base64 = base64String;
    }

    if (base64Image && isImage(file.name)) {
      const base64String = await toBase64(file);

      newFile.base64 = base64String;
    }

    if (withFile) {
      newFile.file = file;
    }

    const newFiles = [...files, newFile];

    setFiles(newFiles);
    setId(id + 1);

    if (onChange) {
      onChange(newFiles);
    }
  };

  const downloadFile = (url: string) => {
    new Downloader({
      filename: url,
      url,
    })
      .then(function () {
        return;
      })
      .catch(function (err: string) {
        console.error(err);
      });
  };

  return (
    <div {...getRootProps()} style={{ outline: 'none' }}>
      <input {...getInputProps()} />

      {render({
        onDownload: downloadFile,
        onDelete: handleDelete,
        onOpen: open,
        files,
      })}
    </div>
  );
};
