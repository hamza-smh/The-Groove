
import BookTicket from "./bookTicket/BookTicket"
import CurateExperience from "./curateExperience/CurateExperience"
import FinestCuisine from "./finestCuisine/FinestCuisine"
import GetTicket from "./getTicket/GetTicket"
import Hero from "./hero/Hero"
import Mall from "./mall/Mall"
import NavBar from "./Navbar/Navbar"
import { NavItems } from "./Navbar/NavItems"
import { Grid } from "@mui/material"
import Place from "./place/Place"
import Footer from "./footer/Footer"
const HomePage = () => {
    return (
        <>
            {/* <Grid sx={{ width: "100%", backgroundImage: 'linear-gradient(to right, #283606, #0F1500)',overflowY:"visible",}}>
                <Grid sx={{ position: "fixed",zIndex:"99" }}>
                    <NavBar />
                    <Grid sx={{ position: "absolute", top: "100px",display:{md:"block",sm:"block",xs:"none"} }}>
                        <NavItems />
                    </Grid>
                </Grid> */}
                <NavBar />
                <NavItems />
                <Hero />
                <Mall />
                <GetTicket />
                <BookTicket />
                <FinestCuisine />
                <CurateExperience />
                <Place />
                <Footer />
            {/* </Grid> */}
        </>
    )
}
export default HomePage