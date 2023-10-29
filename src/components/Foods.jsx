import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Foods=()=>{
    const dispatch = useDispatch();
    const foodselect = useSelector((state)=>state.foodsReducer.selectedfoods);

    const Food= ["Paneer Tikka","Gulab Jamun","Biryani","Burger","Pizza","Noodles","Pasta","Daal-Chawal"]
   
    const handleFood=(str)=>{
        const type = "SELECTED_FOODS" ;
        const payload = str ;
        const action = {type, payload}
        dispatch(action);
    }

    return(
       <Grid container spacing={2}>
        <Grid item xs={12}>
            <Card sx={{bgcolor:"black", color:"white", height:"120px", textAlign:"center"}}>
                <CardContent>
                    <h1>{foodselect.toUpperCase()}</h1>
                </CardContent>
            </Card>
        </Grid>
        {
            Food.map((item)=>{
                return(
                    <Grid item xs={3} align="center">
                        <Card sx={{bgcolor:"lightskyblue", height:"200px"}}>
                            <CardContent>
                                <h2>{item}</h2>
                                <Button onClick={()=>handleFood(item)} variant="contained" color="success">Add To Cart</Button>
                            </CardContent>
                        </Card>
                    </Grid>
                )
            })
        }
       </Grid>
    );
}