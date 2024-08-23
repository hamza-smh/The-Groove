// import * as React from 'react';
// import { useState, useRef } from 'react';
// import { Grid, Button } from '@mui/material';
// import { PlayArrow, Pause } from '@mui/icons-material';
// import play from "../../assets/mall/play.svg"
// import poster from "../../assets/mall/videoPoster.png"

// const VideoPlayer = () => {

//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlay = () => {
//     if (videoRef.current.paused) {
//       videoRef.current.play();
//       setIsPlaying(true);
//     } else {
//       videoRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <Grid container
//       sx={{
//         display: "flex", 
//         justifyContent: { md: "start", sm: "center", xs: "center" },
//         width:"100%",
//         mt: { md: 5, sm: 6, xs: 3 },
//         zIndex: '1',
//         alignItems: { md: "start", sm: "center", xs: "center" }
//       }}>

//       <Grid item md={12} sm={10} xs={8}
//         sx={{
//           //maxHeight:{md:"100%",sm:"auto"}
//           display: "flex",
//           justifyContent: "center"
//         }}>
//         <Grid
//           sx={{ 
//             zIndex: '2', position: 'relative', backgroundColor: "transparent", 
//             height: { md: "502px", sm: "400px", xs: "220px" } 
//           }}>
//           <video ref={videoRef}
//             loop
//             muted
//             poster={poster}
//             styles={{
//               position: 'absolute',
//               width: '100%',
//               height: '100%',
//               autoplay: "true"
//             }}
//           >
//             <source
//               src=""
//               type="video/mp4"
//             />
//           </video>


//           <Button
//             variant="contained"
//             //size="small"
//             sx={{
//               opacity: isPlaying ? "0.1" : "1",
//               backgroundColor: '#FFF',
//               color: '#fff',
//               //padding: '1%',
//               position: 'absolute',
//               top: "40%",
//               left: "50%",
//               transform: 'translate(-50%, -50%)',
//               zIndex: '9',
//               borderRadius: "50%",
//               width: "76px", height: "76px",
//               "&:hover": {
//                 background: "#FFF"
//               }

//             }}
//             onClick={handlePlay}>
//             {/* {isPlaying ? 'Pause' : 'Play'} */}
//             {isPlaying ? <Pause fontSize="large" /> : <img src={play} alt="" style={{ marginLeft: "10px" }} />}
//           </Button>
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
// export default VideoPlayer;


import * as React from 'react';
import { useState, useRef } from 'react';
import { Grid, Button } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import play from "../../assets/mall/play.svg";
import poster from "../../assets/mall/videoPoster.png";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Grid container
      sx={{
        display: "flex",
        justifyContent: { md: "flex-start", sm: "center", xs: "center" },
        alignItems: { md: "flex-start", sm: "center", xs: "center" },
        width:{md: "70%",sm:"90%",xs:"90%"},
        mt: { md: 5, sm: 6, xs: 3 },
        zIndex: '1',
        
      }}
    >
      <Grid item md={12} sm={10} xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          
        }}
      >
        <Grid
          sx={{
            position: 'relative',
            backgroundColor: "transparent",
            width: "100%",
            height: { md: "auto", sm: "auto", xs: "auto" },
            maxWidth: { md: "100%", sm: "100%", xs: "100%" }
          }}
        >
          <video ref={videoRef}
            loop
            muted
            poster={poster}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
            }}
          >
            <source
              src=""
              type="video/mp4"
            />
          </video>

          <Button
            variant="contained"
            sx={{
              opacity: isPlaying ? "0.1" : "1",
              backgroundColor: '#FFF',
              color: '#fff',
              position: 'absolute',
              top: "50%",
              left: "50%",
              transform: 'translate(-50%, -50%)',
              zIndex: '9',
              borderRadius: "50%",
              width: { md: "76px", sm: "60px", xs: "50px" },
              height: { md: "76px", sm: "60px", xs: "50px" },
              "&:hover": {
                background: "#FFF"
              }
            }}
            onClick={handlePlay}
          >
            {isPlaying ? <Pause fontSize="large" /> : <img src={play} alt="Play" style={{ width: '60%', height: '60%' }} />}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default VideoPlayer;
