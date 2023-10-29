import React from "react";
import { Grid, Button, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { navData } from "./Data";

export const Nav=()=>{
    return(
        <Card sx={{marginBottom:"20px"}}>
            <CardContent>
        <Grid container spacing={2}>
            {
                navData.map((item)=>
                    <Grid item xs={3}>
                        <Link to={item.path}>
                            <Button variant="contained" fullWidth color="warning">{item.title}</Button>
                        </Link>
                    </Grid>
                )
            }
        </Grid>
        </CardContent>
        </Card>
    );
}