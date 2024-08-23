import {Button, Grid,Typography } from "@mui/material";
import map from "../../assets/place/map.png";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Place=()=>{
    return(
        <Grid container sx={{ paddingX: {md:"142px",sm:"142px",xs:"10px"},display:"flex",flexDirection:{md:"row",sm:"row",xs:"column-reverse"} }}>
            <Grid item md={7} sx={{display:"flex"}}>
                <img src={map} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item md={5} sx={{display:"flex",flexDirection:"column",color:"#FFF",justifyContent:"center"}}>
                <Typography sx={{fontSize:"13px",letterSpacing:"2.6px",lineHeight:"23px"}}>
                    EXPERIENCE THE GROVES
                </Typography>
                <Typography my={{md:4,sm:4,xs:1}} sx={{ fontSize: {md:"50px",sm:"50px",xs:"36px"}, letterSpacing: "2.6px", fontFamily: 'Playfair Display, serif',lineHeight:"64px" }}>
                    Find your place
                </Typography>
                <Typography sx={{ fontSize: "15px", letterSpacing: "2.6px",lineHeight:"23px",width:"100%" }}>
                    Our interactive map will show you the way to the shops and restaurants that you want to see.
                </Typography>
                <Button
                    className="goldenButton"
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                        color: "#FFF",
                        textTransform: "capitalize",
                        borderRadius: "10px",
                        padding: "8px 25px",
                        margin: {md:"40px 0px",sm:"40px 0px",xs:"30px 0px 0px 0px"},
                        width: "45%",
                        textWrap:"nowrap",
                        width:{md:"72%",sm:"50%",xs:"65%"}
                    }}
                >
                    Open the Map
                    <ArrowForwardIcon sx={{ marginLeft: "15px" }} />
                </Button>
            </Grid>
        </Grid>
    )
}
export default Place;