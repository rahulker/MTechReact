import { useRef } from "react";
import ImagePath from "../../constant/ImagePath";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore from "swiper/core";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
swiperCore.use([Navigation, Autoplay, Pagination]);
import PropTypes from "prop-types";

function SwiperContentSlide({ Content, Image }) {
  return (
    <div className="grid grid-cols-3 ">
      <div className="container-content col-span-2">
        <h2>{Content}</h2>
        <div className="flex items-center user-details gap-4">
          <img src={Image} alt="user" />
          <p>
            Ovi Tisler, <span> Director of Engineering, Grubhub</span>
          </p>
        </div>
      </div>
      <img
        src={ImagePath.CARPARK}
        alt="cark park in parking"
        className="w-full"
      />
    </div>
  );
}

function SwiperReview() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  //   const paginationPart = useRef(null);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        loop
        autoplay={{ delay: 1500 }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        // pagination={paginationPart.current}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          //   swiper.params.pagination = paginationPart.current;
        }}
      >
        {/* 1 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, earum dolores fugit nesciunt deserunt autemcorporis officiis pariatur veniam eveniet!"
            Image={ImagePath.USER1}
          />
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="We got a Glide app out to a few hundred drivers with literally two hours of effort. Building this in our native app would've taken weeks."
            Image={ImagePath.USER2}
          />
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, earum dolores fugit nesciunt deserunt autemcorporis officiis pariatur veniam eveniet!"
            Image={ImagePath.USER3}
          />
        </SwiperSlide>
        {/* 1 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, earum dolores fugit nesciunt deserunt autemcorporis officiis pariatur veniam eveniet!"
            Image={ImagePath.USER1}
          />
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="We got a Glide app out to a few hundred drivers with literally two hours of effort. Building this in our native app would've taken weeks."
            Image={ImagePath.USER2}
          />
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, earum dolores fugit nesciunt deserunt autemcorporis officiis pariatur veniam eveniet!"
            Image={ImagePath.USER3}
          />
        </SwiperSlide>
        {/* 1 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, earum dolores fugit nesciunt deserunt autemcorporis officiis pariatur veniam eveniet!"
            Image={ImagePath.USER1}
          />
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="We got a Glide app out to a few hundred drivers with literally two hours of effort. Building this in our native app would've taken weeks."
            Image={ImagePath.USER2}
          />
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <SwiperContentSlide
            Content="Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur, earum dolores fugit nesciunt deserunt autemcorporis officiis pariatur veniam eveniet!"
            Image={ImagePath.USER3}
          />
        </SwiperSlide>
      </Swiper>
      <div className=""></div>
    </>
  );
}

SwiperContentSlide.propTypes = {
  Content: PropTypes.string,
  Image: PropTypes.string,
};
export default SwiperReview;
