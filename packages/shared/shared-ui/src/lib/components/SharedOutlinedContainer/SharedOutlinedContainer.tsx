import { InputBaseComponentProps, TextField } from '@mui/material';
import React, { ElementType, ReactNode } from 'react';
import { SharedGridItem } from '../SharedGridItem/SharedGridItem';

interface SharedOutlineContainerProps {
  children: ReactNode;
  centerText?: boolean;
  label: string;
}

const InputComponent = React.forwardRef<HTMLDivElement>((props, ref) => <div {...props} ref={ref} />);
export const SharedOutlinedContainer = ({ children, label, centerText }: SharedOutlineContainerProps) => {
  return (
    <SharedGridItem centerText>
      <TextField
        fullWidth={true}
        variant="outlined"
        label={label}
        multiline
        InputLabelProps={{ shrink: true }}
        InputProps={{
          inputComponent: InputComponent as ElementType<InputBaseComponentProps>,
        }}
        inputProps={{ children: children }}
      />
    </SharedGridItem>
  );
};
