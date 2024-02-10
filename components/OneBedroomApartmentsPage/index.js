import Image from "next/image";
import React from "react";
import BgImage from "../../public/images/home/pseudo.png";
import Point from "../common/StarPoint";
import CustomButton, { OneBedRoomCustomButton } from "../common/Button";
import HouseRuleApart1 from "../../public/images/apartments/house-rules-1.png";
import HouseRuleApart2 from "../../public/images/apartments/house-rules-2.png";
import apartstructure1 from "../../public/images/apartments/apartstructure1.svg";
import apartstructure2 from "../../public/images/apartments/apartstructure2.png";
import apartstructure4 from "../../public/images/apartments/Group 317.png";
import apartstructure11 from "../../public/images/apartments/apartstructure1-1.svg";

function OneBedroomApartmentsPage() {
  return (
    <>
      <div className="absolute z-10 flex justify-center w-full h-[981px] items-center max-sm:h-[300px] max-sm:items-end max-sm:mt-[60px]">
        <div className="bg-[#ffffff] rounded-tl-[37px] rounded-tr-[37px] w-[575px] h-[20%] max-sm:w-[300px] max-sm:rounded-tl-[16px] max-sm:rounded-tr-[16px] max-sm:h-[90px] mt-[-175px]">
          <div className="flex justify-center items-center gap-2 pt-[20px]  flex-col max-sm:pt-[18px] max-sm:pb-[18px]">
            <p className="Newsreader text-[52px] text-[#14413E] font-medium leading-[64px] max-sm:text-[24px] max-sm:DM Serif Display max-sm:text-[#292F36] max-sm:leading-[30px] w-[487px] text-center max-sm:w-[250px]">
              One Bed Room Apartment
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
        alt="BgImage"
      />
      <section>
        <div
          className="flex flex-col items-center mt-20 gap-10 max-sm:mt-[51px] max-sm:gap-6"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          <h2 className="text-[52px] capitalize Newsreader text-[#14413E] w-[1330px] leading-[64px] text-center px-5 max-sm:text-lg max-sm:w-full max-sm:leading-6 max-sm:px-3 max-xl:text-[40px] max-xl:w-full ">
            Surprising people with joy, and celebrating life’s moments. That’s
            what we do
          </h2>
          <Image
            src="/images/apartments/Vector.svg"
            width={263}
            height={44}
            alt="vector"
            className="max-sm:w-[156px] max-sm:h-[26px]"
          />
        </div>
      </section>

      <div className="container-main">
        <div className="flex justify-between gap-14  mt-[115px] max-sm:mt-[65px] max-sm:flex-col-reverse max-xl:flex-col-reverse mb-[14rem] max-sm:mb-0 max-xl:mb-0">
          <div
            className="flex flex-col gap-8 w-[43%] max-sm:w-full max-sm:text-center max-sm:gap-1 max-xl:w-full max-xl:text-center max-xl:gap-1"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="montserrat text-lg uppercase font-medium	leading-6	tracking-[12px] text-[#AC6231] max-sm:text-xs max-sm:leading-6 ">
              our rooms
            </p>
            <h2 className="Newsreader text-[52px] font-medium leading-[64px] capitalize text-[#14413E] max-sm:text-2xl ">
              One Bed Room Apartment
            </h2>
            <p className="font-Sarabun text-2xl leading-[44px] capitalize text-[#333] max-sm:text-sm">
              One Bed Room Apartment has a separate bedroom, a private washroom
              and a drawing room cum seating area with small pantry offering a
              perfect home style look to the apartment. Apartment is equipped
              with cosy furniture, Air conditions, a Refrigerator, a flat screen
              Smart LED Tv and a balcony with a green view of the city.
            </p>
            <p className="font-Sarabun text-2xl leading-[44px] capitalize text-[#333] max-sm:hidden max-xl:hidden">
              All apartments are equipped with cosy furniture, Air conditions, a
              Refrigerator, a flat screen Smart LED TV and a standing balcony
              with view of the city.
            </p>
            <div className="hidden max-sm:flex max-sm:mt-[14px] max-sm:justify-center max-xl:flex max-xl:mt-[14px] max-xl:justify-center">
              <CustomButton> See Room</CustomButton>
            </div>
          </div>

          <div className="w-[58%] right-[-25px] relative max-sm:w-[350px] max-xl:w-[90%] max-sm:left-0 max-sm:flex max-sm:justify-end max-xl:flex max-xl:justify-end ">
            <Image
              src="/images/apartments/Group 340.png"
              alt="Bed Room"
              className="w-[1079.762px] h-[850px] z-10 max-sm:w-[300px] max-sm:h-[270px] max-xl:w-[660px] max-xl:h-[600px]"
              width={1079}
              height={850}
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
            <div className="absolute max-sm:bottom-[-40px] max-sm:left-[-7px] hidden max-sm:block max-xl:block max-xl:bottom-[-75px] max-xl:left-[78px]">
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

        <div className="flex gap-3 mt-28 max-sm:mt-6 max-sm:flex-col max-xl:flex-col max-xl:mt-20 ">
          <div className="max-xl:flex max-xl:justify-start">
            <Image
              src="/images/apartments/steps.png"
              alt="image"
              width={700}
              height={790}
            />
          </div>
          <div className="flex flex-col gap-12 w-1/2 max-sm:w-full max-sm:mt-4 max-xl:w-full max-xl:mt-4">
            <div className="max-sm:hidden max-xl:hidden">
              <Image
                src="/images/apartments/bed.png"
                alt="image"
                width={943}
                height={665}
              />
            </div>
            <div
              className="flex flex-col gap-8 pl-28 max-sm:pl-0 max-sm:gap-1 max-xl:pl-0"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <p className="text-[#AC6231] montserrat text-lg	font-medium	uppercase leading-6	tracking-[12px] max-sm:text-xs max-sm:tracking-[8px]">
                About us
              </p>
              <h2 className="text-[#14413E] Newsreader text-[52px] font-medium leading-[64px] capitalize max-sm:text-[23px] max-sm:leading-[32px]">
                We focus on comfort and quality
              </h2>
              <p className="text-[#333] font-Sarabun text-2xl leading-[44px] capitalize max-sm:text-sm max-sm:leading-[18px] not-italic">
                One Bed Room Apartment has a separate bedroom, a private
                washroom and a drawing room cum seating area with small pantry
                offering a perfect home style look to the apartment. Apartment
                is equipped with cosy furniture, Air conditions, a Refrigerator,
                a flat screen Smart LED Tv and a balcony with a green view of
                the city.
              </p>
              <div className="hidden max-sm:flex max-sm:mt-[14px] max-xl:flex max-xl:mt-[14px] max-sm:w-full max-sm:justify-center">
                <CustomButton> See Room</CustomButton>
              </div>
            </div>
          </div>
        </div>

        <section className="max-lg:pt-[3rem] max-sm:pt-0 py-[2rem] mt-12 mb-20">
          <div className="container-main m-auto  max-sm:p-[0.5rem]">
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
              className="flex justify-between text-center items-center max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 max-sm:gap-[3rem]"
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

              <div className="flex flex-col justify-center items-center  ">
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
      </div>

      <section className="relative w-full mt-[40px]">
        <Image
          src={apartstructure1}
          className="absolute left-[0px] bottom-[200px] max-sm:divide-y-reverse max-sm:w-[189px] max-sm:top-[46rem] max-sm:hidden max-xl:hidden"
          alt="apartstructure1"
        />
        <Image
          src={apartstructure11}
          className="absolute invisible max-sm:visible max-lg:visible top-[0px] right-[0px] max-sm:w-[139px] max-lg:w-[204px] max-sm:top-[-5%] max-lg:top-[-4%]"
          alt="apartstructure11"
        />
        <Image
          src={apartstructure2}
          className="absolute left-[0px] top-[100px] max-sm:divide-y-reverse max-sm:top-[30rem] max-sm:hidden max-xl:hidden"
          alt="apartstructure2"
        />
        <div className="">
          <div className="bg-cover bg-[url(/images/home/amenities-bg.png)] overflow-hidden">
            <div className="container flex m-auto max-lg:flex max-lg:flex-col">
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
              <div className="flex gap-12 max-sm:gap-2 py-[90px] max-lg:justify-center max-lg:py-10 max-sm:px-6 max-sm:pt-0 max-sm:pb-14 w-full z-10">
                <Image
                  src={HouseRuleApart1}
                  height={500}
                  width={500}
                  className="max-sm:w-[241.086px] max-sm:h-[215.723px]"
                  alt="HouseRuleApart1"
                />
                <Image
                  src={HouseRuleApart2}
                  className="max-sm:w-[251.916px] max-sm:h-[215.843px]"
                  alt="HouseRuleApart2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative" data-aos="zoom-in" data-aos-duration="1500">
        <Image
          src={apartstructure4}
          className="max-sm:w-[178.916px] max-sm:h-[215.843px] absolute hidden max-sm:block max-sm:top-[395px]"
          alt="apartstructure4"
        />

        <div className="container-main mt-[115px] mb-[200px] max-sm:mt-0 max-lg:mt-0">
          <div className="flex max-sm:flex-col max-sm:gap-7 max-lg:flex-col max-xl:gap-10">
            <div className="w-3/5 flex gap-7 max-sm:flex-col max-sm:w-full max-sm:gap-0 max-lg:flex-col max-lg:w-full max-lg:gap-0">
              <div className="flex flex-col w-2/5 gap-16 mt-[120px] max-sm:w-full max-lg:w-full">
                <h2 className="text-[#14413E] Newsreader text-[52px] font-medium leading-[64px] capitalize max-sm:text-[32px] max-sm:-mt-10 max-sm:pb-5 max-xl:text-[42px] ">
                  Studio Apartment
                </h2>
                <svg
                  width="346"
                  height="11"
                  viewBox="0 0 346 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="max-sm:hidden max-lg:hidden max-2xl:w-[210px]"
                >
                  <path
                    d="M332.012 0.479357L333.207 5.24914C333.219 5.30817 333.219 5.36901 333.207 5.42804L332.012 9.92351C331.992 10.0018 331.997 10.0842 332.025 10.16C332.052 10.2357 332.102 10.3015 332.168 10.3489C332.233 10.3963 332.311 10.4231 332.392 10.4259C332.473 10.4287 332.553 10.4074 332.621 10.3647L336.135 8.44489C337.347 7.78668 338.641 7.29341 339.984 6.9782L345.195 5.78576C345.28 5.76435 345.355 5.71514 345.409 5.64602C345.463 5.57689 345.493 5.4918 345.493 5.40417C345.493 5.31653 345.463 5.23136 345.409 5.16224C345.355 5.09312 345.28 5.04398 345.195 5.02257L339.123 3.22197C338.348 2.99561 337.599 2.68787 336.888 2.30383L332.645 0.0738933C332.579 0.027518 332.501 0.00182218 332.42 9.32652e-05C332.339 -0.00163565 332.26 0.0207078 332.192 0.0642134C332.124 0.107719 332.071 0.170479 332.038 0.24442C332.006 0.31836 331.997 0.400134 332.012 0.479357Z"
                    fill="#AC6231"
                  />
                  <path
                    d="M3.03492 5.0623C2.53399 4.50605 1.91846 4.13946 1.2593 4.0048C1.09838 3.99776 0.937953 4.03101 0.787307 4.1026C0.63666 4.1742 0.498784 4.28272 0.381665 4.4219C0.264546 4.56107 0.17051 4.72815 0.105001 4.91343C0.0394924 5.0987 0.00381965 5.2985 3.52365e-05 5.50126C0.00328135 5.70448 0.0385635 5.90485 0.103838 6.09074C0.169112 6.27662 0.263074 6.4443 0.380256 6.58403C0.497437 6.72376 0.635504 6.83278 0.786425 6.90469C0.937345 6.97661 1.09811 7.01001 1.25937 7.00295C1.94605 6.90635 2.59024 6.53579 3.09791 5.94537L345 5.93681L345 5.10134L3.03492 5.0623Z"
                    fill="#AC6231"
                  />
                </svg>
              </div>
              <div className="w-3/5 mt-[80px] max-sm:mt-0 max-sm:w-full max-lg:mt-2 max-lg:w-full">
                <div className="max-sm:flex max-sm:gap-1 max-sm:relative max-lg:flex max-lg:gap-2 max-lg:relative">
                  <div>
                    <Image
                      src="/images/apartments/studio1.png"
                      alt="Studio"
                      className="h-[625px] max-sm:h-[266px] max-sm:w-[250px]"
                      width={490}
                      height={625}
                    />
                  </div>
                  <div className="hidden max-sm:block max-sm:absolute max-sm:right-0 max-sm:top-[58px] max-lg:block max-lg:absolute max-lg:right-0 max-lg:top-[135px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="90"
                      height="6"
                      viewBox="0 0 90 6"
                      fill="none"
                      className="max-lg:w-[230px] max-lg:h-[15px] max-sm:w-[78.493px] max-sm:h-[6px] "
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
                  src="/images/apartments/studio2.png"
                  alt="Studio"
                  className="max-sm:w-[210px] max-sm:h-[294px] max-lg:w-[550px]"
                  width={808}
                  height={651}
                />
              </div>
              <div className="flex items-end max-sm:w-[12px] max-sm:h-[294px] ">
                <OneBedRoomCustomButton>See Room</OneBedRoomCustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OneBedroomApartmentsPage;
