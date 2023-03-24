import react from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper"
import { SliderData } from "../data";
import { Pagination } from "swiper";

const Slider = () =>{
    return(
        <Swiper
        pagination={{
            dynamicMainBullets: true,
        }}
        modules={[Pagination]}
        height={800}
        className="mySwiper"
    >
        {SliderData.map(slider =>{
            return(
                <SwiperSlide
                
                key={`slider-${slider.id}`}
                height={500}
                style={{
                    backgroundImage: `url(${slider.image})`
                }}
                >
                    
                    <h1>{slider.title}</h1>
                    <h2>{slider.subtitle}</h2>
                </SwiperSlide>
            );
})}
        <SwiperSlide>slide 1</SwiperSlide>
        
    </Swiper>
    );
}

export default Slider;