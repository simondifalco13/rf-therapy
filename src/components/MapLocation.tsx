import * as React from 'react';
import '../styles/map.css';
import CSS from 'csstype';


const mapStyle : CSS.Properties ={
    margin: '20px',
    border : '0',
    minWidth: '320',
    width:'400',
    height : '400'
};

//PASSER EN PROPS WIDTH HEIGHT SELON LE TYPE D'écran
const MapLocation = ()=>{

    return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.8555707773817!2d4.451076515624109!3d50.387890879466724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c22662107be39b%3A0x18fe5a2fc6ba7585!2sRue%20du%20Ry%20Oursel%20142%2C%206010%20Charleroi!5e0!3m2!1sfr!2sbe!4v1646649900940!5m2!1sfr!2sbe" 
        style={mapStyle}
        loading="lazy"
        ></iframe>
    );
};

export default MapLocation;