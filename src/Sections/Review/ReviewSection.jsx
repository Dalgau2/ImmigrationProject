import { Box, Typography } from "@mui/material";
import "../Review/reviewSection.css";
import SwiperOfReviewSection from "../../Components/Swiper/ReviewSwiper/OurReviewSwiper";
const OurReviewsSection = () => {
  return (
    <Box className="ourReviews">
      <Box sx={{textAlign:"center",position:"relative",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{position:"absolute",top:"50%",color:"white",fontSize:"80px",fontFamily:"Alayna",fontWeight:"700",borderBottom:"10px solid rgb(254, 201, 22);",height:"95px"}}>Review & Testimonial</Typography>
      </Box>
      <Box sx={{marginTop:"110px"}}>
       <SwiperOfReviewSection/>
      </Box>
    </Box>
  );
};
export default OurReviewsSection;
