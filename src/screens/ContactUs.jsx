import Navbar from "./Navbar";
import TrustedCompany from "../component/TrustedCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputFeild from "../component/InputFeild";
import { useState } from "react";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faYoutube,
  faSquareWhatsapp,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../component/Footer";
import HeaderTitle from "../component/HeaderTitle";
import ImagePath from "../constant/ImagePath";
const ContactUs = () => {
  const [selectValue, setSelectValue] = useState("");

  return (
    <>
      <header className="bg-black 2xl:pb-44 pb-10">
        <div className="marging">
          <Navbar />
          <div className="mobile-space">
            <HeaderTitle
              h1Title="Contact Us"
              headingPara="Looking for a multidisciplinary innovation partner to help realize your product vision? Whether you’re exploring new territory or evolving an existing offering we’re here to help you build momentum."
              ButtonText="Get Started"
              buttonShow="hidden"
            />
          </div>
        </div>
      </header>
      {/* form */}
      <section className="marging mobile-space lg:!my-36 !my-10">
        <div className="grid cloums-contact">
          <div>
            <h2>
              Let get
              <br />
              in touch
            </h2>
            <p className="card-para">
              Send us a message about what you’ve got planned, how we can help
              and we’ll be right back in touch.
            </p>
            <div className="mt-10 card-info">
              <div className="flex items-start md:gap-4 gap-2">
                <img src={ImagePath.LOCATION} alt="location icon" />
                <p className="location-info">
                  3891 Ranchview Dr. Richardson, California 62639, USA
                </p>
              </div>
              <div className="flex items-start md:gap-4 gap-2 mt-7">
                <img src={ImagePath.PLANE} alt="location icon" />
                <a href="mailto:help@manektech.com">help@manektech.com</a>
              </div>
              <div className="flex items-start md:gap-4 gap-2 mt-7">
                <img src={ImagePath.PHONE} alt="location icon" />
                <a href="tel:+49 173 1732121">+49 173 1732121</a>
              </div>
              <div className="mt-14">
                <p>Follow us on:</p>
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/">
                    <FontAwesomeIcon icon={faSquareFacebook} />
                  </a>
                  <a href="https://www.x.com/">
                    <FontAwesomeIcon icon={faSquareTwitter} />
                  </a>
                  <a href="https://www.linkedin.com/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://www.whatsapp.com/">
                    <FontAwesomeIcon icon={faSquareWhatsapp} />
                  </a>
                  <a href="https://www.youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form>
              <div className="input-container grid lg:justify-evenly">
                {/* inpurt frist */}
                <div>
                  <InputFeild LabelInput="Full Name" inputType="text" />
                </div>
                <div className="mt-4 md:mt-0">
                  <InputFeild LabelInput="Email" inputType="email" />
                </div>
                {/* second input line */}
                <div className="xl:mt-8 lg:mt-0 mt-4">
                  <InputFeild LabelInput="Phone Number" inputType="number" />
                </div>
                <div className="xl:mt-8 lg:mt-0 mt-4 relative">
                  <label htmlFor="Country">Country</label>
                  <br />
                  <select
                    name="Country"
                    value={selectValue}
                    id="Country"
                    onChange={(e) => setSelectValue(e.target.value)}
                    className="input-field border border-solid mt-2 w-full border-black appearance-none rounded-sm"
                  >
                    <option value="Select a Country">Select a Country</option>
                    <option value="India">India</option>
                    <option value="usa">USA</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="absolute angle-position"
                    id="arrow"
                  />
                </div>
                {/* thrid input Row */}
                <div className="xl:mt-8 lg:mt-0 mt-4 md:col-span-2">
                  <InputFeild LabelInput="Company" inputType="text" />
                </div>
                <div className="xl:mt-8 lg:mt-0 mt-4 md:col-span-2">
                  <label htmlFor="Company">Inquiry About</label>
                  <br />
                  <textarea
                    rows="5"
                    className="input-field border border-solid border-black mt-2 w-full rounded-sm"
                  ></textarea>
                </div>
                <div className="mt-2">
                  <button className="header-btn form-btn">
                    Send
                    <FontAwesomeIcon icon={faArrowRight} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className=" company-swiper">
        <div className="marging mobile-space text-center xl:text-left">
          <TrustedCompany HiddenPara="hidden" Header="Trusted By" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
