import { TextField, TextFieldProps } from "@mui/material";
import { SharedGridItem } from "../SharedGridItem/SharedGridItem";



export function SharedGridInput(props: TextFieldProps) {
    return (
        <SharedGridItem xs={6} md={4} lg={3}>
            <TextField fullWidth {...props} size="small" variant={"outlined"}/>
        </SharedGridItem>
    )
}