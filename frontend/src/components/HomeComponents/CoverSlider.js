import React from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Button, Typography } from "@mui/material";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { slides } from "../../Shared/SharedData";

const CoverSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      modules={[Pagination, Autoplay]}
      navigation={false}
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000 }}
      speed={1000}
      // autoplay={false}
      loop={true}
      className="homeSwiper"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={slide.id}>
          <div
            className="slideContent"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {activeIndex === index && (
              <motion.div
                className="overlayBox"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                {/* <Typography variant="h1" component="b" className="testShankh">Shankh air</Typography> */}
                <Typography variant="h1">{slide.heading}</Typography>
                <Typography variant="body1" component="p">
                  {slide.text}
                </Typography>
                <motion.div
                  className="btnWrapper"
                  initial={{ y: 120, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  <Button
                    variant="link"
                    className="coverBtn bg-orange btnIcon D-font"
                    style={{ fontSize: "16px" }}
                  >
                    {slide.buttonText}
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default CoverSlider;
