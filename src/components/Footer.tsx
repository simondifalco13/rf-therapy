import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import CSS from 'csstype';


const divFooter : CSS.Properties={
    textAlign: "left"
};
const Footer = () =>{
    return(
        <>
            <div style={divFooter}>
                <CopyrightIcon/> Romina Francia
            </div>
        </>
    );
};

export default Footer;