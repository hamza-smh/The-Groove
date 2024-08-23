import { Grid, Typography, Button, Box } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import hawanim from "../../assets/bookTicket/Hawanim.png";
import exp from "../../assets/experience/exp.png";
import events from "../../assets/experience/events.png";

const CurateExperience = () => {
    return (
        <Grid container sx={{ paddingY: {md:"50px",sm:"",xs:"50px"}, paddingX: {md:"142px",sm:"50px",xs:"10px"}, position: "relative",overflow:"hidden" }}>
            <Grid item md={4} sx={{ display: "flex", flexDirection: "column", zIndex: 2,justifyContent:"flex-start",alignItems:"left",padding:{md:"100px 40px",sm:"50px 40px",xs:"40px 0px"} }}>
                <Typography sx={{ color: "#FFF", fontSize:{md: "50px",sm:"50px",xs:"36px"}, fontFamily: "Playfair Display, serif",width:{md:"95%",sm:"90%",xs:"70%"},lineHeight:"64px" }}>
                    Curate your experience as you like
                </Typography>
                <Button
                    className="goldenButton"
                    sx={{
                        display: {md:"flex",sm:"flex",xs:"none"},
                        justifyContent: "space-between",
                        backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                        color: "#FFF",
                        textTransform: "capitalize",
                        borderRadius: "10px",
                        padding: "8px 25px",
                        margin: "40px 0px",
                        width:{md:"85%",sm:"40%",xs:"90%"}
                    }}
                >
                    Book Tickets
                    <ArrowForwardIcon sx={{ marginLeft: "15px" }} />
                </Button>
                <Button
                    className="goldenButton"
                    sx={{
                        display: {md:"none",sm:"none",xs:"flex"},
                        justifyContent: "space-between",
                        backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                        color: "#FFF",
                        textTransform: "capitalize",
                        borderRadius: "10px",
                        padding: "8px 25px",
                        margin: "40px 0px",
                        width: { md: "85%", sm: "80%", xs: "90%" },
                        fontSize:"13px"
                    }}
                >
                    Book General Access Ticket
                    <ArrowForwardIcon sx={{ marginLeft: "15px" }} />
                </Button>
            </Grid>

            <Grid item md={8} sx={{ display: "flex", alignItems: "center", justifyContent: "space-around", position: "relative", zIndex: 1 }}>
                <Box sx={{ position: "relative", flex: "0 0 auto", }}>
                    <img src={hawanim} alt="Restaurants" style={{ borderRadius: "30px", width: "100%", position: "relative", right: "0px" }} />
                    <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Playfair Display, serif", textAlign: "center" }}>
                        Restaurants
                    </Typography>
                </Box>
                <Box sx={{ position: "relative", flex: "0 0 auto", }}>
                    <img src={exp} alt="Experiences" style={{ borderRadius: "30px", width: "100%", position: "relative", right: "-10px" }} />
                    <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Playfair Display, serif", textAlign: "center" }}>
                        Experiences
                    </Typography>
                </Box>
                <Box sx={{ position: "relative", flex: "0 0 auto" }}>
                    <img src={events} alt="Events" style={{ borderRadius: "30px", width: "100%", position: "relative", right: "-20px" }} />
                    <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Playfair Display, serif", textAlign: "center" }}>
                        Events
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default CurateExperience;
