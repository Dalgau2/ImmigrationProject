import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./swiperImmigration.css";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import data from "../ImmigrationNav/NavOption.json";
import imge from "../../assets/Images/homebackground.246fe7ba.png";
import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { delay } from "framer-motion";
import SwiperCardForImmigration from "../CardComponent/CardForSwiper";
const SwiperImmigration = () => {
  return (
    <Box
      className="main-Swiper_Conatiner"
      sx={{ marginTop: "0px", border: "0px solid red", width: "100%" }}
    >
      <Swiper
        effect={"coverflow"}
         autoplay={{
           delay: 2500,
           disableOnInteraction: false,
         }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        //  pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={true}
        className="mySwiperForImmigration"
      >
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">2</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">3</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">4</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">5</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration"><SwiperCardForImmigration/></SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">6</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">7</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">8</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">9</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">10</SwiperSlide>
        <SwiperSlide className="mySwiperslideForImmigration">hello</SwiperSlide>
      </Swiper>
    </Box>
  );
};
export default SwiperImmigration;


