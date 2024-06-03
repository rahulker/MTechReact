import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
const BannerSection = () => {
  return (
    <section className="lg:mt-32 mt-10 banner">
      <div className="marging text-center mobile-space">
        <h2>Ready to break the barrier?</h2>
        <p className="md:my-7 my-3.5 mx-auto">
          For over a decade, our team has tackled challenging projects across a
          wide variety of verticals. Here are just a few examples:
        </p>
        <NavLink to="/contact-us" className={`header-btn inline-block`}>
          Get Started
          <FontAwesomeIcon icon={faArrowRight} />
        </NavLink>
      </div>
    </section>
  );
};

export default BannerSection;
