import Navbar from "./Navbar";
import Scroll from "../constant/Scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../component/HeaderTitle";
import Title from "../component/Title";
import ProductBanner from "../component/ProductBanner";
import Footer from "../component/Footer";
import ImagePath from "../constant/ImagePath";
import BannerSection from "../component/BannerSection";
import { NavLink } from "react-router-dom";

const Product = () => {
  return (
    <>
      <header className="bg-black 2xl:pb-44 pb-10">
        <div className="marging">
          <Navbar />
          <div className="mobile-space">
            <HeaderTitle
              h1Title="They’re all passion products"
              headingPara="We bring exceptional product experiences to life. From multinational enterprises to early-stage startups, our clients have one thing in common — big ideas. Most of our projects are under wraps, but here’s a sampling of stuff we can show you."
              ButtonText="Get Started"
              buttonShow="hidden"
            />
          </div>
        </div>
      </header>
      <section>
        <div className="product-heading lg:pt-28 pt-8 marging mobile-space">
          <Title
            headerContent="Wide Variety Of Products"
            paraContent="Our commitment to creating smart solutions for real-world challenges is unwavering. Through a fusion of cutting-edge technologies including Beacon, Bluetooth, GPS data, AI/ML, and Machine programming."
            headingFont="box-heading"
          />
        </div>
        <div className="mt-6">
          <ProductBanner
            Reverse={false}
            ImageProduct={ImagePath.PARKINGPRODUCT}
            Heading="Car Parking Sensor"
            IconImage={ImagePath.UMBRALA}
            IconImage2={ImagePath.PACKAGE}
            IconImage3={ImagePath.MOBILE}
            IconImage4={ImagePath.SECURE}
            IconContent="Weather proof reliability"
            IconContent2="Robust build system"
            IconContent3="Robust build system"
            IconContent4="Innovative theft-preventive solution"
          />
        </div>
        <div className="lg:mt-56 mt-10">
          <ProductBanner
            Reverse={true}
            ImageProduct={ImagePath.COW}
            Heading="Dairy Farming Digital Device"
            IconImage={ImagePath.STAR}
            IconImage2={ImagePath.COMPUTER}
            IconImage3={ImagePath.LEAF}
            IconImage4={ImagePath.CHECK}
            IconContent="Weather proof reliability"
            IconContent2="Robust build system"
            IconContent3="Robust build system"
            IconContent4="Innovative theft-preventive solution"
          />
        </div>
        <div className="lg:mt-56 mt-10">
          <ProductBanner
            Reverse={false}
            ImageProduct={ImagePath.BOAT}
            Heading="SmartGuide For Uttar Pradesh Tourism"
            IconImage={ImagePath.HEART}
            IconImage2={ImagePath.WATCH}
            IconImage3={ImagePath.BULB}
            IconImage4={ImagePath.BATTRYICON}
            IconContent="Comprehensive Health Tracking"
            IconContent2="Sleek and Stylish Design"
            IconContent3="Intelligent Fitness Coaching"
            IconContent4="Long Battery Life"
          />
        </div>
        <div className="lg:mt-56 mt-10 2xl:mb-32 lg:mb-44 mb-10">
          <ProductBanner
            Reverse={true}
            ImageProduct={ImagePath.SETUP}
            Heading="SmartGuide For Uttar Pradesh Tourism"
            IconImage={ImagePath.SHEILD}
            IconImage2={ImagePath.CODEICON}
            IconImage3={ImagePath.TRADECHART}
            IconImage4={ImagePath.NICEREVIEW}
            IconContent="Enhanced Security"
            IconContent2="Seamless Integration"
            IconContent3="User Productivity Insights"
            IconContent4="Compliance Assurance"
          />
        </div>
        <div className="mt-20 w-fit mx-auto">
          <NavLink
            to="/product-details"
            className="header-btn"
            onClick={Scroll}
          >
            <FontAwesomeIcon icon={faCircle} fade className="mr-1" /> Load
            More...
          </NavLink>
        </div>
      </section>
      <BannerSection />
      <Footer />
    </>
  );
};

export default Product;
