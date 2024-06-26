import HeaderTitle from "../component/HeaderTitle";
import Title from "../component/Title";
import Meeting from "../component/Meeting";
import { Swiper, SwiperSlide } from "swiper/react";
import swiperCore from "swiper/core";
import ImagePath from "../constant/ImagePath";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperReview from "../component/SwiperReview";
import TrustedCompany from "../component/TrustedCompany";
import Navbar from "../screens/Navbar";
import CardBox from "../component/CardBox";
import BoxText from "../component/BoxText";
import BannerSection from "../component/BannerSection";
import Footer from "../component/Footer";
swiperCore.use([Navigation, Autoplay]);
const Home = () => {
  return (
    <>
      <header className="bg-black">
        <div className="marging">
          <Navbar />
          <div className="mx-5 lg:mx-10">
            <HeaderTitle
              h1Title="Build digital product you actually"
              headingPara="Glide makes it easy to build and deploy custom tools your business needs and team will love — with clicks, not code."
              ButtonText="Get Started"
            />
          </div>
          <div className="swiper-cntainer pb-16">
            <Swiper
              slidesPerView={1}
              spaceBetween={25}
              autoplay={{ delay: 1500 }}
              loop
              className="text-white"
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <img
                  src={ImagePath.WATCHINHAND}
                  alt="Watch in Hand"
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={ImagePath.FARM}
                  alt="farming app"
                  className="w-full"
                />
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
                  src={ImagePath.WATCHINHAND}
                  alt="Watch in Hand"
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={ImagePath.FARM}
                  alt="farming app"
                  className="w-full"
                />
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
                  src={ImagePath.WATCHINHAND}
                  alt="Watch in Hand"
                  className="w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={ImagePath.FARM}
                  alt="farming app"
                  className="w-full"
                />
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
        </div>
      </header>
      <section className=" bg-white  marging mobile-space">
        <TrustedCompany
          HiddenPara="block"
          ParaContent="85,000 customer have already using our product."
        />
      </section>
      <section className="marging mobile-space">
        <Meeting />
      </section>
      <section className="marging content-slide mobile-space">
        <SwiperReview />
      </section>
      <section className="2xl:mt-40 xl:mt-20 mt-10 sm:mt-16 md:mt-20 lg:mt-24 bg-black text-white md:py-8 py-4">
        <div className="marging mobile-space">
          <Title
            headerContent="How we build future"
            paraContent={`Glide gives you the powers of a developer and a designer. Create remarkable tools to solve the business problems you thought you never could.`}
          />
          <div className="lg:mt-28 grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4 mt-10">
            <CardBox
              image={ImagePath.UNDERSTAND}
              background="black-box"
              spaces="black-box-space"
              headingCard="Understand"
              headingSpace="mt-2.5"
              headingFont="box-heading"
              paraData="Innovation and design come naturally once a solid foundation has been laid. We’ve seen amazing outcomes thanks to guerilla-style research and stakeholder alignment exercises.Innovation and design come naturally once a solid foundation has been laid. We’ve seen amazing outcomes thanks to guerilla-style research and stakeholder alignment exercises."
              paraSpace="my-2.5"
            >
              <div className="flex items-center flex-wrap gap-2.5">
                <BoxText boxTextData="User Journey Mapping" />
                <BoxText boxTextData="End-User / Stakeholder Interviews & Surveys" />
                <BoxText boxTextData="Current Product Assessments" />
                <BoxText boxTextData="Trendspotting" />
                <BoxText boxTextData="Persona Development" />
              </div>
            </CardBox>
            {/* 2 */}
            <CardBox
              image={ImagePath.UNDERSTAND}
              background="black-box"
              spaces="black-box-space"
              headingCard="Understand"
              headingSpace="mt-2.5"
              headingFont="box-heading"
              paraData="Innovation and design come naturally once a solid foundation has been laid. We’ve seen amazing outcomes thanks to guerilla-style research and stakeholder alignment exercises.Innovation and design come naturally once a solid foundation has been laid. We’ve seen amazing outcomes thanks to guerilla-style research and stakeholder alignment exercises."
              paraSpace="my-2.5"
            >
              <div className="flex items-center flex-wrap gap-2.5">
                <BoxText boxTextData="User Journey Mapping" />
                <BoxText boxTextData="End-User / Stakeholder Interviews & Surveys" />
                <BoxText boxTextData="Current Product Assessments" />
                <BoxText boxTextData="Trendspotting" />
                <BoxText boxTextData="Persona Development" />
              </div>
            </CardBox>
            {/* 3 */}
            <CardBox
              image={ImagePath.EXPLORE}
              background="black-box"
              spaces="black-box-space"
              headingCard="Explore"
              headingSpace="mt-2.5"
              headingFont="box-heading"
              paraData="With research, a firm understanding of the business goals and the end-users needs in hand we can comfortably design beautiful and memorable experiences."
              paraSpace="my-2.5"
            >
              <div className="flex items-center flex-wrap gap-2.5">
                <BoxText boxTextData="Connected Strategy Developent" />
                <BoxText boxTextData="UX Strategy & Design" />
                <BoxText boxTextData="Brand & Product Ecosystem Strategy" />
                <BoxText boxTextData="Ergonomics / Human Factors" />
              </div>
            </CardBox>
            {/* 4 */}
            <CardBox
              image={ImagePath.EXITUE}
              background="black-box"
              spaces="black-box-space"
              headingCard="Execute"
              headingSpace="mt-2.5"
              headingFont="box-heading"
              paraData="Ideas are only as good as their ability to become a reality. Our team has had the unique experience of working hand in hand with prototypers, manufacturers & developers to bring products to life."
              paraSpace="my-2.5"
            >
              <div className="flex items-center flex-wrap gap-2.5">
                <BoxText boxTextData="UI Prototypes" />
                <BoxText boxTextData="Software Specifications" />
                <BoxText boxTextData="Development Oversight" />
                <BoxText boxTextData="ID & Hardware Prototyping" />
                <BoxText boxTextData="Production Oversight" />
              </div>
            </CardBox>
          </div>
        </div>
      </section>
      <section className="xl:pt-32 pt-8 marging mobile-space lg:pt-20">
        <Title
          headerContent="Industry Experience"
          paraContent="For over a decade, our team has tackled challenging projects across a wide variety of verticals. Here are just a few examples:"
          headingFont="box-heading"
        />
        <div className="lg:mt-14 md:mt-10 flex flex-col xl:flex-row mt-7 items-center gap-6">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            <CardBox
              background="white-box"
              spaces="spacing-box"
              image={ImagePath.CODING}
              headingCard="Consumer IoT"
              headingFont="box-heading"
              paraData="For over a decade, our team has tackled challenging projects across a wide variety of verticals."
              headingSpace="white-heading-actual"
              headingSize="white-heading"
            />
            <CardBox
              background="white-box"
              spaces="spacing-box"
              image={ImagePath.MEDIC}
              headingCard="Health and Fitness"
              headingFont="box-heading"
              paraData="For over a decade, our team has tackled challenging projects across a wide variety of verticals."
              headingSpace="white-heading-actual"
              headingSize="white-heading"
            />
            <CardBox
              background="white-box"
              spaces="spacing-box"
              image={ImagePath.CONSUMER}
              headingCard="Consumer Electronics"
              headingFont="box-heading"
              paraData="For over a decade, our team has tackled challenging projects across a wide variety of verticals."
              headingSpace="white-heading-actual"
              headingSize="white-heading"
            />
            <CardBox
              background="white-box"
              spaces="spacing-box"
              image={ImagePath.HEXANDON}
              headingCard="Embedded System"
              headingFont="box-heading"
              paraData="For over a decade, our team has tackled challenging projects across a wide variety of verticals."
              headingSpace="white-heading-actual"
              headingSize="white-heading"
            />
          </div>
          <img src={ImagePath.MANWORKING} alt="manworking" />
        </div>
      </section>
      <BannerSection />
      <Footer />
    </>
  );
};

export default Home;
