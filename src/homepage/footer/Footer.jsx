import { Grid,Button, Typography } from "@mui/material"
import appStore from "../../assets/footer/appStore.png";
import googlePlay from "../../assets/footer/googlePlay.png";
import appStoreMbl from "../../assets/footer/AppStoreMbl.png";
import googlePlayMbl from "../../assets/footer/googlePlayMbl.png";
import logo from "../../assets/footer/logo.png";
import logoMbl from "../../assets/navbar/logoMbl.png";
import { Socials } from "../Navbar/socials";
import visa from "../../assets/footer/visa.png"
import master from "../../assets/footer/mastercard.png"
import aExpress from "../../assets/footer/american.png"

const Footer = ()=>{
    return(
        <Grid container sx={{ borderTop: "1px solid #575C4A", padding: {md:"60px 142px",sm:"60px 50px",xs:"10px 10px"}, color: "#FFF" }}>
            <Grid item xs={12} sx={{display:{md:"none",sm:"none",xs:"flex"},padding:"15px 0px"}}>
                <img src={logoMbl} alt="" />
            </Grid>
            <Grid sx={{ display: "flex", flexDirection: {md:"row",sm:"row",xs:"column"}, justifyContent: "space-between" }}>
                <Grid item md={8} sm={6} xs={12} sx={{display:"flex"}}>
                    <Typography sx={{ fontSize:{md: "50px",sm:"50px",xs:"36px"}, letterSpacing: "2.6px", fontFamily: 'Playfair Display, serif', lineHeight: {md:"64px",sm:"64px",xs:"44px"},width:{md:"90%",sm:"100%",xs:"90%"} }}>
                        Join us for an unforgettable experience
                    </Typography>
                </Grid>
                <Grid item md={4} sm={6} xs={12} mt={{md:0,sm:0,xs:3}}>
                    <Typography mb={3} mt={{md:"",sm:"",xs:4}} sx={{ fontSize: "13px", letterSpacing: "2.6px",lineHeight: "23px",textAlign:{md:"left",sm:"center",xs:"left"} }}>
                        DOWNLOAD THE GROVES APP
                    </Typography>
                    <Grid sx={{display:{md:"flex",sm:"flex",xs:"none"},}}>
                        <Button>
                            <img src={appStore} alt="" />
                        </Button>
                        <Button>
                            <img src={googlePlay} alt="" />
                        </Button>

                    </Grid>
                    <Grid my={{ md: "", sm: "", xs: 3 }} sx={{ display: { md: "none", sm: "none", xs: "flex" },flexWrap:"nowrap", }}>
                        <Button sx={{minWidth:"0px",padding:"0px"}}>
                            <img src={appStore} alt="" style={{ width: "95%",padding:"0px 5px" }} />
                        </Button>
                        <Button sx={{ minWidth: "0px", padding: "0px" }}>
                            <img src={googlePlayMbl} alt="" style={{ width: "95%", padding: "0px 5px" }}/>
                        </Button>

                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} my={{md:10,sm:10,xs:2}} sx={{display:"flex",justifyContent:"space-between",flexDirection:{md:"row",sm:"row",xs:"column"}}}>
                <Grid item md={4} sm={4}>
                    <Typography mb={3} sx={{ fontSize: "13px", letterSpacing: "2.6px", lineHeight: "23px",textTransform:"uppercase" }}>
                        Location
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "15px", lineHeight: "23px",display:{md:"flex",sm:"flex",xs:"none"} }}>
                        Al-Hizam Park Al-Semairi, Yanbu Al Bahr 46455 Riyadh Saudi Arabia
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "15px", lineHeight: "23px", display: { md: "none", sm: "none", xs: "flex" },width:"75%" }}>
                        Al-Hizam Park<br /> Al-Semairi, Yanbu Al Bahr 46455 Riyadh Saudi Arabia
                    </Typography>
                </Grid>

                <Grid item md={2} sm={3}>
                    <Typography mb={3} sx={{ fontSize: "13px", letterSpacing: "2.6px", lineHeight: "23px", textTransform: "uppercase" }}>
                        Working Hours
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "15px", lineHeight: "23px", }}>
                        Sun until Thurs: 4:00PM<br /> Fri & Sat: 2:30PM
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "15px", lineHeight: "23px", }}>
                       Gates Close at:<br /> Sat until Wed: 12:00AM <br />Thu & Fri: 12:30AM
                    </Typography>
                </Grid>
                <Grid item md={5} xs={4}>
                    <Typography mb={3} sx={{ fontSize: "13px", letterSpacing: "2.6px", lineHeight: "23px", textTransform: "uppercase" }}>
                        GUEST SERVICE CALL
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "15px", lineHeight: "23px", }}>
                        cc@thegroves-sa.com <br />920001672 
                    </Typography>
                    <Typography mb={3} sx={{ fontSize: "15px", lineHeight: "23px", }}>
                        +966556631309
                    </Typography>
                </Grid>

            </Grid>
            <Grid item md={12} sm={12} sx={{display:"flex",justifyContent:"space-between"}}>
                <Grid item md={6} sm={6} sx={{display:{md:"flex",sm:"flex",xs:"none"}}}>
                    <img src={logo} alt=""/>
                </Grid>
                <Grid item md={6} sm={6} sx={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
                    <Socials />
                </Grid>
            </Grid>
            <Grid item md={12} sm={12} mt={6} sx={{ display: "flex", justifyContent: "space-between", flexDirection: { md: "row", sm: "row", xs: "column" } }}>
                <Grid item md={6.7}  sx={{ display: "flex", justifyContent: "space-between", flexDirection: { md: "row", sm: "column", xs: "column" } }}>
                    <Grid my={{md:"",sm:"",xs:1}} sx={{display:"flex",alignItems:"center"}}>
                        <Typography>Terms & Conditions</Typography>
                    </Grid>
                    <Grid my={{ md: "", sm: "", xs: 1 }} sx={{ display: "flex", alignItems: "center" }}>
                        <Typography>Privacy Policy</Typography>
                    </Grid>
                    <Grid my={{ md: "", sm: "", xs: 1 }} sx={{ display: "flex", alignItems: "center" }}>
                        <Typography>©2023 The Groves for Entertainment</Typography>
                    </Grid>
                </Grid>
                <Grid item md={5.2} my={{ md: "", sm: "", xs: 1 }} sx={{display:"flex",justifyContent:{md:"flex-end",sm:"flex-end",xs:"flex-start"},alignItems:"center"}}>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "10px",justifyContent:{md:"flex-end",sm:"flex-end",xs:"flex-start"} }}>
                        <img src={visa} alt="" />
                    </Grid>
                    <Grid sx={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                        <img src={master} alt="" />
                    </Grid>
                    <Grid sx={{ display: "flex", alignItems: "center" }}>
                        <img src={aExpress} alt="" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Footer