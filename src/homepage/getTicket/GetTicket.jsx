import { Grid, Typography } from "@mui/material"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import right from "../../assets/mall/right.svg";
const GetTicket = () =>{
    return(
        
        <Grid sx={{padding:{md:"50px 220px",sm:"50px 100px",xs:"50px 10px"}}}>
            <Grid sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "25px",
                opacity: 1,
                backdropFilter: "blur(30px)", 
                filter: "brightness(1.2)",
                color: "#FFFFFF",
                padding: {md:"30px 70px",sm:"30px 45px",xs:"30px 20px"}, 
            }}>
                <Typography mb={4} sx={{letterSpacing:"2.6px",fontSze:"13px"}}>25 SR/GUEST</Typography>
                <Typography sx={{ fontSize: "30px",fontFamily: "Times New",display:{md:"flex",sm:"flex",xs:"none"},justifyContent:"space-between",alignItems:"center" }}>
                    Get your General Access Ticket
                    <img src={right} alt=""/>
                </Typography>
                <Typography sx={{ fontSize: "30px", fontFamily: "Times New", display: { md: "none", sm: "none", xs: "flex" }, justifyContent: "space-between", alignItems: "center" }}>
                    Get your General Access Ticket
                </Typography>
                <Typography my={2} sx={{fontSize:"15px",width:{md:"75%",sm:"75%",xs:"100%"}}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text e
                </Typography>
                <Typography sx={{ fontSize: "20px", fontFamily: "Times New", display: { md: "none", sm: "none", xs: "flex" }, justifyContent: "flex-end", alignItems: "center" }}>
                    <img src={right} alt="" />
                </Typography>
            </Grid>
        </Grid>
        
    )
}
export default GetTicket