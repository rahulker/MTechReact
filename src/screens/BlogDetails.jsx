import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faYoutube,
  faSquareWhatsapp,
  faLinkedin,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Footer from "../component/Footer";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import BannerSection from "../component/BannerSection";
import ImagePath from "../constant/ImagePath";
const BlogDetails = () => {
  return (
    <>
      <header className="bg-black">
        <div className="marging">
          <Navbar />
        </div>
      </header>
      {/* fitness watch */}
      <section className="marging mobile-space">
        <div className="blog-heading 2xl:mt-32 mt-16 mx-auto">
          <h1>Fitness tracking exceptional product experiences to life.</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mt-5">
            <div className="flex items-center gap-5 ">
              <p>BEST PRACTICES</p>
              <p className="border-para"></p>
              <p>February 31, 2023</p>
            </div>
            <div className="flex items-center gap-2.5">
              <FontAwesomeIcon icon={faUser} />
              <p>James Camron</p>
            </div>
          </div>
        </div>
        <img
          src={ImagePath.FITNESSWATCHNEW}
          alt="fitness watch"
          className="w-full lg:mt-16 mt-5"
        />
        <div className="blog-data mx-auto ">
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit.
          </p>
          <p className="mt-8">Managing Applications Product</p>
          <ul className="mt-8">
            <li className="list-decimal list-inside">
              Product Acme Dev (Development environment type),
            </li>
            <li className="list-decimal list-inside">
              Product Acme Staging (Development environment type)
            </li>
            <li className="list-decimal list-inside">
              Product Acme (Production environment type)
            </li>
          </ul>
          <p className="mt-8">
            Previously, you had access to two API keys: test for development,
            and live for production. We noticed that some of you had to create
            multiple accounts to reproduce their more complex development
            structure.
          </p>
        </div>
      </section>
      {/* ecpoler */}
      <section className="marging mobile-space md:!mt-9 !mt-6">
        <div className="blog-details mx-auto">
          <h2>Product explorer</h2>
          <p className="!mt-2.5">
            If you write a function component and realize you need to add some
            state to it, previously you had to convert it to a class. Now you
            can use a Hook inside the existing function component.
          </p>
          <img
            src={ImagePath.FITNESSWATCHZOOM}
            alt="fitness watch close look"
            className="w-full mt-5"
          />
          <h2 className="lg:mt-9 mt-3 md:mt-6">Research-Driven Process</h2>
          <p className="md:!mt-6 !mt-3">
            This introductory phase of a Tracker program is essentially a
            fact-finding expedition. There are 4 concrete areas that we need to
            understand thoroughly:
          </p>
          <ul className="mt-7">
            <li className="list-inside list-decimal mt-2.5">
              Brand — Where do you stand now & what is your future vision?
            </li>
            <li className="list-inside list-decimal mt-2.5">
              Audience — Who buys your products?
            </li>
            <li className="list-inside list-decimal mt-2.5">
              Market — What sets your brand apart from competitors?
            </li>
            <li className="list-inside list-decimal mt-2.5">
              Trends — What forces are shaping your industry?
            </li>
          </ul>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Nemo enim ipsam voluptatem
            quia voluptas sit aspernatur aut odit aut fugit.
          </p>
          <p>Follow us on:</p>
          <div className="flex items-center gap-2.5">
            <FontAwesomeIcon icon={faSquareFacebook} />
            <FontAwesomeIcon icon={faSquareTwitter} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faSquareWhatsapp} />
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </section>
      <section></section>
      <BannerSection />
      <Footer />
    </>
  );
};

export default BlogDetails;
