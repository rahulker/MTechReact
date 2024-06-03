import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore from "swiper/core";
import PropTypes from "prop-types";
import ImagePath from "../constant/ImagePath";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
swiperCore.use([Navigation, Autoplay]);
const TrustedCompany = ({ ParaContent, Header, HiddenPara }) => {
  return (
    <div className="grid grid-cols-4 items-center">
      <div>
        <p className={`${HiddenPara} trusted-para`}>{ParaContent}</p>
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
            <img src={ImagePath.AMD} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.BROAN} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.FRIEDRICH} alt="parking photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.GE} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.HUAWEI} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.PEPSICO} alt="parking photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.AMD} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.BROAN} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.FRIEDRICH} alt="parking photo" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.GE} alt="Watch in Hand" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.HUAWEI} alt="farming app" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImagePath.PEPSICO} alt="parking photo" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
TrustedCompany.propTypes = {
  ParaContent: PropTypes.string,
  Header: PropTypes.string,
  HiddenPara: PropTypes.string,
};

export default TrustedCompany;
