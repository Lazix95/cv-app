import { InputBaseComponentProps, TextField } from '@mui/material';
import React, { ElementType, ReactNode } from 'react';
import { SharedGridItem } from '../SharedGridItem/SharedGridItem';

interface SharedOutlineContainerProps {
  children: ReactNode;
  centerText?: boolean;
  label: string;
  style?: Record<string, unknown>;
}

const InputComponent = React.forwardRef<HTMLDivElement>((props, ref) => <div {...props} ref={ref} />);
export const SharedOutlinedContainer = ({ children, label, style }: SharedOutlineContainerProps) => {
  return (
    <SharedGridItem centerText style={style}>
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
