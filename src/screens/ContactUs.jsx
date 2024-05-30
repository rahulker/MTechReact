import Navbar from "./Navbar";
import TrustedCompany from "../component/custom/TrustedCompany";
import Footer from "../component/Footer";
import HeaderTitle from "../component/custom/HeaderTitle";
import ImagePath from "../constant/ImagePath";
function ContactUs() {
  return (
    <>
      <header className="bg-black pb-44">
        <div className="marging">
          <Navbar />
          <HeaderTitle
            h1Title="Contact Us"
            headingPara="Looking for a multidisciplinary innovation partner to help realize your product vision? Whether you’re exploring new territory or evolving an existing offering we’re here to help you build momentum."
            ButtonText="Get Started"
            buttonShow="hidden"
          />
        </div>
      </header>
      {/* form */}
      <section className="marging !my-36">
        <div className="grid grid-cols-2">
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
              <div className="flex items-center gap-2">
                <img src={ImagePath.LOCATION} alt="location icon" />
                <p>3891 Ranchview Dr. Richardson, California 62639, USA</p>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
      <section className=" company-swiper">
        <div className="marging">
          <TrustedCompany HiddenPara="hidden" Header="Trusted By" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
