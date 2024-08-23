import { Button, Grid, Typography } from "@mui/material"
import bkgHero from "../../assets/hero/bkgHero.png"
import bkgMbl from "../../assets/hero/bkgMbl.png"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = () => {
    return (
        <Grid container
            sx={{
                height: { md: "100vh", sm: "100vh", xs: "130vh" },
                backgroundImage: { md: `url('${bkgHero}')`, sm: `url('${bkgHero}')`, xs: `url('${bkgMbl}')` },
                backgroundPosition:
                {
                    md: "left top",
                    sm: "center center",
                    xs: "center 10%",
                },
                backgroundSize: { md: "100% 100%", sm: "100% 100%", xs: "cover" },
                backgroundRepeat: "no-repeat",
            }}
        >
            <Grid item md={5.74} sm={8.74}
                sx={{
                    background: "#00000085",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    padding: { md: "70px 0px 0px 36px", sm: "70px 0px 0px 36px", xs: "0px 0px 0px 10px" },

                }}>
                <Grid sx={{ width: { md: "66%", sm: "66%", xs: "78%" } }}>
                    <Typography sx={{ color: "#FFF", fontFamily: "Montserrat", fontSize: "13px", letterSpacing: "2.6px" }}>
                        KHAWAJA YANNI
                    </Typography>
                    <Typography mb={1.5} mt={2.5} sx={{ color: "#FFF", fontSize: { md: "65px", sm: "65px", xs: "40px" }, fontFamily: "Playfair Display, serif", width: "100%", lineHeight: "70px" }}>
                        The new<br /> era of luxury
                    </Typography>
                    <Typography my={2.5}
                        sx={{
                            color: "#FFF",
                            fontSize: { md: '15px', sm: "15px", xs: "12px" },
                            lineHeight: '23px',
                            wordSpacing: "2.5px",

                        }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.
                    </Typography>
                    <Button
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                            color: "#FFF",
                            textTransform: "inherit",
                            borderRadius: "10px",
                            padding: "8px 10px 8px 25px",
                            width: { md: "70%", sm: "70%", xs: "100%" }, textWrap: "nowrap"
                        }}>
                        Book reservation now
                        <ArrowForwardIcon sx={{ marginLeft: "25px" }} />
                    </Button>

                </Grid>
                <Grid sx={{ display: "flex", position: "absolute", bottom: "20px", left: "40%" }}>
                    <Grid mx={0.25} sx={{ width: "12px", height: "12px", backgroundColor: "#5B5552", borderRadius: "50%" }} />
                    <Grid mx={0.25} sx={{ width: "12px", height: "12px", backgroundColor: "#FFFFFF", borderRadius: "50%" }} />
                    <Grid mx={0.25} sx={{ width: "12px", height: "12px", backgroundColor: "#5B5552", borderRadius: "50%" }} />
                    <Grid mx={0.25} sx={{ width: "12px", height: "12px", backgroundColor: "#5B5552", borderRadius: "50%" }} />
                </Grid>
            </Grid>
        </Grid>
    )
}
export default Hero