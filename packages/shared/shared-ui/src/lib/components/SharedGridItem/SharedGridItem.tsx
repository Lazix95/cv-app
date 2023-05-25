import { Grid, GridProps } from "@mui/material";

type CustomPops = {
  centerText?: boolean,
}

type SharedGridItemProps = CustomPops & GridProps;

interface Optionals {
  readonly textAlign?: 'center';
}

export function SharedGridItem({children, centerText, ...rest}: SharedGridItemProps) {
  const optionals: Optionals = {
    ...(centerText && {textAlign: 'center'}),
  }

  return (
    <Grid item xs={'auto'} {...rest} {...optionals}>
      {children}
    </Grid>
  )
}