import Navbar from "./Navbar";
import HeaderTitle from "../component/custom/HeaderTitle";
import Footer from "../component/Footer";
import Meeting from "../component/custom/Meeting";
import TrustedCompany from "../component/custom/TrustedCompany";
// import React, { useState, useEffect } from "react";
import SwiperReview from "../component/custom/SwiperReview";
import BannerSection from "../component/custom/BannerSection";
import Title from "../component/custom/Title";
import CardBox from "../component/custom/CardBox";
import ImagePath from "../constant/ImagePath";
function AboutUs() {
  return (
    <>
      <header className="bg-black pb-44">
        <div className="marging">
          <Navbar />
          <HeaderTitle
            h1Title="About Us"
            headingPara="
                We’re a diverse group of designers, strategists, engineers and
                wordsmiths who make things people love to use. We help the
                world’s most progressive brands solve problems, seize
                opportunities and generate growth.
              "
            ButtonText="Get Started"
            buttonShow="hidden"
          />
        </div>
      </header>
      <section className="marging">
        <Meeting />
      </section>
      <section className="marging !mt-14">
        <TrustedCompany Header="Trusted By" HiddenPara="hidden" />
      </section>
      <section className="pt-32 marging">
        <Title
          headerContent="Industry Experience"
          paraContent="For over a decade, our team has tackled challenging projects across a wide variety of verticals. Here are just a few examples:"
          headingFont="box-heading"
        />
        <div className="mt-14 flex items-center gap-6">
          <div className="grid grid-cols-2 gap-6">
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
      <section className="marging content-slide">
        <SwiperReview />
      </section>
      <BannerSection />
      <Footer />
    </>
  );
}

export default AboutUs;
