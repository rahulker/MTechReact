import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function BannerSection() {
  return (
    <section className="mt-32 banner">
      <div className="marging text-center">
        <h2>Ready to break the barrier?</h2>
        <p className="my-7 mx-auto">
          For over a decade, our team has tackled challenging projects across a
          wide variety of verticals. Here are just a few examples:
        </p>
        <button className={`header-btn `}>
          Get Started
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  );
}

export default BannerSection;
