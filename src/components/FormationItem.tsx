import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";

interface BasicFormProps{
    title:string,
    desc: string,
    img:string
}

const FormationItem = (props : BasicFormProps) => {

    return(
        <>
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 345,marginTop:5,marginLeft:5}}>
                    <CardMedia
                        component="img"
                        height="280"
                        image={props.img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {props.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Participer</Button>
                        <Button size="small">Partager</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
};

export default FormationItem;