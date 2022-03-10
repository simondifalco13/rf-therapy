import React from "react";
import FormationItem from "./FormationItem";
import NavBar from "./NavBar";
import CSS from 'csstype';
import { Grid } from "@mui/material";

const css = require('../styles/formations.css')

const divDisplay : CSS.Properties={
    display: "flex",
};


interface BasicFormProps{
    title:string,
    desc: string,
    img:string
}

//START : HARDCODE 
const formation:BasicFormProps={
    img:"./medias/formation.jpg",
    title:"Formation factice",
    desc:"lorem ipsum"
}
const formationTwo:BasicFormProps={
    img:"./medias/formation2.jpg",
    title:"Formation factice",
    desc:"lorem ipsum"
}
var formations =[formation,formationTwo];
//END 

const items=formations.map((f) => 
    <FormationItem desc={f.desc} img={f.img} title={f.title} />
);



const Formations = () =>{
    return(
        <>
            <NavBar/>
            <Grid container spacing={1} justifyContent="center">
                {items}
            </Grid>
        </>
    );
};
export default Formations;