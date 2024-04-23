import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import cn from "../../assets/Images/md.webp"
const SwiperCardForImmigration = () => {
  return (
    <Box  sx={{padding:0,maxWidth:320,position:"absolute"}}>
      <Card sx={{  maxWidth: 300,padding:1,height:"300px",borderRadius:"10px" ,backgroundColor:"white"}}>
        <CardMedia
          component="img"
          height="150"
          image={cn}
          alt="Paella dish"
          sx={{
            backgroundColor: "white",
            marginRight: "15px",
            borderRadius: "10px",
          }}
        />
        
      </Card>{" "}
    </Box>
  );
};
export default SwiperCardForImmigration;
