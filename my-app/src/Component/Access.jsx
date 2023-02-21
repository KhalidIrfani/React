import { Button, Typography } from "@mui/material";
import mail from "./../Component/images/mail.png"
import { Box } from "@mui/system";

import React from "react";

const Access = () => {
    return (
        <Box>
            <Typography sx={{ color: "White", fontSize: { xs: "1rem", md: "1.5rem" }, fontWeight: "bold", textAlign: "center", marginTop: "3rem" }}>
                At your fingertips
            </Typography>
            <Typography sx={{ color: "White", fontSize: { xs: ".85rem", md: "2rem" }, textAlign: "center", marginTop: "1rem" }}>
                Access or upload anything in an instant of time
            </Typography>
            <Typography sx={{ color: "White", fontSize: { xs: "1rem", md: "1.5rem" }, textAlign: "center", marginTop: "3rem" }}>
                Subscribe to our Website
            </Typography>

            <Typography sx={{ color: "White", fontSize: { xs: "1rem", md: "1.5rem" }, textAlign: "center", marginTop: " .5rem" }}>
                Available exclusivery
            </Typography>

            <Box style={{ display:'flex', justifyContent: 'center', alignItems: 'center', overflow:"hidden"}}>
                <Typography align="center" textAlign="center" width="17%" marginTop={4} sx={{marginRight:{xs:"9rem", md:".3rem"}}}>
                    <input type="text" placeholder="Your email" style={{ borderRadius: '2rem', backgroundColor: 'white', color: "black", paddingLeft:{xs:"2rem", md:"2.4rem"}, paddingRight:{xs:"2rem", md:"2.4rem"},padding:"1rem"}} />
                </Typography>
            </Box>
            <Typography align="center" ><Button sx={{ background: "#EF2779", color: "White", textalign: "center", margin: "1.5rem", borderRadius: "2rem", paddingLeft: "4rem", paddingRight: "4rem" }}>Suscribe</Button>
            </Typography>
            <Typography align="end" marginRight={22} marginTop={-17} sx={{display:{xs:"none", md:"block"}}}><img src={mail} alt="mail" height={130} /></Typography>

        </Box>
    )
}

export default Access