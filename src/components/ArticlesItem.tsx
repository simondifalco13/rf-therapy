import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

interface BasicArticleProps{
    title:string,
    desc: string,
    img:string,
    price : string
}


const ArticlesItem = (props: BasicArticleProps) => {
    return(
        <>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 300,marginTop:5,marginLeft:5}}>
                    <CardMedia
                        component="img"
                        height="200"
                        image={props.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {props.desc}
                        <br/>
                        Prix : {props.price}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
};

export default ArticlesItem;