import { Box, Button, Checkbox, Grid, Paper, Typography } from "@mui/material";
import React from "react";
// const styles={
//     root:{
//         border:"2px solid",
//         borderImageSource:"linear-gradient(180deg, #E1022B 0%, #EE3A00 10.94%, #F4B449 34.9%, #E3598F 58.85%, #22AD9A79.69%, #589D65 100% )"
//     }
// }

const Pricing = () => {
    return (
        <Box >
            <Box sx={{ color: "white" }} marginTop={8} textAlign="center">
                <Typography sx={{fontSize:{xs:"1rem", md:"3rem"}, fontWeight:"bold"}}>Pricing</Typography>
                <Typography sx={{fontSize:{xs:".85rem"}}}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsam, similique.</Typography>
            </Box>
            <Box sx={{ xs: { display: "block" }, display: "flex" }}>
                 
                    <Grid container  >
                        <Grid Item xs={12} md={6} sx={{
                        display: '',
                        '& > :not(style)': {
                            marginLeft:{
                                xs:"4.5rem",
                                md:"20rem"
                            },
                            marginTop:{
                                xs:"2rem",
                                md:"5rem"
                            },
                            width: {
                                xs:"250px",
                                md:"300px"
                            },
                            height: 380,
                            borderRadius: "1rem",
                            textAlign: "center",
                            borderColor: '#E1022B',
                            alignItems: "center",
                            justifyItems: "center",
                            background: 'black'


                        },
                    }}>
                            <Paper variant="outlined" sx={{ color: "white" }} >
                                <h3> Plan X</h3>
                                <hr width="10%" marginTop="-3rem" />
                                <Typography variant="" fontSize={13} textAlign="center">
                                    <Checkbox sx={{ color: "white" }} />
                                    Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                                </Typography>
                                <Typography variant="" fontSize={13} display="block">
                                    <Checkbox sx={{ color: "white" }} />
                                    Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                                </Typography>
                                <Typography variant="" fontSize={13}>
                                    <Checkbox sx={{ color: "white" }} />
                                    Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                                </Typography>
                                <Typography variant="" fontSize={13} display="block">
                                    <Checkbox sx={{ color: "white" }} />
                                    Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                                </Typography>

                                <Button variant="contained" sx={{ background: "gray", marginTop: "1rem", borderRadius: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }}>Open Ilpsium</Button>

                            </Paper>
                        </Grid>

                        <Grid Item xs={12} md={6}  sx={{
                    display: '',
                    '& > :not(style)': {
                        marginLeft:{
                            xs:"4.5rem", md: "4rem"
                        },
                        marginTop: "5rem",
                        width: {
                            xs:"250px",
                            md:"300px"
                        },
                        height: 380,
                        borderRadius: "1rem",
                        borderColor: '#E1022B',
                        textAlign: "center",
                        alignItems: "center",
                        justifyItems: "center",
                        background: 'black'


                    },
                }}>
                        <Paper variant="outlined" sx={{ color: "white" }} margin={2}>
                        <h3> Plan Y</h3>
                        <hr width="10%" marginTop="-3rem" />
                        <Typography variant="" fontSize={13} textAlign="center">
                            <Checkbox sx={{ color: "white" }} />
                            Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                        </Typography>
                        <Typography variant="" fontSize={13} display="block">
                            <Checkbox sx={{ color: "white" }} />
                            Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                        </Typography>
                        <Typography variant="" fontSize={13}>
                            <Checkbox sx={{ color: "white" }} />
                            Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                        </Typography>
                        <Typography variant="" fontSize={13} display="block">
                            <Checkbox sx={{ color: "white" }} />
                            Lorem ipsum dolor sit amet, abcd consectetur adipiscing elit.
                        </Typography>

                        <Button variant="contained" sx={{ background: "gray", marginTop: "1rem", borderRadius: "2rem", paddingLeft: "2rem", paddingRight: "2rem" }}>Open Ilpsium</Button>
                    </Paper>
                        </Grid>
                    </Grid>
            </Box>
        </Box>
    )
}

export default Pricing