import { Typography,Grid } from "@mui/material"
import VideoPlayer from "./video"
const Mall = () =>{
    return(
        <>
        <Grid sx={{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"25px",textAlign:{md:"left",sm:"left",xs:"center"},width:"100%"}}>

                <Grid sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingY: "25px" }}>
                <Typography sx={{color:"#FFF",fontSize:{md:"50px",sm:"50px",xs:"36px"},fontFamily:"Times New"}}>
                        Mall Of: Endless Possibilities
                </Typography>
                <Typography sx={{ color: "#FFF",width:{md:"55%",sm:"55%",xs:"91%"},textAlign:"center",fontSize:{md:"16px",sm:"16px",xs:"13px"},lineHeight:"23px"}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Typography>
            </Grid>
            <Grid sx={{ width: "100%", display: "flex", justifyContent: "center", }}>
                <VideoPlayer />
            </Grid>
        </Grid>
        </>
    )
}
export default Mall