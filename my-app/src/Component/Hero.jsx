import { Box, Button, Grid, Typography } from "@mui/material";
import Rectangle from './images/Rectangle.png';
import './css/hero.css'
import React from "react";


const Hero = () => {

    return (
        <Box>
            <Grid container display="flex"  justifyContent="space-between" sx={{flexDirection:{xs:"column-reverse", md:"row"}}}>
                <Grid item xs={12} md={6}  >
                    <Box sx={{ color: 'white', marginTop: { md: "7rem", xs: "2rem" }, marginLeft:{xs:"2.5rem", md:"7rem"}}}>
                        <Typography sx={{ fontSize: { md: "4rem", xs: "2rem" }, fontWeight: { md: "Bold", xs: "bold" } }}>Bridge the <br /> Gap</Typography>
                        <Typography sx={{ fontSize: { xs: ".8rem", md: "1.2rem" } }}>Lorem ipsum dolor,
                            consectetur adipiscing <br /> elit  Pellentesque aliquet
                            libero eu volutpat <br />sss hendrerit,
                            dolor dui consectetur dolor <br /> leo.</Typography>
                        <Button sx={{ background: "#EF2779", color: "white",fontSize:{xs:".77rem", md:".9rem"} ,margin:{xs:"1rem", md:"1rem"}, borderRadius: "2rem", paddingLeft:{xs:"1rem", md:"2rem"}, paddingRight:{xs:"1rem", md:"2rem"} }}>REGISTER</Button>
                        <Button sx={{ background: "gray", color: "white", borderRadius: "2rem", paddingLeft:{xs:"1rem", md:"2rem"}, paddingRight:{xs:".89rem", md:"2rem"} }}>REVIEW</Button>
                    </Box>
                </Grid>

                <Grid className="right-item" item xs={12} sm={12} md={4} lg={6}>
                    <img
                        className="branding-pattern"
                        src={Rectangle} alt="rectangle"
                    />
                </Grid>
            </Grid>
        </Box>
    )
}
export default Hero;
