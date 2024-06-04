import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scroll from "../constant/Scroll";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const BannerSection = () => {
  return (
    <section className="xl:mt-32 lg:mt-20 mt-10 banner">
      <div className="marging text-center mobile-space">
        <h2>Ready to break the barrier?</h2>
        <p className="md:my-7 my-3.5 mx-auto">
          For over a decade, our team has tackled challenging projects across a
          wide variety of verticals. Here are just a few examples:
        </p>
        <NavLink
          to="/contact-us"
          onClick={Scroll}
          className={`header-btn inline-block banner-btn`}
        >
          Get Started
          <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </div>
    </section>
  );
};

export default BannerSection;
