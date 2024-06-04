import PropTypes from "prop-types";
import Scroll from "../constant/Scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const ProductBanner = ({
  ImageProduct,
  Heading,
  Reverse,
  IconImage,
  IconContent,
  IconImage2,
  IconContent2,
  IconImage3,
  IconContent3,
  IconImage4,
  IconContent4,
}) => {
  return (
    <>
      {Reverse ? (
        <>
          <div className="white-box relative ">
            <div className="floating-card-product hidden lg:block reveverse-position lg:absolute text-left">
              <h2>{Heading}</h2>
              <p className="mt-8">
                We bring exceptional product experiences to life. From
                multinational enterprises to early-stage startups, our clients
                have one thing in common — big ideas. Most of our projects are
                under wraps, but here’s a sampling of stuff we can show you.
              </p>
              <p className="mt-8">
                From science fiction tales to real-world applications, designing
                a humanoid robot represents a complex and multifaceted endeavor
                of creativity, engineering, science, and innovation.
              </p>
              <div className="mt-8">
                <h3>USP</h3>
                <div className="grid icon-grid items-start gap-5 mt-5">
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage} alt="icon" />
                    <p>{IconContent}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage2} alt="icon" />
                    <p>{IconContent2}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage3} alt="icon" />
                    <p>{IconContent3}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage4} alt="icon" />
                    <p>{IconContent4}</p>
                  </div>
                </div>
              </div>
              <div>
                <NavLink
                  className="header-btn inline-block"
                  onClick={Scroll}
                  to="/product-details"
                >
                  View More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </NavLink>
              </div>
            </div>
            <div className="image-control">
              <img src={ImageProduct} alt="product Image" />
            </div>
            <div className="floating-card-product lg:hidden reveverse-position lg:absolute text-left">
              <h2>{Heading}</h2>
              <p className="lg:mt-8 mt-4">
                We bring exceptional product experiences to life. From
                multinational enterprises to early-stage startups, our clients
                have one thing in common — big ideas. Most of our projects are
                under wraps, but here’s a sampling of stuff we can show you.
              </p>
              <p className="lg:mt-8 mt-4">
                From science fiction tales to real-world applications, designing
                a humanoid robot represents a complex and multifaceted endeavor
                of creativity, engineering, science, and innovation.
              </p>
              <div className="lg:mt-8 mt-4">
                <h3>USP</h3>
                <div className="grid icon-grid items-start gap-5 mt-5">
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage} alt="icon" />
                    <p>{IconContent}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage2} alt="icon" />
                    <p>{IconContent2}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage3} alt="icon" />
                    <p>{IconContent3}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage4} alt="icon" />
                    <p>{IconContent4}</p>
                  </div>
                </div>
              </div>
              <div>
                <NavLink
                  className="header-btn banner-btn inline-block"
                  to="/product-details"
                  onClick={Scroll}
                >
                  View More
                  <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
                </NavLink>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="white-box relative">
            <img src={ImageProduct} alt="product Image" />
            <div className="floating-card-product lg:absolute">
              <h2>{Heading}</h2>
              <p className="lg:mt-8 mt-4">
                We bring exceptional product experiences to life. From
                multinational enterprises to early-stage startups, our clients
                have one thing in common — big ideas. Most of our projects are
                under wraps, but here’s a sampling of stuff we can show you.
              </p>
              <p className="lg:mt-8 mt-4">
                From science fiction tales to real-world applications, designing
                a humanoid robot represents a complex and multifaceted endeavor
                of creativity, engineering, science, and innovation.
              </p>
              <div className="lg:mt-8 mt-4">
                <h3>USP</h3>
                <div className="grid icon-grid items-start gap-5 mt-5">
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage} alt="icon" />
                    <p>{IconContent}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage2} alt="icon" />
                    <p>{IconContent2}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage3} alt="icon" />
                    <p>{IconContent3}</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <img src={IconImage4} alt="icon" />
                    <p>{IconContent4}</p>
                  </div>
                </div>
              </div>
              <NavLink
                className="header-btn banner-btn inline-block"
                to="/product-details"
                onClick={Scroll}
              >
                View More
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </NavLink>
            </div>
          </div>
        </>
      )}
    </>
  );
};
ProductBanner.propTypes = {
  ImageProduct: PropTypes.string,
  Heading: PropTypes.string,
  Reverse: PropTypes.bool,
  IconImage: PropTypes.string,
  IconImage2: PropTypes.string,
  IconImage3: PropTypes.string,
  IconImage4: PropTypes.string,
  IconContent: PropTypes.string,
  IconContent2: PropTypes.string,
  IconContent3: PropTypes.string,
  IconContent4: PropTypes.string,
};
export default ProductBanner;
