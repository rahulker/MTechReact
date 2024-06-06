import Navbar from "./Navbar";
import UniqueSelling from "../component/uniqueSelling";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Title from "../component/Title";
import BannerSection from "../component/BannerSection";
import Footer from "../component/Footer";
import ImagePath from "../constant/ImagePath";
import MoreProduct from "../component/moreProduct";
import CustomerTarget from "../component/CustomerTarget";
import ProblemCards from "../component/ProblemCards";
import { NavLink } from "react-router-dom";
import Scroll from "../constant/Scroll";
const ProductDetails = () => {
  return (
    <>
      <header className="product-details">
        <div className="nav-bg">
          <div className="marging">
            <Navbar />
            <div className="header-container ">
              <h1 className="text-white mt-80 mobile-space">
                Welcome to the Future of Parking: Smart Parking System
              </h1>
            </div>
          </div>
        </div>
      </header>
      <section className="marging mobile-space ">
        <div className="grid lg:grid-cols-2 items-center grid-cols-1 2xl:mt-28 lg:mt-20  mt-10 lg:justify-between justify-center lg:gap-5 xl:gap-10 gap-4 justify-items-center">
          {/* content */}
          <img
            src={ImagePath.DETAILPARKING}
            alt="car parking device"
            className="lg:hidden"
          />

          <div className="car-device-detail">
            <h2>Smart Parking System</h2>
            <h3 className="mt-8 lg:mt-5">
              Revolutionize Your Parking Experience
            </h3>
            <p className="xl:my-8 md:my-5 my-4">
              ManekTech Innovations LLP, we are on a mission to reshape the
              future through groundbreaking technological solutions. Our team of
              visionary engineers, designers, and developers will be dedicated
              to pushing the boundaries of whats possible, transforming complex
              challenges into elegant, user-centric solutions that drive
              progress.
            </p>
            <p className="lg:my-8 md:my-5 my-4">
              Our commitment to creating smart solutions for real-world
              challenges is unwavering. Through a fusion of cutting-edge
              technologies including Beacon, Bluetooth, GPS data, AI/ML, and
              Machine programming.
            </p>
          </div>
          {/* Photo */}
          <img
            src={ImagePath.DETAILPARKING}
            alt="car parking device"
            className="hidden lg:block lg:w-2/5 xl:w-full"
          />
        </div>
      </section>
      {/* Problems */}
      <section className="white-box lg:mt-16 mt-6 problems">
        <div className="marging problm-content mobile-space">
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
              imageShow="block"
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
          <div className="mt-10">
            <ProblemCards
              problemImage={ImagePath.PARKINGHABITS}
              alt="Parking Habits"
              imageShow="block"
              problemTitle="Parking Habits"
              problemDetails="A striking contrast emerges between parking habits in India and foreign nations. In many countries, people willingly pay parking fees without hesitation, seamlessly integrating this cost into their parking routine. Yet, in India, this virtuous cycle of voluntary payment faces hurdles due to widespread skepticism about universal and honest fee compliance. This doubt is fueled by a tendency to favor cheaper parking fees over heftier police fines for street parking."
            />
          </div>
          <div className="mt-10">
            <ProblemCards
              problemImage={ImagePath.NONPROPER}
              alt="Comprehensive Parking Management"
              imageShow="block"
              problemTitle="Comprehensive Parking Management"
              problemDetails="Essentially, India's rapidly growing cities urgently require expanded parking options, akin to well-established norms in major global metropolises. Overcoming the lack of street parking and cultivating a culture of sincere, self-motivated parking fee payment are significant challenges in achieving comprehensive parking management within the Indian context."
            />
          </div>
        </div>
      </section>
      {/* hardware & Software */}
      <section>
        <div className="!mt-10 marging hardware mobile-space">
          <Title
            headerContent="Components Of Our Solution"
            paraContent="Our commitment to creating smart solutions for real-world challenges is unwavering. Through a fusion of cutting-edge technologies including Beacon, Bluetooth, GPS data, AI/ML, and Machine programming."
            headingFont="box-heading"
          />
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center mt-16">
          <div className="relative">
            <img
              src={ImagePath.PARKINGMACHINE}
              alt="Parking maschine photo"
              className="w-full"
            />
            <div className="absolute text-center text-white content-floating ">
              <p className="Hardware-title bg-white text-black rounded-sm mb-5 inline-block">
                Hardware
              </p>
              <p className="2xl:px-16 px-2.5 photo-content hardware-content">
                Through diligent research and innovation, we have developed our
                own hardware tailored to Indian conditions. Our meticulous
                approach included testing the devices resilience by fully
                submerging it in water, addressing waterlogging challenges
                prevalent in certain streets. This comprehensive in-house
                development has not only ensured a device perfectly suited for
                local conditions but has also significantly slashed its cost by
                half.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src={ImagePath.PARKINGAPP}
              alt="Parking maschine app"
              className="w-full"
            />
            <div className="absolute text-center text-white content-floating ">
              <p className="Hardware-title bg-white text-black rounded-sm mb-5 inline-block">
                Software
              </p>
              <p className="2xl:px-16 px-2.5 photo-content hardware-content">
                Each parking slot will be categorized into zones and seamlessly
                integrated into our mobile app. Users will have the convenience
                of checking slot availability within a specific zone directly
                from the app. Moreover, they can effortlessly make parking
                payments through the app and access a comprehensive history of
                their parking activities for reference.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* cards */}
      <section className="my-20 mobile-space">
        <div className="flex mt-10 flex-col items-center 2xl:flex-row gap-5">
          <div className="text-column ">
            <h2>Unique Selling Proposition</h2>
            <p>Smart Parking, Smarter Features: Our Competitive Edge</p>
          </div>
          {/* mobile */}
          <div className="grid sm:grid-cols-2 2xl:hidden lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <div>
              <UniqueSelling
                CardImage={ImagePath.UMBRALA}
                ImageAlt="Umbrella icon"
                CardTitle="Weather proof Reliability"
              />
            </div>
            <div>
              <UniqueSelling
                CardImage={ImagePath.PACKAGE}
                ImageAlt="Package icon"
                CardTitle="Robust Build System"
              />
            </div>
            <div>
              <UniqueSelling
                CardImage={ImagePath.MOBILE}
                ImageAlt="Mobile icon"
                CardTitle="Convenient Mobile Control"
              />
            </div>
            <div>
              <UniqueSelling
                CardImage={ImagePath.SECURE}
                ImageAlt="Alam icon"
                CardTitle="Innovative Theft-Prevention Solution"
              />
            </div>
          </div>
          {/* desktop */}
          <div className="hidden 2xl:block">
            <UniqueSelling
              CardImage={ImagePath.UMBRALA}
              ImageAlt="Umbrella icon"
              CardTitle="Weather proof Reliability"
            />
          </div>
          <div className="hidden 2xl:block">
            <UniqueSelling
              CardImage={ImagePath.PACKAGE}
              ImageAlt="Package icon"
              CardTitle="Robust Build System"
            />
          </div>
          <div className="hidden 2xl:block">
            <UniqueSelling
              CardImage={ImagePath.MOBILE}
              ImageAlt="Mobile icon"
              CardTitle="Convenient Mobile Control"
            />
          </div>
          <div className="hidden 2xl:block">
            <UniqueSelling
              CardImage={ImagePath.SECURE}
              ImageAlt="Alam icon"
              CardTitle="Innovative Theft-Prevention Solution"
            />
          </div>
        </div>
        <div className="w-fit mt-10 contact-us mx-auto">
          <h2>Contact Us Today!</h2>
          <p className="mt-5">
            We are dedicated to providing our customers with the highest level
            of service and support. Contact us today to learn more about our
            specialized services and how we can help with your shipment needs.
          </p>
          <NavLink
            className="header-btn flex items-center gap-2.5 !bg-white w-fit"
            to="/contact-us"
            onClick={Scroll}
          >
            Connect Now
            <FontAwesomeIcon icon={faArrowRight} />
          </NavLink>
        </div>
      </section>
      {/* how it works */}
      <section className="marging mobile-space">
        <div className="xl:mt-32 lg:mt-20 mt-10 how-it-work">
          <Title
            headingFont="box-heading"
            headerContent="How It Works"
            paraContent="
            Our commitment to creating smart solutions for real-world challenges
            is unwavering. Through a fusion of cutting-edge technologies
            including Beacon, Bluetooth, GPS data, AI/ML, and Machine
            programming.
          "
          />
          <img
            src={ImagePath.WORKFLOW}
            alt="how the hardware and software work"
            className="mx-auto mt-16"
          />
        </div>
      </section>
      {/* Targated customer */}
      <section className="mt-20 white-box">
        <div className="marging grid lg:grid-cols-2 grid-cols-1 mobile-space gap-10 lg:py-28 py-14 h-full">
          <div>
            <div className="trageted-content">
              <h2>
                Targeted <br /> Customer
              </h2>
              <p className="mt-2">
                Our commitment to creating smart solutions for real-world
                challenges is unwavering. Through a fusion of cutting-edge
                technologies including Beacon, Bluetooth, GPS data, AI/ML, and
                Machine programming.
              </p>
              <img
                src={ImagePath.TARGETEDCUSTOMER}
                alt="targeted customer"
                className="mt-10 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-6 gap-3 justify-between">
            <CustomerTarget
              headingTitle="Municipal Corporations"
              paraContent="The primary target is the local Municipal Corporation or city government looking to enhance revenue streams and optimize parking management without signiﬁcant capital investment. Your solution aligns with their goal of improving city infrastructure and ﬁnancial sustainability."
            />
            <CustomerTarget
              headingTitle="Smart City Initiatives"
              paraContent="Municipalities aiming to participate in or fulﬁll their smart city initiatives are interested in innovative technologies that enhance urban living."
            />
            <CustomerTarget
              headingTitle="Any other Government Body"
              paraContent="Numerous government bodies and departments overseeing parking facilities at popular tourist destinations are beneﬁting from this innovative approach. By taking ownership of these parking spaces, these departments are unlocking additional revenue streams without incurring human resource costs."
            />
          </div>
        </div>
      </section>
      {/* more product */}
      <section className="marging mobile-space">
        <div className="flex items-center justify-between lg:mt-28 mt-8">
          <h2 className="box-heading">More Product</h2>
          <div className="flex items-center gap-2.5">
            <a href="#" className="cursor-pointer">
              View more
            </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="lg:mt-20 mt-5 flex gap-6 items-center justify-center flex-wrap">
          <MoreProduct
            Image={ImagePath.FITNESSPRODUCT}
            Title="fitness tracking smart watch"
          />
          <MoreProduct
            Image={ImagePath.CARKPRODUCT}
            Title="car parking sensor"
          />
          <MoreProduct
            Image={ImagePath.SYSTEMPRODUCT}
            Title="remote desktop tracking"
          />
        </div>
      </section>
      <BannerSection />
      <Footer />
    </>
  );
};

export default ProductDetails;
