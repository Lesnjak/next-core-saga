// ! Delete this comment or delete component if its doesn't use
import cn from 'classnames';
import isUndefined from 'lodash/isUndefined';
import { FC, useRef } from 'react';
import ReactCropper, { ReactCropperElement } from 'react-cropper';

import { Button } from '../Button';
import styles from './styles.module.scss';

type Props = {
  className?: string;
  src: string;
  id: string;

  onCrop: (value: string) => void;
};

export const Cropper: FC<Props> = (props) => {
  const { className, onCrop, src, id } = props;

  const cropperRef = useRef<ReactCropperElement | null>(null);

  const cropImage = () => {
    const imageElement = cropperRef.current;

    if (cropperRef && imageElement) {
      if (isUndefined(imageElement.cropper.getCroppedCanvas())) {
        return;
      }

      onCrop(imageElement.cropper.getCroppedCanvas().toDataURL());
    }
  };

  return (
    <div className={cn(styles.cropper, className)}>
      <ReactCropper
        zoomable={false}
        movable={false}
        guides={false}
        ref={cropperRef}
        src={src}
      />

      <div className={styles.cropper__buttons}>
        <Button onClick={cropImage} id={`cropper-${id}-save-button`}>
          Save
        </Button>
      </div>
    </div>
  );
};
