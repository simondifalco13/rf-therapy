import { Box, Grid } from "@mui/material";
import React from "react";
import ContactInformation from "./ContactInformations";
import MapLocation from "./MapLocation";
import NavBar from "./NavBar";
import { purple } from '@mui/material/colors';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import TungstenIcon from '@mui/icons-material/Tungsten';
import CSS from 'csstype';
import Footer from "./Footer";

const color = purple[100];

const boxStyle : CSS.Properties={
    backgroundColor : "#f3e5f5" 
};

const divImg: CSS.Properties={
    marginTop:"20px",
    marginBottom:"20px"
};



const Welcome = () => {
    return(
        <>
            <NavBar/>
            <div style={divImg}>
                <img src="./medias/logo.jpg" width={300} height="300" />
            </div>
            <Box style={boxStyle}
                sx={{ borderRadius: 1,
                    border:1,
                    borderColor:"#ba68c8",
                    paddingTop:"5px"
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}  >
                        <TungstenIcon/>
                        <h3>Conseils en lithothérapie et aromathérapie</h3>
                        <p>Un doute ? Besoin de conseils ? Nous déterminerons pour vous les solutions selon vos besoins et votre situation.</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <CoPresentIcon/>
                        <h3>Praticienne en thérapie comportementale</h3>
                        <p>Règlons vos conflits intérieurs et avancez dans une meilleure direction</p>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <AutoGraphIcon/>
                        <h3>Coaching</h3>
                        <p>L'impression de faire du sur place, besoin de se développer ? Le coaching vous permettra de devenir une meilleure version de vous même</p>
                    </Grid>
                </Grid>
            </Box>
            <Grid container>
                <Grid item xs={12}>
                    <ContactInformation/>
                </Grid>
                <Grid item xs={12}>
                    <MapLocation/>
                </Grid>
            </Grid>
            <Footer/>
        </>
    );
};

export default Welcome;