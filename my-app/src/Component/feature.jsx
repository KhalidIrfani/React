import { Box } from "@mui/system";
import clock from "./../Component/images/clock.png"
import analytics from "./../Component/images/analytics.png"
import profile from "./../Component/images/profile.png"
import social from "./../Component/images/social.png"
import React from "react";
import { Grid, Typography } from "@mui/material";

const Feature = () => {
    return (
        <Box >

            <Box sx={{ color: "white", textAlign: "center", marginTop:{xs:"2rem"} }}>
                <Typography sx={{ fontSize: { xs: "1.2rem", md: "3rem" }, fontWeight: "bold" }}>Feature</Typography>
                <Typography sx={{ fontSize: { xs: ".85rem", md: "1rem" } }}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsam, similique.</Typography>
            </Box>
            <Box >
                <Box sx={{ color: "white", marginTop: "2rem" }}>
                    <Grid container>
                        <Grid item xs={12} md={3} alignItems="center" textAlign="center" >
                            <img src={clock} alt="clock" />
                            <Typography marginTop={1}>Lorem ipsum dolor sit amet,  <br /> adipisicing elit. Magnam, fuga.</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} marginTop={{ xs: "2rem", md: "1.4rem" }} alignItems="center" textAlign="center"  >
                            <img src={analytics} alt="analytics" />
                            < Typography marginTop={4}> <p>Lorem ipsum dolor sit amet, <br /> adipisicing elit. Magnam, fuga.</p></Typography>
                        </Grid>
                        <Grid item xs={12} md={3} marginTop={{ xs: "2rem", md: "1.5rem" }} alignItems="center" textAlign="center">
                            <img src={profile} alt="profile" />
                            <Typography marginTop={2}>Lorem ipsum dolor sit amet, <br /> adipisicing elit. Magnam, fuga.</Typography>
                        </Grid>
                        <Grid item xs={12} md={3} marginTop={3.5} textAlign="center" alignItems="center">
                            <img src={social} alt="social" />
                            <Typography marginTop={2}>Lorem ipsum dolor sit amet, <br /> adipisicing elit. Magnam, fuga.</Typography>
                        </Grid>
                    </Grid>

                </Box>
            </Box>



        </Box>
    )
}
export default Feature