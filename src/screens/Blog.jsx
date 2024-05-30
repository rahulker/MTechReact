import { useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../component/Footer";
import BannerSection from "../component/custom/BannerSection";
import ImagePath from "../constant/ImagePath";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import HeaderTitle from "../component/custom/HeaderTitle";
import PaginationData from "../constant/PaginationData";

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerView = 8;
  const lastIndex = currentPage * recordPerView;
  const fristIndex = lastIndex - recordPerView;
  const records = PaginationData.slice(fristIndex, lastIndex);
  const pages = Math.ceil(PaginationData.length / recordPerView);
  const number = [...Array(pages + 1).keys()].slice(1);

  const nextpage = () => {
    if (currentPage < pages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prepage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCPage = (id) => {
    setCurrentPage(id);
  };

  return (
    <>
      <header className="bg-black pb-44">
        <div className="marging">
          <Navbar />
          <HeaderTitle
            h1Title="Blog"
            headingPara="
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          "
            ButtonText="Get Started"
            buttonShow="hidden"
          />
        </div>
      </header>
      <section className="marging !mt-28">
        <div className="flex items-center justify-between gap-16">
          <img src={ImagePath.FITNESSWATCH} alt="fitness watch" />
          <div className="watch-contemt">
            <h3>Fitness tracking exceptional product experiences to life.</h3>
            <div className="flex items-center gap-5 mt-5">
              <p>BEST PRACTICES</p>
              <p className="border-para"></p>
              <p>February 31, 2023</p>
            </div>
            <p className="my-5 new-content ">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <NavLink
              to="/Blog-details"
              className="header-btn inline-block blog-btn"
            >
              View More
              <FontAwesomeIcon icon={faArrowRight} className="ml-2.5" />
            </NavLink>
          </div>
        </div>
      </section>
      <section className="marging !mt-20">
        <div className="grid grid-cols-3 justify-evenly gap-6">
          {records.map((d) => {
            return (
              <div key={d.id} className="h-full">
                {d.image}
                {d.data}
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <ul className="w-fit mx-auto flex ">
            <li className="border border-solid">
              <button
                className="pagination-pre"
                onClick={prepage}
                disabled={currentPage === 1}
              >
                <FontAwesomeIcon icon={faAnglesLeft} />
              </button>
            </li>
            {number.map((n, i) => {
              return (
                <li
                  key={i}
                  className={`${
                    currentPage === n ? "bg-black text-white" : ""
                  } border border-solid`}
                >
                  <button
                    className="pagination-pre"
                    onClick={() => changeCPage(n)}
                  >
                    {n}
                  </button>
                </li>
              );
            })}
            <li className="border border-solid">
              <button
                className="pagination-pre"
                onClick={nextpage}
                disabled={currentPage === pages}
              >
                <FontAwesomeIcon icon={faAnglesRight} />
              </button>
            </li>
          </ul>
        </div>
      </section>
      <BannerSection />
      <Footer />
    </>
  );
}

export default Blog;
