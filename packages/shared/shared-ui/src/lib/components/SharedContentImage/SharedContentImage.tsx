import Image from 'next/image';
import { SharedHocIf } from '@cv-app/shared/shared-hoc';
import styles from './SharedContentImage.module.scss';
import { Typography } from '@mui/material';
import { Content } from '@cv-app/shared/content';

interface SharedContentImageProps {
  content: Content | null;
  name: keyof Content['images'];
  text?: string;
}

export function SharedContentImage({ content, name, text }: SharedContentImageProps) {
  const image = content?.images?.[name]?.default || '';

  return (
    <SharedHocIf RIf={!!image}>
      <div className={styles.SharedContentImage_container} style={{ aspectRatio: '16/9' }}>
        <SharedHocIf RIf={!!text}>
          <div className={styles.SharedContentImage_overlay} />
          <Typography variant={'subtitle1'} className={styles['SharedContentImage_text']}>
            {text}
          </Typography>
        </SharedHocIf>
        <Image style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover', aspectRatio: '16/9' }} src={image} alt={name} />
      </div>
    </SharedHocIf>
  );
}
