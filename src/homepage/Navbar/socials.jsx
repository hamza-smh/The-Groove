import { Button } from "@mui/material"
import tiktok from "../../assets/navbar/tiktok.svg"
import insta from "../../assets/navbar/insta.svg"
import sc from "../../assets/navbar/sc.svg"
import twitter from "../../assets/navbar/twitterx.svg"

export const Socials =() =>{
    return(
        <>
            <Button
                variant="contained"
                size="small"
                sx={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "transparent", minWidth: "5px",
                    width: "30px", height: "30px",
                    borderRadius: "50%",
                    marginX: "10px",
                    boxShadow:"none",
                    "&:hover": {
                        background: "#AF894B",
                    }
                }}
            >
                <img src={tiktok} alt="" />
            </Button>
            <Button
                variant="contained"
                size="small"
                sx={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "transparent", minWidth: "5px",
                    width: "30px", height: "30px",
                    borderRadius: "50%",
                    marginX: "10px",
                    boxShadow:"none",
                    "&:hover": {
                        background: "#AF894B",
                    }
                }}
            >
                <img src={insta} alt="" />
            </Button>
            <Button mx={2}
                variant="contained"
                size="small"
                sx={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "transparent", minWidth: "5px",
                    width: "30px", height: "30px",
                    borderRadius: "50%",
                    marginX: "10px",
                    boxShadow: "none",
                    "&:hover": {
                        background: "#AF894B",
                    }
                }}
            >
                <img src={twitter} alt="" />
            </Button>
            <Button mx={2}
                variant="contained"
                size="small"
                sx={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "transparent", minWidth: "5px",
                    width: "30px", height: "30px",
                    borderRadius: "50%",
                    boxShadow: "none",
                     marginLeft: "5px",
                     //marginRight: "10px",
                    "&:hover": {
                        background: "#AF894B",
                    }
                }}
            >
                <img src={sc} alt="" />
            </Button>
        </>
    )
}