import React from "react";
import BgImage from "../../public/images/home/pseudo.png";
import Image from "next/image";
import Gimage from "../../public/images/gallery/image1.png";
import Gimage1 from "../../public/images/gallery/image2.png";
import Gimage2 from "../../public/images/gallery/image3.png";
import Gimage3 from "../../public/images/gallery/image4.png";
import Gimage4 from "../../public/images/gallery/image5.png";
import Gimage5 from "../../public/images/gallery/image6.png";
import Gimage6 from "../../public/images/gallery/image7.png";
import Gimage7 from "../../public/images/gallery/image8.png";
import Gimage8 from "../../public/images/gallery/image9.png";
import GroupLeft from "../../public/images/gallery/Group-left.png";
import GroupRight from "../../public/images/gallery/Group-right.png";
import CustomButton from "../common/Button";
import { BigArrow } from "@/public/images/contact/Vectors";
import StarPoint from "../common/StarPoint";

function GalleryPage() {
  return (
    <>
      <div className="absolute z-10 flex justify-center w-full h-[981px] items-center max-sm:h-[360px] max-sm:items-end">
        <div className="bg-[#ffffff] rounded-tl-[37px] rounded-tr-[37px] w-[575px] h-auto max-sm:w-[300px] max-sm:rounded-tl-[16px] max-sm:rounded-tr-[16px] max-sm:h-[90px]">
          <div className="flex relative justify-center items-center gap-2 pt-[41px] pb-[41px] flex-col max-sm:pt-[18px] max-sm:pb-[18px]">
            <p className="Newsreader text-[52px] text-[#14413E] font-medium leading-[64px] max-sm:text-[24px] max-sm:DM Serif Display max-sm:text-[#292F36] max-sm:leading-[30px] ">
              Our Photo Gallery
            </p>
            <p className="Jost text-[22px] text-[#AC6231] font-normal leading-[33px] not-italic max-sm:text-[12px] max-sm:leading-[18px] max-sm:text-[#4D5053]">
              Home / Gallery
            </p>
          </div>
        </div>
      </div>
      <Image
        src={BgImage}
        className="w-full h-[561px] relative max-sm:h-[350px] max-lg:h-[550px] max-sm:object-cover max-sm:pt-20"
        alt="BgImage"
      />

      <section>
        <div className="pt-24 pb-32 h-auto w-full max-sm:mt-12 overflow-hidden max-lg:pb-4 max-lg:pt-10 max-sm:pt-0">
          <div className="flex justify-center items-center relative">
            <Image
              src={GroupLeft}
              className="absolute left-0 top-[-13%] z-[-50] max-lg:hidden"
              alt="GroupLeft"
            />
            <Image
              src={GroupRight}
              className="absolute right-0 bottom-[-15%] z-[-50] max-lg:hidden"
              alt="GroupRight"
            />
            <div className="container-main grid grid-cols-1 xl:grid-cols-3 gap-10 max-sm:w-[80%] max-xl:gap-5">
              <div className="grid place-content-start gap-10 max-xl:place-content-center">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[720px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage}
                    alt="image"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[500px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage1}
                    alt="image"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[720px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage2}
                    alt="image"
                  />
                </div>
              </div>
              <div className="grid place-content-start gap-10 max-xl:place-content-center">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[500px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage3}
                    alt="image"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[500px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage4}
                    alt="image"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[500px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage5}
                    alt="image"
                  />
                </div>
              </div>
              <div className="grid place-content-start gap-10 max-xl:place-content-center">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[600px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage6}
                    alt="image"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[720px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage7}
                    alt="image"
                  />
                </div>
                <div data-aos="fade-up" data-aos-duration="1000">
                  <Image
                    className="h-[500px] max-w-full max-sm:h-[397px] rounded-3xl"
                    src={Gimage8}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-cover bg-[url(/images/home/amenities-bg.png)] max-xl:mt-2">
        <div className="container-main my-10 relative">
          <div className="flex " data-aos="fade-right" data-aos-duration="1500">
            <h1 className="text-[52px] Newsreader text-[Amenities] my-16 max-sm:text-3xl max-sm:my-8">
              Amenities
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="79"
              height="6"
              viewBox="0 0 79 6"
              fill="none"
              className="mt-[108px] ml-3 max-sm:mt-12 "
            >
              <path
                d="M78.8868 3.00098L76 0.114225L73.1133 3.00098L76 5.88773L78.8868 3.00098ZM0 3.50098L76 3.50098V2.50098L0 2.50098L0 3.50098Z"
                fill="#14413E"
              />
            </svg>
          </div>
          <div
            className="flex mx-4 max-sm:flex-col max-sm:mx-2"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 112 112"
                fill="none"
                className="max-sm:h-14 max-sm:w-14"
              >
                <path
                  d="M98.9081 69.6179L99.035 70.6749H100.1H102.725C105.422 70.6749 107.789 72.9576 107.651 75.715L107.65 75.7449V75.7749V84.8749C107.65 90.1622 103.462 94.3499 98.1746 94.3499H13.6496C8.36235 94.3499 4.17461 90.1622 4.17461 84.8749V75.7749C4.17461 72.9376 6.43735 70.6749 9.27461 70.6749H11.8996H12.9558L13.0899 69.6273C15.8252 48.2577 32.0454 31.7634 52.2601 29.8948L53.3496 29.7941V28.6999V24.3249V23.1249H52.1496H50.2246C48.6123 23.1249 47.3996 21.9122 47.3996 20.2999C47.3996 18.7212 48.7533 17.4749 50.2246 17.4749H61.9496C63.5619 17.4749 64.7746 18.6876 64.7746 20.2999C64.7746 21.8786 63.4209 23.1249 61.9496 23.1249H60.0246H58.8246V24.3249V28.6999V29.7932L59.9132 29.8947C79.9582 31.7633 96.3453 48.261 98.9081 69.6179ZM92.2246 70.4999H93.6155L93.4116 69.124C90.5342 49.7016 74.8588 35.0249 55.9996 35.0249C37.136 35.0249 21.465 49.8812 18.5878 69.1224L18.3818 70.4999H19.7746H92.2246ZM11.0246 76.1499H9.82461V77.3499V84.8749C9.82461 87.1126 11.5869 88.8749 13.8246 88.8749H98.3496C100.587 88.8749 102.35 87.1126 102.35 84.8749V77.3499V76.1499H101.15H11.0246Z"
                  fill="#733F0F"
                  fillOpacity="0.31"
                  stroke="#F5EEE6"
                  strokeWidth="2.4"
                />
              </svg>
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Restaurants
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
            </div>
            <div className="flex-col">
              <Image
                src="/images/home/person.png"
                alt="Person"
                className="max-sm:h-14 max-sm:w-14"
                width={93}
                height={93}
              />
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Caretaker
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
            </div>

            <div className="flex-col">
              <Image
                src="/images/home/Luggage.png"
                alt="bag"
                className="max-sm:h-14 max-sm:w-14"
                width={93}
                height={93}
              />
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Luggage Storage
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Lorem ipsum dolor sit amet, in nusquam omittantu.
              </p>
            </div>
            <div className="flex-col">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 112 112"
                fill="none"
                className="max-sm:h-14 max-sm:w-14"
              >
                <path
                  d="M100.49 45.1091C75.9178 20.5373 36.0791 20.5373 11.5073 45.1091C9.83583 46.7806 7.12589 46.7806 5.45444 45.1091L4.52106 46.0425L5.45444 45.1091C3.783 43.4377 3.783 40.7277 5.45444 39.0563C33.3691 11.1416 78.6277 11.1416 106.542 39.0563C108.214 40.7277 108.214 43.4377 106.542 45.1091C104.871 46.7806 102.161 46.7806 100.49 45.1091ZM84.6504 60.9484C68.8264 45.1243 43.1705 45.1243 27.3465 60.9484C25.675 62.6198 22.9651 62.6198 21.2936 60.9484C19.6222 59.2769 19.6222 56.567 21.2936 54.8955C40.4606 35.7286 71.5363 35.7286 90.7032 54.8955C92.3747 56.567 92.3747 59.2769 90.7032 60.9484C89.0318 62.6198 86.3218 62.6198 84.6504 60.9484ZM68.8112 76.7876C61.7349 69.7113 50.262 69.7113 43.1857 76.7876C41.5142 78.459 38.8043 78.459 37.1328 76.7876C35.4614 75.1161 35.4614 72.4062 37.1328 70.7348C47.552 60.3156 64.4449 60.3156 74.864 70.7348C76.5355 72.4062 76.5355 75.1161 74.864 76.7876C73.1926 78.459 70.4827 78.459 68.8112 76.7876ZM51.7184 89.6004C51.7184 87.2366 53.6347 85.3204 55.9984 85.3204H56.0544C58.4182 85.3204 60.3344 87.2366 60.3344 89.6004C60.3344 91.9642 58.4182 93.8804 56.0544 93.8804H55.9984C53.6347 93.8804 51.7184 91.9642 51.7184 89.6004Z"
                  fill="#733F0F"
                  fillOpacity="0.31"
                  stroke="#F5EEE6"
                  strokeWidth="2.64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Wi-fi
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
            </div>
          </div>
          <div
            className="flex mt-8 mx-3 pb-14 max-sm:flex-col max-sm:mx-2 max-sm:mt-2 max-sm:pb-8"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex-col">
              <Image
                src="/images/home/tv.png"
                alt="TV"
                className="max-sm:h-14 max-sm:w-14"
                width={93}
                height={93}
              />
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                TV
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs ">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
            </div>
            <div className="flex-col">
              <Image
                src="/images/home/terrace.png"
                alt="Terrace"
                className="max-sm:h-14 max-sm:w-14"
                width={93}
                height={93}
              />
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Terrace
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
            </div>

            <div className="flex-col">
              <Image
                src="/images/home/ac.png"
                alt="Air conditioner"
                className="max-sm:h-14 max-sm:w-14"
                width={93}
                height={93}
              />
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Air conditioner
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Lorem ipsum dolor sit amet, in nusquam omittantu.
              </p>
            </div>
            <div className="flex-col">
              <Image
                src="/images/home/elevator.png"
                alt="Elevator/Lift"
                className="max-sm:h-14 max-sm:w-14"
                width={93}
                height={93}
              />
              <h2 className="text-3xl Newsreader text-[#14413E] max-sm:text-xl">
                Elevator/Lift
              </h2>
              <p className="text-xl  my-3 max-sm:text-xs">
                Dictum varius duis at consectetur lorem donec massa sapien
                faucibus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start pt-16 max-lg:pt-28 max-sm:pt-5 max-md:pb-0 overflow-hidden">
        <div className="mb-10 lg:mb-0 order-2 lg:order-1">
          <Image
            src="/images/gallery/gardenimage.png"
            alt="Your Image"
            className="w-[1000px] h-auto object-cover pt-20 max-lg:ml-6 max-sm:ml-3 max-sm:pt-10 max-sm:w-[340px] max-sm:leading-6"
            width={1000}
            height={655}
          />
        </div>

        <div
          className="lg:w-1/2 lg:ml-10 order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="w-full py-36 max-sm:py-0 max-sm:w-screen max-lg:py-0">
            <p className="font-[Montserrat] text-lg font-medium text-[#AC6231] uppercase leading-6 tracking-[12px] max-sm:text-xs max-sm:px-3">
              Location Area
            </p>
            <div className="flex items-center gap-5 mt-6 max-sm:mt-3">
              <h1 className="font-[Newsreader] text-[#14413E] text-[52px] font-medium leading-[64px] max-sm:text-2xl max-sm:px-3 max-sm:font-[Montserrat]">
                Nearby Location
              </h1>
              <BigArrow />
            </div>
            <div className="mt-6 capitalize font-[Sarabun] text-[24px] leading-[54px] max-sm:mt-3 max-sm:leading-6 max-sm:text-sm max-sm:w-full">
              <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5 flex max-sm:items-center">
                  <StarPoint />
                </div>
                <p className="max-sm:text-[14px] ">
                  About 4 Km from Palsana Surat Highway.
                </p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-4 max-sm:items-start ">
                <div className="max-sm:mt-1.5  max-sm:pt-1">
                  <StarPoint />
                </div>
                <p className="max-sm:text-[14px] max-sm:py-1">
                  Easy access for people travelling by Car to the City.
                </p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5 max-sm:pt-1">
                  <StarPoint />
                </div>
                <p className="max-sm:text-[14px] max-sm:py-1">
                  About 4 km from Surat International Exhibition centre (Sarsana
                  Dome).
                </p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5 max-sm:pt-1">
                  <StarPoint />
                </div>
                <p className="max-sm:text-[14px] max-sm:py-1">
                  About 15 minute drive from Surat International Airport.{" "}
                </p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5 max-sm:pt-1">
                  <StarPoint />
                </div>
                <p className="max-sm:text-[14px] max-sm:py-1">
                  Less than 1 Km from Udhna Magdalla Road.
                </p>
              </div>
            </div>
            <div className="flex items-center mt-[54px] max-sm:justify-center max-sm:w-screen max-sm:mt-5">
              <CustomButton> Contact Us</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GalleryPage;
