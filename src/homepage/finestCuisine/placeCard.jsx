import {Button, Grid, Typography } from "@mui/material";
import right from "../../assets/mall/right.svg";

export const PlaceCard = ({ img, name, price }) => {
    return (
        <Grid sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "38px",
            opacity: 1,
            backdropFilter: "blur(30px)",
            filter: "brightness(1.2)",
            color: "#FFFFFF",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            gap: "8px", 
        }}>
            <img src={img} alt={name} style={{ borderRadius: '12px', marginBottom: '16px', width: '100%' }} />
            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Grid sx={{ display: "flex", flexDirection: "column",padding:"25px" }}>
                    <Typography sx={{ fontSize: {md:'18px',sm:"18px",xs:"25px"}, fontWeight: 'bold' }}>
                        {name}
                    </Typography>
                    <Grid sx={{ background: "#AD8749", borderRadius: "23px", padding: "4px 8px", marginTop: "8px" }}>
                        <Typography sx={{
                            textAlign: 'left',
                            font: { md: "normal normal medium 13px/23px Inter", sm: "normal normal medium 13px/23px Inter", xs: "normal normal medium 9px/23px Inter" },

                            letterSpacing: "2.6px",
                            color: "#FFFFFF",
                            textTransform: "uppercase",
                            textWrap:"nowrap",

                            fontStyle: "normal",
                            fontWeight: "500", 
                            fontSize: {md:"13px",sm:"13px",xs:"9px"},
                            lineHeight: "23px",
                            fontFamily: 'Inter, sans-serif',
                        }}>
                            {price} SR PER GUEST
                        </Typography>
                    </Grid>
                </Grid>
                <Grid>
                    <Button disableRipple sx={{"&:hover":{background:"transparent"}}}>
                    <img src={right} alt="Arrow Icon" />
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}