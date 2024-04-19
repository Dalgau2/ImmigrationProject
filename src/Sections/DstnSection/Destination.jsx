import { Box, Typography, Button ,Paper} from "@mui/material";
import "./dsection.css";
const ExploarDestination = () => {
  return (
    <Box className="DestinationContainer" sx={{ padding: "40px" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontFamily: "cential", fontSize: "48px", fontWeight: 700 }}
          >
            Explore Stays in Trending Destination
          </Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"center"}}>
        <Box className="searchBarOfHearderSection" sx={{marginBottom:"0px"}}>
          <Box
        component={Paper}
        elevation={4}
        sx={{
          width: "420px",
          height: "60px",
          borderRadius: "60px",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          boxShadow: "101",
        }}
      >
       
        <Button
          variant="contained"
          sx={{
            marginLeft: "5px",
            height: "35px",
            borderRadius: "40px",
            backgroundColor: " #FEC916",
            color: "white",
            textTransform: "inherit",
          }}
        >
        All
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "5px",
            // width: "80px",
            height: "35px",
            borderRadius: "40px",
            backgroundColor: "black",
            color: "white",
            textTransform: "inherit",
          }}
        >
            Instant
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "5px",
            // width: "80px",
            height: "35px",
            borderRadius: "40px",
            backgroundColor: "black",
            color: "white",
            textTransform: "inherit",
          }}
        >
            In a Weak
        </Button>
        <Button
          variant="contained"
          sx={{
            marginLeft: "5px",
            // width: "80px",
            height: "35px",
            borderRadius: "40px",
            backgroundColor: "black",
            color: "white",
            textTransform: "inherit",
          }}
        >
            In a Month
        </Button>
      </Box>
      </Box>
        </Box>
        {/* <Box> 
         <Typography>Exploooooooooooooooo</Typography>
         </Box> */}
      </Box>
    </Box>
  );
};
export default ExploarDestination;
