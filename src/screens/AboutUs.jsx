import Navbar from "./Navbar";
import HeaderTitle from "../component/HeaderTitle";
import Footer from "../component/Footer";
import Meeting from "../component/Meeting";
import TrustedCompany from "../component/TrustedCompany";
import SwiperReview from "../component/SwiperReview";
import BannerSection from "../component/BannerSection";
import Title from "../component/Title";
import CardBox from "../component/CardBox";
import ImagePath from "../constant/ImagePath";
import CountUp from "react-countup";
const AboutUs = () => {
  return (
    <>
      <header className="bg-black 2xl:pb-44 pb-10">
        <div className="marging">
          <Navbar />
          <div className="mobile-space">
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
        </div>
      </header>
      <section className=" white-box lg:py-12 py-4">
        <div className=" marging grid md:grid-cols-4 grid-cols-1 justify-center items-center">
          <div className="counter-card md:border-r text-center md:text-left md:border-b-0 border-b border-solid frist-card">
            <h2 className="box-heading">
              <CountUp start={0} end={72} duration={2} delay={0.2} />k
            </h2>
            <p>Using Our Product</p>
          </div>
          <div className="counter-card md:border-r md:border-b-0 text-center md:text-left border-b border-solid ">
            <h2 className="box-heading">
              <CountUp start={0} end={68} duration={2} delay={0.2} />k
            </h2>
            <p className="capitalize">happy customer</p>
          </div>
          <div className="counter-card md:border-r md:border-b-0 text-center md:text-left border-b border-solid ">
            <h2 className="box-heading">
              <CountUp start={0} end={15} duration={2} delay={0.2} />
            </h2>
            <p className="capitalize">Year Experience</p>
          </div>
          <div className="counter-card text-center md:text-left">
            <h2 className="box-heading">
              <CountUp start={0} end={27} duration={2} delay={0.2} />
            </h2>
            <p className="capitalize">Awards Achievement</p>
          </div>
        </div>
      </section>
      <section className="marging mobile-space">
        <Meeting />
      </section>
      <section className="marging lg:!mt-14 !mt-7 mobile-space text-center xl:text-left">
        <TrustedCompany Header="Trusted By" HiddenPara="hidden" />
      </section>
      <section className="2xl:pt-32 xl:pt-24 lg:pt-20 pt-8 marging mobile-space">
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
      <section className="marging mobile-space content-slide">
        <SwiperReview />
      </section>
      <BannerSection />
      <Footer />
    </>
  );
};

export default AboutUs;
