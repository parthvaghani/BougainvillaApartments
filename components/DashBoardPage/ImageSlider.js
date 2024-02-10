import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2.1,
    slidesToScroll: 1,
    swipe: false,
    draggable: false,
    centerMode: true,
    focusOnSelect: true,
  };

  const constants = [
    "/images/home/sliderimage1.png",
    "/images/home/sliderimage3.png",
    "/images/home/sliderimage1.png",
  ];

  return (
    <>
      <section className="mt-52 max-sm:mt-12 max-xl:mt-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center gap-12 max-sm:gap-8 max-sm:flex-col-reverse">
            <div
              className="flex items-center flex-row gap-6"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <div
                className="cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-left"
                >
                  <circle
                    cx="56.4482"
                    cy="40"
                    r="15"
                    fill="#733F0F"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M8 38.9999H63.1724"
                    stroke="#14413E"
                    strokeWidth="2.75862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 39L21.7931 52.7931"
                    stroke="#14413E"
                    strokeWidth="2.75862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 38.9998L21.3333 25.6665"
                    stroke="#14413E"
                    strokeWidth="2.75862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className="cursor-pointer transform hover:scale-110 transition-transform"
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="slide-right"
                >
                  <circle
                    cx="56.4482"
                    cy="40"
                    r="15"
                    fill="#733F0F"
                    fillOpacity="0.31"
                  />
                  <path
                    d="M8 38.9999H63.1724"
                    stroke="#14413E"
                    strokeWidth="2.75862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 39L21.7931 52.7931"
                    stroke="#14413E"
                    strokeWidth="2.75862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 38.9998L21.3333 25.6665"
                    stroke="#14413E"
                    strokeWidth="2.75862"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className="w-full"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <Slider
                {...settings}
                ref={sliderRef}
                className="max-sm:-ml-[200px]"
              >
                {constants.map((image, index) => (
                  <div key={index}>
                    <Image
                      className="max-sm:h-[230px] max-lg:h-[300px]"
                      src={image}
                      width={670}
                      height={590}
                      alt="Architecture"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSlider;
