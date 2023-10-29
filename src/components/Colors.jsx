import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, Card, CardContent } from "@mui/material";

export const Colors=()=>{
    const dispatch = useDispatch();
    const colorsselect = useSelector((state)=>state.colorsReducer.colors);

    const colors = ["info", "primary","secondary","inherit","success","error","warning"]

    const handleColor=(str)=>{
        const type = "COLORS" ;
        const payload = str ;
        const action = {type , payload};
        dispatch(action);
    }
    return(
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Card sx={{bgcolor:"black", color:"white", height:"120px", textAlign:"center"}}>
                    <CardContent>
                        <h1>{colorsselect.toUpperCase()}</h1>
                    </CardContent>
                </Card>
            </Grid>
            
            {
                colors.map((item)=>
                    <Grid item xs={4}>
                        <Button onClick={()=>handleColor(item)} variant="contained" color={item} fullWidth>{item}</Button>
                    </Grid>
                )
            }
        </Grid>
    )
}