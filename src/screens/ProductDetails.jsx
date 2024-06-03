import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Title from "../component/Title";
import BannerSection from "../component/BannerSection";
import Footer from "../component/Footer";
import ImagePath from "../constant/ImagePath";
import MoreProduct from "../component/moreProduct";
import CustomerTarget from "../component/CustomerTarget";
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
      {/* Problems */}
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
        <div className="!mt-10 marging hardware">
          <Title
            headerContent="Components Of Our Solution"
            paraContent="Our commitment to creating smart solutions for real-world challenges is unwavering. Through a fusion of cutting-edge technologies including Beacon, Bluetooth, GPS data, AI/ML, and Machine programming."
            headingFont="box-heading"
          />
        </div>
        <div className="grid grid-cols-2 items-center mt-16">
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
              <p className="px-16 photo-content hardware-content">
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
              <p className="px-16 photo-content">
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
      {/* how it works */}
      <section className="marging">
        <div className="mt-32 how-it-work">
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
        <div className="marging grid grid-cols-2 gap-10 py-28 h-full">
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
          <div className="flex flex-col gap-6 justify-between">
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
      <section className="marging">
        <div className="flex items-center justify-between mt-28">
          <h2 className="box-heading">More Product</h2>
          <div className="flex items-center gap-2.5">
            <a href="#" className="cursor-pointer">
              View more
            </a>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
        <div className="mt-20 flex gap-6 items-center  flex-wrap">
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
