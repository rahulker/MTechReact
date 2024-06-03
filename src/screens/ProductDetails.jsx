import Navbar from "./Navbar";
import Title from "../component/Title";
import BannerSection from "../component/BannerSection";
import Footer from "../component/Footer";
import ImagePath from "../constant/ImagePath";
import ProblemCards from "../component/ProblemCards";
const ProductDetails = () => {
  return (
    <>
      <header className="product-details">
        <div className="nav-bg">
          <div className="marging">
            <Navbar />
            <div className="header-container">
              <h1 className="text-white mt-80">
                Welcome to the Future of Parking: Smart Parking System
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="marging ">
        <div className="flex items-center mt-28 justify-between">
          {/* content */}
          <div className="car-device-detail">
            <h2>Smart Parking System</h2>
            <h3 className="mt-8">Revolutionize Your Parking Experience</h3>
            <p className="my-8">
              ManekTech Innovations LLP, we are on a mission to reshape the
              future through groundbreaking technological solutions. Our team of
              visionary engineers, designers, and developers will be dedicated
              to pushing the boundaries of whats possible, transforming complex
              challenges into elegant, user-centric solutions that drive
              progress.
            </p>
            <p className="my-8">
              Our commitment to creating smart solutions for real-world
              challenges is unwavering. Through a fusion of cutting-edge
              technologies including Beacon, Bluetooth, GPS data, AI/ML, and
              Machine programming.
            </p>
          </div>
          {/* Photo */}
          <img src={ImagePath.DETAILPARKING} alt="car parking device" />
        </div>
      </section>
      <section className="white-box mt-16 problems">
        <div className="marging problm-content">
          <Title
            headerContent="Problem Statement"
            paraContent="Our commitment to creating smart solutions for real-world challenges
            is unwavering. Through a fusion of cutting-edge technologies
            including Beacon, Bluetooth, GPS data, AI/ML, and Machine
            programming."
            headingFont="box-heading"
          />
          <div className="mt-10">
            <ProblemCards
              problemImage={ImagePath.POPULATION}
              alt="population"
              problemTitle="Increasing Population"
              problemDetails="India's rapid growth is driving an increasing demand for
                additional parking infrastructure. Unlike prominent global
                cities such as Berlin and London, where street parking is a
                common convenience, India struggles with a scarcity of such
                facilities. Consequently, despite the absence of adequate street
                parking options, many individuals in India continue to resort to
                parking on the streets, often resulting in fines imposed by law
                enforcement."
            />
          </div>
        </div>
      </section>
      <BannerSection />
      <Footer />
    </>
  );
};

export default ProductDetails;
