import { DragEvent, Fragment, useState } from 'react';
import classes from './SharedImageUpload.module.scss';
import { SharedOutlinedContainer } from '../SharedOutlinedContainer/SharedOutlinedContainer';
import { Button } from '@mui/material';
import { SharedUploadFile } from '../SharedUploadFile/SharedUploadFile';
import { SharedHocIf } from 'packages/shared/shared-hoc/src/lib/SharedHocIf';
import { SharedGridBreak } from '../SharedGridBreak/SharedGridBreak';
import { getFilePreviewURL } from '@cv-app/shared/shared-fnc';

interface SharedImageUploadProps {
  onChange?: (file: File) => void;
}

export const SharedImageUpload = ({ onChange }: SharedImageUploadProps) => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);

  const handleDrop = async (e: DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer?.files[0];
    setImage(await getFilePreviewURL(file));
    onChange?.(file);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  async function handleUploadImage(file: File, previewUrl: string) {
    onChange?.(file);
    setImage(previewUrl);
  }

  return (
    <SharedOutlinedContainer centerText={true} label={'Drag Image'}>
      <div onDrop={handleDrop} onDragOver={handleDragOver} onDragLeave={handleDragLeave}>
        <SharedHocIf RIf={!!image}>
          <img src={image as string} alt="Uploaded" className={classes.image} />
          <Button onClick={handleRemoveImage}>Remove Image</Button>
        </SharedHocIf>

        <SharedHocIf RIf={!image}>
          <span>Drag and drop an image here</span>
          <SharedGridBreak />
          <span>or</span>
          <SharedGridBreak />
          <SharedUploadFile onChange={handleUploadImage} />
        </SharedHocIf>
      </div>
    </SharedOutlinedContainer>
  );
};
