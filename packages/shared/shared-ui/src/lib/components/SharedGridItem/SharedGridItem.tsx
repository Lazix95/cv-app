import { Grid } from "@mui/material";
import { ReactNode } from "react";

export function SharedGridItem({children}: {children: ReactNode}) {
  return (
    <Grid>
      {children}
    </Grid>
  )
}