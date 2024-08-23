import { useState,useEffect } from "react"
import { AppBar, Box, Grid,Typography } from "@mui/material"
import { data } from "./data"

export const NavItems = () => {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        function handleScroll() {
        const isScrolled = window.scrollY === 0;
            setScrolled(!isScrolled);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Box sx={{ position: "absolute", top: "100px", display: { md: "block", sm: "none", xs: "none" } }}>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 'none',
                    opacity: 1,
                    top:"90px",
                    paddingX: { md: "140px", sm: "50px", xs: "0px" },
                    paddingY: "15px",
                    background: "transparent",
                    backgroundImage:scrolled? 'linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3))':"",
                    borderTop:"0.5px solid #767575",
                    borderBottom: "0.5px solid #767575",
                }}
            >
        <Grid sx={{ display:"flex", justifyContent: "space-between", width: "100%",margin:"1px 0px" }}>
            {
                data.map((item, index) => (
                    <Grid key={index}>
                        <Typography sx={{ color: "#FFF", fontSize: { md: "13px",sm:"10px" },textTransform:"uppercase",letterSpacing: "2.6px" }}>
                            {item.title}
                        </Typography>
                    </Grid>
                ))
            }
        </Grid>
            </AppBar>   
        </Box>
    )      
};