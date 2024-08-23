import { Grid, Typography, Button } from "@mui/material";
import { PlaceCard } from "./placeCard";
import { places } from "./places";

const FinestCuisine = () =>{
    return (
        <Grid>
            <Grid sx={{ padding: { md: "80px 142px", sm: "80px 50px",xs:"0px 10px" }, overflowX: "hidden",display:"flex",flexDirection:"column",alignItems:"center" }}>
                <Grid sx={{ width: {md:"60%",sm:"80%",xs:"100%"},marginBottom:"40px" }}>
                <Typography sx={{ color: "#FFF", fontSize: {md:"50px",sm:"50px",xs:"36px"}, fontFamily: "Times New",textAlign:{md:"center",sm:"center" ,xs:"left"}}}>
                    Experience the Finest Cuisine
                </Typography>
                <Typography sx={{
                    textAlign: "center",
                    font: "normal normal normal 15px/23px Inter",
                    letterSpacing: "0px",
                    color:" #FFFFFF",
                    opacity: '1',
                    display:{md:"flex",sm:"flex",xs:'none'}
                    
                }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
                </Grid>
                <Grid container spacing={2}>
                    {places.map((item, index) => (
                        <Grid item lg={6} md={6} sm={6} xs={12} key={index}>
                            <PlaceCard img={item.img} name={item.title} price={item.price} />
                        </Grid>
                    ))}
                </Grid>
        
            </Grid>

        </Grid>
    )
}
export default FinestCuisine;