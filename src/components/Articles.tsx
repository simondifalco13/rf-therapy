import React from "react";
import NavBar from "./NavBar";

import CSS from 'csstype';
import { Grid } from "@mui/material";
import ArticlesItem from "./ArticlesItem";

const divDisplay : CSS.Properties={
    display: "flex",
};

//START
interface BasicArticleProps{
    title:string,
    desc: string,
    img:string,
    price : string
}

const artA : BasicArticleProps={
    title : "Labradorite",
    desc: "Pierre de protection....",
    img:"./medias/labradorite.jpg",
    price:"12$"
};

const artB : BasicArticleProps={
    title : "Malachite",
    desc: "Pierre de protection....",
    img:"./medias/malachite.jpg",
    price:"12$"
};

const artC : BasicArticleProps={
    title : "Fluorite",
    desc: "Pierre de protection....",
    img:"./medias/fluorite.jpg",
    price:"12$"
};

const articles=[artA,artB,artC];

const items=articles.map((a) => 
    <ArticlesItem desc={a.desc} img={a.img} title={a.title} price={a.price}/>
);

//END

const Articles = () => {
    return(
        <>
             <NavBar/>
            <h2>Articles de la boutique</h2>
            <Grid container spacing={1} justifyContent="center">
                {items}
            </Grid>
        </>
    );
};

export default Articles;