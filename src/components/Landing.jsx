import React from "react";
import { Card, CardContent } from "@mui/material";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Nav } from "./Nav";
import { Foods } from "./Foods";
import { Colors } from "./Colors";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Card sx={{bgcolor:"wheat", height:"700px"}}>
            <CardContent>
                <Nav />
            <Routes>
                <Route path="/" element={<Foods />} />
                <Route path="/colors" element={<Colors />} />
            </Routes>
            </CardContent>
        </Card>
        </BrowserRouter>
    );
}