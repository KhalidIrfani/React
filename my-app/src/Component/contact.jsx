import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { LocationOn, MailOutline, StayCurrentPortrait } from "@mui/icons-material";
import React from "react";

const Contact = () => {
    return (
        <Box>
            <Typography sx={{ color: "white", fontSize: "2rem", textAlign: "center", marginTop: "4rem"}}>
                Contact Us
            </Typography>

            <Box>
                <Grid container>
                    <Grid Item xs={12} md={6} sx={{
                        display: '',
                        '& > :not(style)': {
                            marginLeft: {
                                xs: "4.5rem",
                                md: "20rem"
                            },
                            marginTop: {
                                xs: "2rem",
                                md: "5rem"
                            },
                            width: {
                                xs: "250px",
                                md: "330px"
                            },
                            height: 330,
                            borderColor: '#E1022B',
                            textAlign: "center",
                            justifyItems: "center",
                            background: 'black'


                        },
                    }}>
                        <Paper variant="outlined" sx={{ color: "white" }}>
                            <Typography marginTop={2} marginRight={2} >Contact Us</Typography>
                            <TextField id="standard-basic" sx={{ marginTop: "1rem", borderBottom:'2px solid white', width:'80%' }} label="Name" variant="standard" InputLabelProps={{
                                style: {
                                    color: 'White',
                                },
                            }} />
                            <TextField id="standard-basic" sx={{ marginTop: "1rem",  borderBottom:'2px solid white', width:'80%'  }} label="Email" variant="standard"   InputLabelProps={{
                                style: {
                                    color: 'White',
                                },
                            }} />
                            <TextField id="standard-basic" sx={{ marginTop: ".8rem",  borderBottom:'2px solid white', width:'80%'  }} label="Your Message" variant="standard" InputLabelProps={{
                                style: {
                                    color: 'White',
                                },
                            }}/>
                            <Button alignItems="start" justifyContent="start" sx={{ bgcolor: "#EF2779", color: "white", borderRadius: "2rem", paddingLeft: ".8rem", paddingRight: ".8rem", marginTop: "2.5rem", marginRight: {sx:"5rem", md:"13rem"} }}>Send</Button>
                        </Paper>
                    </Grid>

                    <Grid Item xs={12} md={6} sx={{
                        display: '',
                        '& > :not(style)': {
                            marginLeft: {
                                xs:"4rem",
                                md:"3rem"
                            },
                            borderColor: '#E1022B',
                            textAlign: "center",
                            alignItems: "center",
                            justifyItems: "center",
                            background: 'black'


                        },
                    }}>
                        <Box display="flex" mt={16}>
                            <LocationOn sx={{ color: "#EF2779", }} />
                            <Typography sx={{ color: "white", marginLeft: "1rem" }}>6386 Spring St undefined ,<br />
                                Georgia 12473 United States</Typography>
                        </Box>
                        <Box display="flex" mt={3}>
                            <StayCurrentPortrait sx={{ color: "#EF2779" }} />
                            <Typography sx={{ color: "white", marginLeft: "1rem" }}>(843) 555-0130</Typography>
                        </Box>

                        <Box display="flex" mt={3}>
                            <MailOutline sx={{ color: "#EF2779" }} />
                            <Typography sx={{ color: "white", marginLeft: "1rem" }}>willie.jennings@example.com</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Contact