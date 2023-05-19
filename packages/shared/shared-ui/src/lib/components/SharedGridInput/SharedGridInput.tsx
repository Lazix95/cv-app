import { TextField, TextFieldProps } from "@mui/material";
import { SharedGridItem } from "../SharedGridItem/SharedGridItem";



export function SharedGridInput(props: TextFieldProps) {
    return (
        <SharedGridItem xs={12}>
            <TextField value={props.value} onChange={props.onChange}/>
        </SharedGridItem>
    )
}