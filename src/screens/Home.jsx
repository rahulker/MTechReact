import Title from "../component/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore from "swiper/core";
import ImagePath from "../constant/ImagePath";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import TrustedCompany from "../component/TrustedCompany";
swiperCore.use([Navigation, Autoplay]);
function Home() {
  return (
    <>
      <header>
        <div className="marging">
          <Title
            h1Title="Build digital product you actually"
            headingPara="Glide makes it easy to build and deploy custom tools your business needs and team will love — with clicks, not code."
            ButtonText="Get Started"
          />
        </div>
        <div className="swiper-cntainer pb-16">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={25}
            autoplay={{ delay: 1500 }}
            loop
            className="text-white"
          >
            <SwiperSlide>
              <img
                src={ImagePath.WATCH}
                alt="Watch in Hand"
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagePath.FARM} alt="farming app" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImagePath.PARKING}
                alt="parking photo"
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImagePath.WATCH}
                alt="Watch in Hand"
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagePath.FARM} alt="farming app" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImagePath.PARKING}
                alt="parking photo"
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImagePath.WATCH}
                alt="Watch in Hand"
                className="w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={ImagePath.FARM} alt="farming app" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={ImagePath.PARKING}
                alt="parking photo"
                className="w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </header>
      <section className=" bg-white">
        <div className="marging ">
          <TrustedCompany
            HiddenPara="block"
            ParaContent="85,000 customer have already using our product."
          />
        </div>
      </section>
    </>
  );
}

export default Home;
