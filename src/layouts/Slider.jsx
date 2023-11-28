import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";


function Slider() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <h1>Busca de forma segura y eficiente</h1>
        <img src="src/assets/img/busqueda.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Manten tus datos de forma organizada</h1>
        <img src="src/assets/img/datos.avif" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <h1>Gestion inventario optimizada</h1>
        <img src="src/assets/img/gestion.avif" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
