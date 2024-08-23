import { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Grid,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
} from "@mui/material";
import './useStyles.css';
import logo from "../../assets/navbar/logo.png";
import cross from "../../assets/navbar/cross.png";
import logoMbl from "../../assets/navbar/logoMbl.png";
import LanguageDropdown from "./LanguageDropDown";
import { Socials } from "./socials";
import option from "../../assets/navbar/option.png"
import { data } from "./data";


const Navbar = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
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



    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setIsDrawerOpen(open);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1, }}>

                <AppBar position="fixed" className="webAppBar"
                    sx={{
                        zIndex: "99",
                        boxShadow: 'none',
                        opacity: 1,
                        background: "transparent",
                        backgroundImage: scrolled ? 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.3))' : "",
                        paddingX: { md: "140px", sm: "10px", xs: "0px" },
                        paddingY: "15px",
                        width: '100%',
                        display: "flex",
                    }}
                >

                    <Toolbar className="spaceBtwn"
                        sx={{
                            paddingRight: { md: "0px", sm: "30px", xs: "15px" },
                            paddingLeft: { md: "0px", sm: "30px", xs: "15px" },
                            justifyContent: "space-between",
                            display: "flex",
                            flexDirection: "row",
                        }}
                    >


                        <Grid
                            sx={{
                                display: { md: "block", sm: "block", xs: "none" },
                            }}
                        >
                            <Button disableRipple href="/">
                                <img src={logo} alt="" />
                            </Button>
                        </Grid>
                        <Grid
                            sx={{
                                display: { md: "none", sm: "none", xs: "block" },
                            }}
                        >
                            <Button disableRipple href="/">
                                <img src={logoMbl} alt="" />
                            </Button>
                        </Grid>

                        <Grid sx={{ display: "flex", alignItems: "center" }}>
                            <Grid sx={{ display: { md: "flex", sm: "none", xs: "none" }, flexDirection: "row" }}>
                                <Socials />
                            </Grid>
                            <Button className="goldenButton"
                                sx={{
                                    display: { md: "flex", sm: "none", xs: "none" },
                                    justifyContent: "space-between",
                                    backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                                    color: "#FFF",
                                    textTransform: "capitalize",
                                    borderRadius: "10px",
                                    padding: "8px 45px",
                                    marginLeft: "10px",

                                }}>
                                Login
                            </Button>
                            <Grid sx={{ display: { md: "flex", sm: "none", xs: "none" }, flexDirection: "row" }}>
                                <LanguageDropdown />
                            </Grid>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                className="menuButton"
                                sx={{
                                    display: { md: "none", sm: "block", xs: "block" },
                                    outline: 'none',
                                }}
                            >
                                <img src={option} alt="" />
                            </IconButton>
                        </Grid>
                    </Toolbar>
                    <Drawer
                        anchor='left'
                        open={isDrawerOpen}
                        onClose={toggleDrawer(false)}
                        sx={{
                            '& .MuiDrawer-paper': {
                                width: '100%',
                            }
                        }}
                    >
                        <Grid
                            role='presentation'
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                            sx={{
                                backgroundImage: "linear-gradient(to right, #283606, #0F1500)",
                                display: "flex",
                                alignItems: "space-between",
                                flexDirection: "column",
                                height: "100%",
                                width: "100%",
                                overflowY: "auto"
                            }}
                        >
                            <Grid
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    fontWeight: "600",
                                    textAlign: "center",
                                    margin: "20px 0px",
                                    textDecoration: "none",
                                    padding: "0px",
                                    width: "100%",
                                    color: "#FFF",
                                    justifyContent: "space-between",
                                    "&:hover": {
                                        backgroundColor: "#366510",
                                        color: "#fff",
                                    },
                                }}
                            >

                                <Grid item xs={10} pl={3}>
                                    <img src={logoMbl} alt="" />
                                </Grid>
                                <Grid item xs={2} px={1}>
                                    <img src={cross} alt="" style={{ marginRight: "10px" }} />
                                </Grid>

                            </Grid>
                            {data?.map(item => (
                                <Button
                                    disableFocusRipple
                                    disableRipple
                                    disableElevation
                                    key={item.id}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "flex-start",
                                        fontWeight: "600",
                                        textAlign: "center",
                                        margin: "0px",
                                        textDecoration: "none",
                                        padding: "20px 30px",
                                        width: "100%",
                                        color: "#FFF",
                                        borderRadius: "0px",
                                        borderTop: "0.5px solid #FFF",
                                        "&:hover": {
                                            backgroundColor: "#B38D4F",
                                            color: "#fff",
                                        },
                                    }}
                                >
                                    <Typography xs={12} sx={{ fontSize: "13px", letterSpacing: "2.6px" }}>
                                        {item.title}
                                    </Typography>

                                </Button>
                            ))}
                            <Grid sx={{ borderTop: "0.5px solid #FFF", padding: "20px 10px" }}>
                                <LanguageDropdown />
                                <Button className="goldenButton"
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        backgroundImage: 'linear-gradient(to bottom, #af894b, #DBBA74)',
                                        color: "#FFF",
                                        textTransform: "capitalize",
                                        borderRadius: "10px",
                                        padding: "8px 45px",
                                        marginLeft: "10px",
                                        marginTop: "40px",
                                        marginBottom: "80px"

                                    }}>
                                    Login
                                </Button>
                                <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "30px" }}>
                                    <Socials />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Drawer>


                </AppBar>

            </Box>
        </>
    );
};

export default Navbar;



