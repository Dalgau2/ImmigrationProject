
import {Swiper,SwiperSlide} from "swiper/react"
import "swiper/swiper-bundle.css"
import "./swiperImmigration.css"
import { Box } from "@mui/material";
import data from "../ImmigrationNav/NavOption.json"
import { EffectCoverflow,Pagination,Autoplay,Navigation } from "swiper/modules";
const SwiperImmigration = () => {
  return (
  <Box className="main-Swiper_Conatiner" sx={{marginTop:"0px"}}>
     <Swiper className="Swiper_Conatiner"
     style={{padding:"230px"}}
     autoplay={{
        delay:1000,
        disableOnInteraction:false
     }}
    
     effect={'coverflow'}
     grabCursor={true}
 
     centeredSlides={true}
     slidesPerView={"auto"}
     coverflowEffect={{
       rotate:0,
       stretch:0,
       depth: 10,
    //    modifier:1.5,
    //    slideShadows: true,
     }}
    //  pagination={true}
     modules={[EffectCoverflow, Pagination,Autoplay]}
    //  initialSlide={Math.floor(data.length / 1)} // 
    //  loop={true}
    //  className="mySwiper"
     
     > 
    {data.map((dt)=>{
        return(
            <SwiperSlide className="slideOFimmigration" style={{background:"black",color:"white"}} key={dt.id}>{dt.id}</SwiperSlide>
        )
    })}
   </Swiper>
  </Box>
  );
};
export default SwiperImmigration;
