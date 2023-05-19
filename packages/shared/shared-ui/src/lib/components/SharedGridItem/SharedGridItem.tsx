import { Grid, GridProps } from "@mui/material";

export function SharedGridItem({children, ...rest}: GridProps) {
  return (
    <Grid item={true} {...rest}>
      {children}
    </Grid>
  )
}