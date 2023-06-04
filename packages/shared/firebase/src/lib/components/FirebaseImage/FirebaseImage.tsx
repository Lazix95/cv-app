import Image from 'next/image';
import { SharedHocIf } from '@cv-app/shared/shared-hoc';
import styles from './FirebaseImage.module.scss';
import { Typography } from '@mui/material';
import { getImageLink } from '../../firebase';
import { useEffect, useState } from 'react';

interface SharedContentImageProps {
  folder: 'other' | 'basicInfo';
  name: string;
  text?: string;
}

export function FirebaseImage({ folder, name, text }: SharedContentImageProps) {
  const [image, setImage] = useState('');

  useEffect(() => {
    getImage();
  });

  async function getImage() {
    const imgUrl = await getImageLink({ folder, name });
    setImage(imgUrl);
  }

  return (
    <SharedHocIf RIf={!!image}>
      <div className={styles.SharedContentImage_container} style={{ aspectRatio: '16/9' }}>
        <SharedHocIf RIf={!!text}>
          <div className={styles.SharedContentImage_overlay} />
          <Typography variant={'subtitle1'} className={styles['SharedContentImage_text']}>
            {text}
          </Typography>
        </SharedHocIf>
        <Image
          style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '16/9' }}
          width={1000}
          height={1000}
          src={image}
          alt={name}
        />
      </div>
    </SharedHocIf>
  );
}
