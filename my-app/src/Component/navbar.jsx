
import { Button, Grid, Typography, } from "@mui/material";
import { Box } from "@mui/system";



const Navbar = () => {


    return (
        <Box sx={{ paddingTop: "1rem"}}>

            <Grid container display="flex" justifyContent="space-between" md={6} xs={12} sx={{borderBottom:"1px solid white", marginLeft:{xs:"0rem", md:"1.5rem"}}}>
                <Grid Item >
                    <Button sx={{ color: 'white' }}><Typography sx={{ fontSize: { md: "1.5rem", xs: "1rem" } }}>BRIDGE</Typography></Button>
                    <Button sx={{ color: 'white' }}><Typography sx={{ fontSize: { xs: ".85rem", md: ".9rem" } }}>Plan</Typography></Button>
                    <Button sx={{ color: 'white' }}><Typography sx={{ fontSize: { xs: ".85rem", md: ".9rem" } }}>Guide</Typography>
                    </Button>
                    </Grid>

                    <Grid Item sx={{paddingTop:{xs:"0rem", md:".5rem"}}}>
                        <Button sx={{ color: 'white'}} ><Typography sx={{ fontSize: { md: ".9rem", xs: ".85rem" } }}>Sing Up</Typography></Button>
                        <Button sx={{ color: 'white' }} ><Typography sx={{ fontSize: { md: ".9rem", xs: ".85rem" } }}>LogIn</Typography></Button>
                    </Grid>                    
            </Grid>
            
        </Box>
    )
}

export default Navbar;