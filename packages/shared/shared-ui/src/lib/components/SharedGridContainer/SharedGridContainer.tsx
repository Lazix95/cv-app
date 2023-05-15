import {ReactNode} from "react";
import Grid from "@mui/material/Grid";

interface SharedGridContainerProps {
  readonly children: ReactNode;
  readonly centerX?: boolean;
  readonly centerY?: boolean;
}

export function SharedGridContainer({children, centerX, centerY}: SharedGridContainerProps) {
  const optionals = {
    ...(centerX && {justifyContent: 'center'}),
    ...(centerY && {alignItems: 'center'})
  }

  return (
    <Grid container {...optionals}>
      {children}
    </Grid>
  )
}
