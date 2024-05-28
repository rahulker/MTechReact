import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore from "swiper/core";
import PropTypes from "prop-types";
import ImagePath from "../constant/ImagePath";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
swiperCore.use([Navigation, Autoplay]);
function TrustedCompany({ ParaContent, Header, HiddenPara }) {
  return (
    <div className="grid grid-cols-4 items-center">
      <div>
        <p className={`${HiddenPara}`}>{ParaContent}</p>
        <h2>{Header}</h2>
      </div>
      <div className="col-span-3">
        <Swiper
          slidesPerView={6}
          autoplay={{ delay: 1500 }}
          loop
          className="text-white"
        >
          <SwiperSlide>
            <img src={ImagePath.WATCH} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.FARM} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.PARKING} alt="parking photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.WATCH} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.FARM} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.PARKING} alt="parking photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.WATCH} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.FARM} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.PARKING} alt="parking photo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
TrustedCompany.propTypes = {
  ParaContent: PropTypes.string,
  Header: PropTypes.string,
  HiddenPara: PropTypes.string,
};

export default TrustedCompany;
