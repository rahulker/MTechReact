import ImagePath from "../constant/ImagePath";

const Meeting = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 items-center lg:mt-20 mt-5 meeting-container">
      <div>
        <img
          src={ImagePath.MEETING}
          alt="meeting"
          className="mx-auto lg:mx-0 xl:w-full"
        />
      </div>
      <div className="meeting-content-container ">
        <h2>Who we are</h2>
        <p className="mt-5 mb-7">
          Glide gives you the powers of a developer and a designer. Create
          remarkable tools to solve the business problems you thought you never
          could.
        </p>
        <p className="metting-mini-para">
          Since 2003, we are unlearning, relearning, and integrating the art of
          commerce. With industry-defining commerce capabilities across
          planning, designing, development, deployment, and marketing we aim to
          provide peerless and personalized digital commerce solutions.
        </p>
        <p className="metting-mini-para">
          We are known for our expertise and experience in catering to the
          leading most product supply brands worldwide.
        </p>
      </div>
    </div>
  );
};

export default Meeting;
