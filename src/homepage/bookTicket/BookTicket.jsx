import { Grid, Typography,Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import krazy from "../../assets/bookTicket/Krazy.png"
import hawanim from "../../assets/bookTicket/Hawanim.png"
import picnic from "../../assets/bookTicket/picnic.png"
import purple from "../../assets/bookTicket/purple.png"

const BookTicket = () =>{
    return(
        <Grid>
            <Grid sx={{paddingLeft:{md:"142px",sm:"120px",xs:"10px"},paddingRight:{md:"0px",sm:"0px",xs:"10px"},overflowX:"hidden"}}>
            <Typography sx={{ color: "#FFF", fontSize: {md:"50px",sm:"50px",xs:"36px"}, fontFamily: "Times New",width:{md:"60%",sm:"60%",xs:"95%"} }}>
                Book General Access ticket and enjoy the attractions for free
            </Typography>
                <Button className="goldenButton"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                        color: "#FFF",
                        textTransform: "capitalize",
                        borderRadius: "10px",
                        padding: "8px 10px 8px 25px",
                        margin:"40px 0px",
                    }}>
                    Book General Access Ticket
                    <ArrowForwardIcon sx={{ marginLeft: "25px" }} />
                </Button>
                
                {/* Should have added overflowX:"scroll" */}
                <Grid sx={{display:{md:"flex",sm:"flex",xs:"none"}}}>
                    <Grid item md={3.9} pr={1} sx={{borderRadius:"30px"}}>
                        <img src={krazy} alt=""/>
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center" }}>
                            Little Krazy
                        </Typography>
                    </Grid>
                    <Grid item md={3.9} px={1} sx={{ borderRadius: "30px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }}>
                        <img src={hawanim} alt="" />
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center",width:"75%" }}>
                            Hawanim Groves City
                        </Typography>
                    </Grid>
                    <Grid item md={3.9} px={1} sx={{ borderRadius: "30px" }}>
                        <img src={picnic} alt="" />
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center" }}>
                            Picnic Market
                        </Typography>
                    </Grid>
                    <Grid item md={3.9} px={1} sx={{ borderRadius: "30px" }}>
                        <img src={purple} alt="" />
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center" }}>
                            Lucaworld
                        </Typography>
                    </Grid>
                </Grid>

                <Grid sx={{ display: { md: "none", sm: "none", xs: "flex" } }}>
                    <Grid item md={3.9} pr={1} sx={{ borderRadius: "30px" }}>
                        <img src={krazy} alt="" style={{height:"294px",width:"215px"}}/>
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center" }}>
                            Little Krazy
                        </Typography>
                    </Grid>
                    <Grid item md={3.9} px={1} sx={{ borderRadius: "30px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <img src={hawanim} alt="" style={{ height: "294px", width: "215px" }} />
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center", width: "75%" }}>
                            Hawanim Groves City
                        </Typography>
                    </Grid>
                    <Grid item md={3.9} px={1} sx={{ borderRadius: "30px" }}>
                        <img src={picnic} alt="" style={{ height: "294px", width: "215px" }} />
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center" }}>
                            Picnic Market
                        </Typography>
                    </Grid>
                    <Grid item md={3.9} px={1} sx={{ borderRadius: "30px" }}>
                        <img src={purple} alt="" style={{ height: "294px", width: "215px" }} />
                        <Typography my={2} sx={{ color: "#FFF", fontSize: "25px", fontFamily: "Times New", textAlign: "center" }}>
                            Lucaworld
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}
export default BookTicket;