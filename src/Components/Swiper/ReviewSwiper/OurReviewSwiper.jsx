import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Box } from "@mui/material";
import data from "../../../Components/ImmigrationNav/NavOption.json";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
const SwiperOfReviewSection = () => {
  return (
    <Box>
      <Swiper  style={{height:"310px",border:"2px solid white"}}
       autoplay={{
          delay:1000,
          disableOnInteraction:false
       }}
      spaceBetween={10}
       grabCursor={true}
       modules={[EffectCoverflow, Pagination,Autoplay]}
      //  initialSlide={Math.floor(data.length / 1)} // 
       loop={true}
      >
        <SwiperSlide style={{color:"white",maxWidth:"260px", border:"2px solid white",height:"310px",borderRadius:"10px"}}>
        hello
        </SwiperSlide>
        <SwiperSlide style={{color:"white",maxWidth:"260px", border:"2px solid white",height:"310px",borderRadius:"10px"}}>
        hello
        </SwiperSlide>
        <SwiperSlide style={{color:"white",maxWidth:"260px", border:"2px solid white",height:"310px",borderRadius:"10px"}}>
        hello
        </SwiperSlide>
        <SwiperSlide style={{color:"white",maxWidth:"260px", border:"2px solid white",height:"310px",borderRadius:"10px"}}>
        hello
        </SwiperSlide>
        <SwiperSlide style={{color:"white",maxWidth:"260px", border:"2px solid white",height:"310px",borderRadius:"10px"}}>
        hello
        </SwiperSlide>
      </Swiper>
    </Box>
  )
};
export default SwiperOfReviewSection;
