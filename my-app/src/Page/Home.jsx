import { Box } from "@mui/system";
import React from "react";
import Access from "../Component/Access";
import Contact from "../Component/contact";
import Feature from "../Component/feature";
import Footer from "../Component/footer";
import Navbar from "../Component/navbar";
import Pricing from "../Component/pricing";
import Hero from "../Component/Hero"

const Home=()=>{
    return (
<Box>
<Navbar />
      <Box>   
      <Hero />
        <Feature/>
        <Pricing />
        <Access />
        <Contact />
        <Footer />
      </Box>
</Box>
    )
}

export default Home