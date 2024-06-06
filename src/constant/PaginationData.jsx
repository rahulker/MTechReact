import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Scroll from "./Scroll";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImagePath from "./ImagePath";
import { NavLink } from "react-router-dom";
let intNum = 1;
const PaginationData = [
  // frist page data
  {
    id: intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img
        src={ImagePath.FITNESSWATCH}
        alt="product image "
        className="w-full"
      />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Fitness tracking exceptional product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img
        src={ImagePath.FITNESSWATCH}
        alt="product image "
        className="w-full"
      />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Fitness tracking exceptional product experiences to life.</h3>

        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  // second page data
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img
        src={ImagePath.FITNESSWATCH}
        alt="product image "
        className="w-full"
      />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Fitness tracking exceptional product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img
        src={ImagePath.FITNESSWATCH}
        alt="product image "
        className="w-full"
      />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Fitness tracking exceptional product experiences to life.</h3>

        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  // thrid page data
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img
        src={ImagePath.FITNESSWATCH}
        alt="product image "
        className="w-full"
      />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Fitness tracking exceptional product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img
        src={ImagePath.FITNESSWATCH}
        alt="product image "
        className="w-full"
      />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Fitness tracking exceptional product experiences to life.</h3>

        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.CARPARKING} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Car Parking Sensor product exercitation labor consequat..</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
  {
    id: ++intNum,
    image: (
      <img src={ImagePath.FARMASY} alt="product image " className="w-full" />
    ),
    data: (
      <div className="watch-contemt paginationData">
        <h3>Dairy Farming Digital Device product experiences to life.</h3>
        <div className="flex items-center gap-5 mt-5">
          <p>BEST PRACTICES</p>
          <p className="border-para"></p>
          <p>February 31, 2023</p>
        </div>
        <p className="my-5 new-content ">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <NavLink
          to="/Blog-details"
          onClick={Scroll}
          className="header-btn inline-block blog-btn"
        >
          View More
          <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
        </NavLink>
      </div>
    ),
  },
];
export default PaginationData;
