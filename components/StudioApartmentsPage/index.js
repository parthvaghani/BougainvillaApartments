import React from "react";
import Image from "next/image";
import TinyVector30 from "../../public/images/apartments/studio-about-left.svg";
import TinyVector31 from "../../public/images/apartments/studio-about-right.svg";
import Vector from "../../public/images/apartments/TinyVector";
import BgImage from "../../public/images/home/pseudo.png";
import CustomButton from "../common/Button";
import HouseRuleApart1 from "../../public/images/apartments/house-rules-1.png";
import HouseRuleApart2 from "../../public/images/apartments/house-rules-2.png";
import apartstructure1 from "../../public/images/apartments/apartstructure1.svg";
import apartstructure11 from "../../public/images/apartments/apartstructure1-1.svg";
import apartstructure2 from "../../public/images/apartments/apartstructure2.png";
import apartstructure4 from "../../public/images/apartments/15.svg";
import Point from "../common/StarPoint";
import { OneBedRoomCustomButton } from "../common/Button";

function StudioApartmentsPage() {
  return (
    <>
      <div className="absolute z-10 flex justify-center w-full h-[981px] items-center max-sm:h-[300px] max-sm:items-end max-sm:mt-[60px]">
        <div className="bg-[#ffffff] rounded-tl-[37px] rounded-tr-[37px] w-[575px] h-auto max-sm:w-[300px] max-sm:rounded-tl-[16px] max-sm:rounded-tr-[16px] max-sm:h-[90px]">
          <div className="flex justify-center items-center gap-2 pt-[41px] pb-[152px] flex-col max-sm:pt-[18px] max-sm:pb-[18px]">
            <p className="Newsreader text-[52px] text-[#14413E] font-medium leading-[64px] max-sm:text-[24px] max-sm:DM Serif Display max-sm:text-[#292F36] max-sm:leading-[30px] ">
              Studio Apartment
            </p>
            <p className="Jost text-[22px] text-[#AC6231] font-normal leading-[33px] not-italic max-sm:text-[12px] max-sm:leading-[18px] max-sm:text-[#4D5053]">
              Home / Types of Apartments
            </p>
          </div>
        </div>
      </div>
      <Image
        src={BgImage}
        className="w-full h-[501px] relative max-sm:h-[350px] max-lg:h-[500px] max-sm:object-cover max-sm:pt-20"
        width={"100%"}
        height={501}
        alt="BgImage"
      />
      {/* our rooms section */}
      <section className="relative max-sm:mt-10 mt-[10rem] flex justify-center w-full mx-auto">
        <div className="inline-block items-center">
          <div
            className="gap-y-10 flex flex-col"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <h1 className="text-[52px] capitalize Newsreader text-[#14413E] w-[1047px] leading-[64px] text-center px-5 max-sm:text-lg max-sm:w-full max-sm:leading-6 max-sm:px-3 max-lg:w-full ">
              Surprising people with joy, and celebrating life’s moments. That’s
              what we do
            </h1>
            <div className="w-full flex justify-center">
              <Vector />
            </div>
          </div>
        </div>
      </section>

      <div className="container-main">
        <div className="flex justify-between gap-14  mt-[115px] max-sm:mt-[65px] max-sm:flex-col-reverse max-xl:flex-col-reverse mb-[14rem] max-sm:mb-0 max-lg:mb-0 max-xl:mb-[5rem]">
          <div
            className="flex flex-col gap-8 w-[43%] max-sm:w-full max-sm:text-center max-sm:gap-1 max-xl:w-full max-xl:text-center max-xl:gap-1 max-xl:mt-4"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="montserrat text-lg uppercase font-medium	leading-6	tracking-[12px] text-[#AC6231] max-sm:text-xs max-sm:leading-6 ">
              our rooms
            </p>
            <h1 className="font-[Newsreader] text-[52px] font-medium leading-[64px] capitalize text-[#14413E] max-sm:text-2xl ">
              Studio Apartment
            </h1>
            <p className="font-Sarabun text-2xl leading-[44px] capitalize text-[#333] max-sm:text-sm">
              Studio Apartments are big space apartments with a seating area, a
              small pantry, a private washroom but no separate bedroom. All
              apartments are equipped with cosy furniture, Air conditions, a
              Refrigerator, a flat screen Smart LED TV and a standing balcony
              with view of the city.
            </p>
            <p className="font-Sarabun text-2xl leading-[44px] capitalize text-[#333] max-sm:hidden max-xl:hidden">
              Studio Apartments are big space apartments with a seating area, a
              small pantry, a private washroom but no separate bedroom. All
              apartments are equipped with cosy furniture, Air conditions, a
              Refrigerator, a flat screen Smart LED TV and a standing balcony
              with view of the city.
            </p>
            <div className="hidden max-sm:flex max-sm:mt-[14px] max-sm:justify-center max-xl:flex max-xl:mt-[14px] max-xl:justify-center">
              <CustomButton> See Room</CustomButton>
            </div>
          </div>

          <div className="w-[58%] right-[-25px] relative max-sm:w-[350px] max-xl:w-[725px] max-sm:left-0 max-sm:flex max-sm:justify-end max-xl:flex max-xl:justify-end ">
            <Image
              src="/images/apartments/Group 341.png"
              alt="Bed Room"
              className="w-[1079.762px] h-[850px] z-10 max-sm:w-[300px] max-sm:h-[270px] max-xl:w-[660px] max-xl:h-[600px]"
              height={850}
              width={1079}
            />
            <div className="absolute z-[-1] top-[485px] left-[-290px] max-sm:hidden max-xl:hidden">
              <Image
                src="/images/apartments/04 1.png"
                alt="Bed Room"
                className=""
                width={466}
                height={495}
              />
            </div>
            <div className="absolute max-sm:bottom-[-40px] max-sm:left-[-7px] hidden max-sm:block max-xl:block max-xl:bottom-[-75px] max-xl:left-[-40px]">
              <Image
                src="/images/apartments/04 2.png"
                alt="Bed Room"
                className="max-sm:w-[120px] max-sm:h-[160px] max-xl:w-[240px] max-xl:h-[300px]"
                width={466}
                height={495}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Studio about us section */}
      <section className="container-main max-lg:mt-20">
        <div className="mt-auto flex justify-between gap-5 mx-auto max-sm:flex-col max-xl:flex-col">
          <div className="top-[25rem] ">
            <Image
              src={TinyVector30}
              className=" max-sm:h-[504.146px] max-sm:ml-0 max-xl:h-[504.146px] max-xl:w-full max-xl:ml-3 "
              alt="Studio about 2"
              width={"100%"}
              height={1211}
            />
          </div>
          <div className=" top-[25rem] ">
            <div className="max-sm:hidden max-xl:hidden">
              <Image
                src={TinyVector31}
                className=" "
                alt="Studio about 1"
                width={943}
                height={665}
              />
            </div>
            <div
              className="pt-20 pl-16 max-sm:pl-0 max-sm:pt-5 max-xl:pl-3 max-xl:pt-10 max-xl:pb-11"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="text-[#AC6231] montserrat text-[18px] font-medium uppercase leading-24 tracking-[12px] pb-3">
                about us
              </p>
              <h4 className="text-[#14413E] text-[52px] w-[519px] Newsreader text-5xl my-2 mb-8 text-left capitalize font-[500px] max-sm:w-full max-sm:text-[22px] max-xl:w-full max-xl:text-[45px]">
                We focus on comfort and quality
              </h4>

              <p className="max-w-[701px] text-[24px] max-sm:max-w-[300px] font-sans not-italic max-xl:text-[26px] max-sm:text-[16px] max-xl:max-w-[900px]">
                Studio Apartments are big space apartments with a seating area,
                a small pantry, a private washroom but no separate bedroom. All
                apartments are equipped with cosy furniture, Air conditions, a
                Refrigerator, a flat screen Smart LED TV and a standing balcony
                with view of the city.
              </p>
              <div className="invisible absolute max-sm:visible max-sm:mt-[1rem] max-sm:py-[1rem] max-xl:visible max-xl:mt-[1rem] max-sm:flex max-sm:w-full max-sm:justify-center max-sm:left-0">
                <CustomButton>See Room</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Amenities section */}
      <section className="max-lg:mt-[6rem] max-sm:pt-[1rem]">
        <div className="container m-auto p-2 py-20">
          <div
            className="text-[52px] max-sm:text-[32px] text-[#14413E] w-96 flex text-center pb-8 max-sm:justify-start max-sm:w-auto"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="flex items-center gap-5">
              Amenities
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="79"
                height="6"
                viewBox="0 0 79 6"
                fill="none"
                className="mt-3"
              >
                <path
                  d="M78.8868 3.00098L76 0.114225L73.1133 3.00098L76 5.88773L78.8868 3.00098ZM0 3.50098L76 3.50098V2.50098L0 2.50098L0 3.50098Z"
                  fill="#14413E"
                />
              </svg>
            </h2>
          </div>
          <div
            className="flex  justify-between text-center items-center max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-[3rem]"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="flex flex-col justify-center items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="112"
                height="112"
                viewBox="0 0 112 112"
                fill="none"
              >
                <path
                  d="M98.9081 69.6198L99.035 70.6769H100.1H102.725C105.422 70.6769 107.789 72.9596 107.651 75.7169L107.65 75.7469V75.7769V84.8769C107.65 90.1641 103.462 94.3519 98.1746 94.3519H13.6496C8.36235 94.3519 4.17461 90.1641 4.17461 84.8769V75.7769C4.17461 72.9396 6.43735 70.6769 9.27461 70.6769H11.8996H12.9558L13.0899 69.6292C15.8252 48.2597 32.0454 31.7653 52.2601 29.8968L53.3496 29.796V28.7019V24.3269V23.1269H52.1496H50.2246C48.6123 23.1269 47.3996 21.9141 47.3996 20.3019C47.3996 18.7231 48.7533 17.4769 50.2246 17.4769H61.9496C63.5619 17.4769 64.7746 18.6896 64.7746 20.3019C64.7746 21.8806 63.4209 23.1269 61.9496 23.1269H60.0246H58.8246V24.3269V28.7019V29.7952L59.9132 29.8967C79.9582 31.7653 96.3453 48.2629 98.9081 69.6198ZM92.2246 70.5019H93.6155L93.4116 69.126C90.5342 49.7036 74.8588 35.0269 55.9996 35.0269C37.136 35.0269 21.465 49.8831 18.5878 69.1244L18.3818 70.5019H19.7746H92.2246ZM11.0246 76.1519H9.82461V77.3519V84.8769C9.82461 87.1146 11.5869 88.8768 13.8246 88.8768H98.3496C100.587 88.8768 102.35 87.1146 102.35 84.8769V77.3519V76.1519H101.15H11.0246Z"
                  fill="#733F0F"
                  fillOpacity="0.31"
                  stroke="white"
                  strokeWidth="2.4"
                />
              </svg>
              <p className="text-2xl max-sm:text-[20px] text-[#14413E]">
                Restaurants
              </p>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <Image
                src="/images/home/tv.png"
                alt="TV"
                width={93}
                height={93}
              />
              <p className="text-2xl max-sm:text-[20px] text-[#14413E]">TV</p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <Image
                src="/images/home/elevator.png"
                alt="elevator"
                width={93}
                height={93}
              />
              <p className="text-2xl max-sm:text-[20px] text-[#14413E]">
                Elevator/Lift
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <Image
                src="/images/home/person.png"
                alt="person"
                width={93}
                height={93}
              />
              <p className="text-2xl max-sm:text-[20px] text-[#14413E]">
                Caretaker
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
              <Image
                src="/images/home/ac.png"
                alt="AC"
                width={93}
                height={93}
              />
              <p className="text-2xl max-sm:text-[20px] text-[#14413E]">
                Air conditioner
              </p>
            </div>

            <div className="flex flex-col justify-center items-center ">
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
              <p className="text-2xl max-sm:text-[20px] text-[#14413E]">
                Wi-fi
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Home rules sections */}
      <section className="relative w-full mt-[40px]">
        <Image
          src={apartstructure1}
          className="absolute left-[0px] bottom-[110px] max-sm:divide-y-reverse max-sm:w-[189px] max-sm:top-[46rem] max-sm:hidden max-lg:hidden max-xl:hidden"
          height={354}
          width={385}
          alt="apartstructure1"
        />
        <Image
          src={apartstructure11}
          className="absolute invisible max-sm:visible max-lg:visible top-[0px] right-[0px] max-sm:w-[139px] max-lg:w-[204px] max-sm:top-[-5%] max-lg:top-[-4%]"
          width={139}
          height={96}
          alt="apartstructure11"
        />
        <Image
          src={apartstructure2}
          className="absolute left-[0px] top-[100px] max-sm:divide-y-reverse max-sm:top-[30rem] max-sm:hidden max-lg:hidden"
          height={354}
          width={385}
          alt="apartstructure2"
        />
        <div className="w-full">
          <div className="bg-cover bg-[url(/images/home/amenities-bg.png)] overflow-hidden">
            <div className="container flex m-auto max-xl:flex-col ">
              <div
                className="py-[90px] pl-5 z-10 max-lg:py-[40px] max-sm:px-5"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h2 className="text-[#14413E] font-medium flex items-center gap-5 text-[52px] max-sm:text-[35px] pb-3 Newsreader ">
                  House Rules
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="79"
                    height="7"
                    viewBox="0 0 79 7"
                    fill="none"
                    className="mt-4"
                  >
                    <path
                      d="M78.8868 3.29248L76 0.405729L73.1133 3.29248L76 6.17923L78.8868 3.29248ZM0 3.79248L76 3.79248V2.79248L0 2.79248L0 3.79248Z"
                      fill="#14413E"
                    />
                  </svg>
                </h2>
                <div className="flex mt-5">
                  <div className="flex flex-col w-[769px] gap-4 z-10 ">
                    <div className="flex gap-2 items-center">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Property Rules at Bougainvilla Apartment | Studio Units
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Check-in:1 PM Check-out:11 AM
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Unmarried couples are not allowed
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Guests below 18 years of age are not allowed at the
                        property.
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Passport, Aadhar, Driving License and Govt. ID are
                        accepted <br /> as ID proof(s)
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Pets are not allowed.
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <Point />
                      </div>
                      <p className="text-[24px] max-sm:text-[16px] max-lg:text-[24px] text-[#333]">
                        Smoking within the premises is not allowed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-12 max-sm:gap-2 py-[90px] max-lg:justify-center max-lg:py-10 max-sm:px-6 max-sm:pt-0 max-sm:pb-14 w-full z-10 max-">
                <Image
                  src={HouseRuleApart1}
                  height={500}
                  width={500}
                  className="max-sm:w-[241.086px] max-sm:h-[215.723px] ml-auto"
                  alt="HouseRuleApart1"
                />
                <Image
                  src={HouseRuleApart2}
                  className="max-sm:w-[251.916px] max-sm:h-[215.843px]"
                  height={543}
                  width={605}
                  alt="HouseRuleApart2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* One bed Room apartment */}
      <section className="relative" data-aos="zoom-in" data-aos-duration="1500">
        <Image
          src={apartstructure4}
          className="max-sm:w-[178.916px] max-sm:h-[215.843px] absolute hidden max-sm:block max-sm:top-[400px] left-[-25px]"
          width={139}
          height={96}
          alt="apartstructure4"
        />

        <div className="container-main mt-[115px] mb-[200px] max-sm:mt-0 max-lg:mt-0">
          <div className="flex max-sm:flex-col max-sm:gap-7  max-lg:gap-10 max-2\xl:gap-6 max-xl:gap-7">
            <div className="w-3/5 flex gap-7 max-sm:flex-col max-sm:w-full max-sm:gap-0 max-lg:flex-col max-lg:w-full max-lg:gap-0">
              <div className="flex flex-col w-2/5 gap-16 mt-[120px] max-sm:w-full max-lg:w-full">
                <h2 className="text-[#14413E] font-Newsreader text-[52px] font-medium leading-[64px] capitalize max-sm:text-[32px] max-sm:-mt-10 max-lg:text-[42px] max-lg:mb-[1.5rem] max-sm:leading-10 ">
                  One Bed Room Apartment
                </h2>
              </div>
              <div className="w-3/5 mt-[80px] max-sm:mt-0 max-sm:w-full max-lg:mt-2 max-lg:w-full">
                <div className="max-sm:flex max-sm:gap-1 max-sm:relative max-lg:flex max-lg:gap-2 max-lg:relative">
                  <div>
                    <Image
                      src="/images/apartments/studio-a2.svg"
                      alt="Studio"
                      className="h-[625px]  max-lg:w-[550px] max-sm:hidden"
                      width={500}
                      height={625}
                    />
                    <Image
                      src="/images/apartments/studioa2.svg"
                      alt="Studio"
                      className="max-sm:w-[230px] max-sm:h-[230px] sm:hidden"
                      width={605}
                      height={543}
                    />
                  </div>
                  <div className="hidden max-sm:block max-sm:absolute max-sm:right-0 max-sm:top-[58px] max-lg:block max-lg:absolute max-lg:right-0 max-lg:top-[135px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="6"
                      viewBox="0 0 90 6"
                      fill="none"
                      className="max-lg:w-[175px] max-lg:h-[15px] max-sm:w-[89.493px] max-sm:h-[6px]"
                    >
                      <path
                        d="M8.08693 0.275858L7.39914 3.02075C7.39229 3.05472 7.39229 3.08973 7.39914 3.1237L8.08693 5.71073C8.09809 5.75581 8.09551 5.80321 8.07952 5.84681C8.06354 5.89042 8.03489 5.92828 7.99722 5.95554C7.95956 5.98281 7.91459 5.99823 7.86808 5.99986C7.82158 6.00148 7.77564 5.9892 7.73615 5.96463L5.71404 4.85982C5.01691 4.48104 4.27206 4.19718 3.49935 4.01578L0.500573 3.32956C0.451558 3.31724 0.408066 3.28892 0.376996 3.24914C0.345925 3.20936 0.329044 3.16039 0.329044 3.10996C0.329044 3.05953 0.345925 3.01052 0.376996 2.97074C0.408066 2.93096 0.451558 2.90269 0.500573 2.89037L3.99455 1.85416C4.4408 1.7239 4.87194 1.5468 5.28074 1.3258L7.7224 0.0425238C7.76041 0.0158359 7.80551 0.00104862 7.85197 5.36718e-05C7.89844 -0.000941276 7.94415 0.0119168 7.98327 0.0369532C8.02238 0.0619897 8.05314 0.0981063 8.0716 0.140657C8.09006 0.183208 8.0954 0.230267 8.08693 0.275858Z"
                        fill="#AC6231"
                      />
                      <path
                        d="M89.0652 2.90988C89.1901 2.58977 89.3437 2.3788 89.5081 2.30131C89.5483 2.29725 89.5883 2.31639 89.6259 2.35758C89.6634 2.39878 89.6978 2.46123 89.7271 2.54133C89.7563 2.62142 89.7797 2.71757 89.7961 2.82419C89.8124 2.93081 89.8213 3.04579 89.8222 3.16247C89.8214 3.27942 89.8126 3.39473 89.7963 3.5017C89.7801 3.60867 89.7566 3.70517 89.7274 3.78558C89.6982 3.866 89.6637 3.92873 89.6261 3.97012C89.5884 4.0115 89.5483 4.03073 89.5081 4.02667C89.3368 3.97108 89.1761 3.75784 89.0494 3.41807L3.75682 3.41576L3.75683 2.93497L89.0652 2.90988Z"
                        fill="#AC6231"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-2/5 flex flex-col gap-10 max-sm:w-full max-sm:flex-row-reverse max-sm:gap-2 max-sm:justify-between max-sm:h-[250px] max-sm:-mb-20 max-lg:w-full max-lg:flex-row-reverse max-lg:gap-2 max-lg:justify-between ">
              <div className="max-sm:w-4/5 max-sm:flex max-sm:justify-end max-lg:w-4/5 max-lg:flex max-lg:justify-end">
                <Image
                  src="/images/apartments/studioa2.svg"
                  alt="Studio"
                  className="max-sm:w-[230px] max-lg:w-[550px] max-sm:hidden"
                  width={696}
                  height={585}
                />
                <Image
                  src="/images/apartments/studio-a2.svg"
                  alt="Studio"
                  className="max-sm:w-[230px] max-lg:w-[550px] sm:hidden"
                  width={808}
                  height={651}
                />
              </div>
              <div className="flex items-end ">
                <OneBedRoomCustomButton>See Room</OneBedRoomCustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StudioApartmentsPage;
