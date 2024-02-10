import React from "react";
import DesignImage from "../../public/images/home/design.png";
import yardImage from "../../public/images/home/DrawingArea.png";
import livingRoomImage from "../../public/images/home/livingroom.png";
import livingRoomImage2 from "../../public/images/home/livingroom2.png";
import BalconyImage from "../../public/images/home/Balcony.png";
import Bgdesign from "../../public/images/home/bgdesign.png";
import AmentiesdesignImage from "../../public/images/home/Amenitiesdesign.png";
import StarPoint from "../common/StarPoint";
import OurroomImage from "../../public/images/home/ourroom.png";
import bedroom from "../../public/images/home/bedroom.png";
import Homecafeteria from "../../public/images/home/Homecafeteria.png";
import home from "../../public/images/home/homeimages.png";
import Image from "next/image";
import CustomButton from "../common/Button";
import { BigArrow } from "@/public/images/contact/Vectors";
import ImageSlider from "./ImageSlider";
import strctureabout6 from "../../public/images/about/strcture-about-6.png";

export const DashBoardPage = () => {
  return (
    <>
      <div
        className="relative container-main"
        data-aos="flip-left"
        data-aos-duration="1500"
      >
        <Image
          src={yardImage}
          className=" w-[200px] h-[359px] absolute  rounded-full right-[92px] top-[150px] z-10 max-sm:w-[110px] max-sm:h-[200px] max-sm:right-[20px] max-sm:top-[300px] max-2xl:top-[250px] max-2xl:right-[0px] 2xl:w-auto 2xl:h-auto 2xl:right-[110px] max-lg:h-[255px] max-lg:w-[150px] max-lg:right-[20px] max-lg:top-[350px] max-lg:z-0 max-xl:top-[250px] max-xl:right-[0px] max-md:top-[360px] max-md:h-[174px] max-md:w-[100px] max-md:right-20"
          alt="yardImage"
        />
        <Image
          src={DesignImage}
          className=" absolute right-[20px] top-[355px] max-sm:w-[100px] max-sm:h-[100px] max-sm:top-[425px] max-sm:right-[5px] 2xl:w-auto 2xl:h-auto max-2xl:top-[450px] max-2xl:right-[-40px] 2xl:right-[3%] 2xl:top-[460px] max-lg:right-0 max-lg:top-[500px] max-lg:h-[144px] max-lg:w-[144px] max-xl:top-[450px] max-xl:-right-[40px] max-md:top-[460px] max-md:h-[100px] max-md:w-[100px] max-md:right-[55px]"
          alt="DesignImage"
        />
        <Image
          src={livingRoomImage}
          className="absolute h-[330px] w-[230px] z-40 left-[60px] top-[690px] max-lg:z-40 max-sm:w-[180px] max-sm:h-[270px] max-sm:top-[540px] max-sm:left-[20px] 2xl:w-auto 2xl:h-auto 2xl:right-[230px] max-lg:left-[50px] max-xl:bottom-0 max-xl:z-50 max-lg:-bottom-[300px]"
          alt="livingRoomImage"
        />
      </div>

      <section className="overflow-hidden">
        <div className="bg-cover bg-fixed bg-[url(/images/home/pseudo.png)]">
          <div className="max-sm:bg-[url(/images/home/pseudosm.png)] max-sm:bg-no-repeat max-sm:bg-cover max-sm:h-[643px]">
            <div className="text-center m-auto flex items-center h-screen justify-center max-sm:text-center max-sm:flex max-sm:justify-center ">
              <div className="text-start pt-[67px] flex-col flex max-sm:gap-2 justify-start max-sm:justify-center max-sm:pt-[10px]">
                <h1 className="z-10 max-lg:text-center max-sm:text-[14px] max-sm:text-center text-3xl font-sans uppercase text-white tracking-[6px] max-sm:tracking-[2px] max-sm:text-lg max-lg:text-[18px]">
                  Welcome to bougainvilla
                </h1>
                <div className="z-10 flex max-sm:justify-center max-sm:m-auto max-sm:w-[44px] max-sm:h-[1px] max-sm:border max-sm:border-solid border-white"></div>
                <h1 className=" max-sm:text-[40px] max-sm:z-10 max-sm:text-center DMSerifDisplay uppercase text-white text-[120px] font-bold max-lg:text-center max-lg:text-[70px] max-xl:text-[86px] max-md:text-[50px] z-10">
                  Where nature
                </h1>
                <h1 className="z-10 max-sm:text-[40px] max-sm:pl-0 justify-end max-sm:flex max-sm:justify-center pl-40 text-[120px] DMSerifDisplay flex items-center uppercase text-white font-bold max-xl:pl-0 max-lg:text-[70px] max-md:text-[50px] max-xl:text-[86px]">
                  <hr className="w-[154px] max-sm:hidden max-lg:mb-0 max-lg:w-[100px]" />{" "}
                  meets luxury
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-36 max-xl:pb-5 max-sm:pb-3">
        <div className="max-sm:w-full max-sm:bg-[url(/images/home/amenities-bg.png)]">
          <div className="container-main xl:m-auto xl:pt-0 pt-0">
            <div className="flex justify-center">
              <div className="w-[100%] bg-cover bg-[url(/images/home/amenities-bg.png)] max-w-full md:max-w-[922px] 2xl:z-10">
                <div className="text-center items-center flex justify-center">
                  <div className="pt-20 pb-10 px-14 max-sm:pt-40 max-sm:px-4">
                    <div
                      className="text-center flex justify-center max-sm:h-[43px]"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="79"
                        viewBox="0 0 6 79"
                        fill="none"
                        className="max-sm:h-10 relative"
                      >
                        <path
                          d="M3 0.113249L0.113249 3L3 5.88675L5.88675 3L3 0.113249ZM2.5 3V78.9769H3.5V3H2.5Z"
                          fill="#AC6231"
                        />
                      </svg>
                    </div>
                    <p
                      className="text-[#AC6231] text-[18px] pt-2 uppercase max-sm:text-xs tracking-[12px] font-medium"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      About us
                    </p>
                    <h2
                      className="text-[#14413E] text-[52px] md:w-[595px] max-sm:text-2xl max-sm:mt-2 pb-8 Newsreader capitalize max-sm:leading-8 leading-[72px] font-medium pt-2"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Experience the Wonder of Nature in Comfort and Style
                    </h2>
                    <p
                      className="w-full md:w-[658px] h-[220px] capitalize text-[24px] max-sm:text-sm max-sm:h-[140px] text-[#333]"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Bougainvilla Apartment Design is a fusion design concept
                      which represents the classic French type furniture design
                      with a boutique colourful concepts of the Architect Lt.
                      Mr. TrilochanChhaya. Architect has put his life time
                      experience to design building in a rustic and an artistic
                      way.
                    </p>
                    <p
                      className="w-full md:w-[658px] h-[220px] capitalize text-[24px] max-sm:text-sm max-sm:h-[70px] text-[#333]"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      Developers have made the best effort to restore all the
                      trees surrounding the property to allow staying guests to
                      feel the taste of nature and to experience a green home.
                      Moreover, each apartment has a small balcony to allow
                      guests to breathe abundant fresh air and restore the
                      energy for the day.
                    </p>
                    <div
                      className=" flex justify-center w-full pb-10 mt-8 max-sm:mt-20 max-sm:pb-0 "
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <CustomButton>See More</CustomButton>
                    </div>
                  </div>
                  <div className="mb-[620px]">
                    <Image
                      src={BalconyImage}
                      className="absolute max-xl:hidden max-2xl:w-[280px]"
                      alt="BalconyImage"
                    />
                  </div>
                  <Image
                    src={Bgdesign}
                    className="absolute mt-[1110px] h-[528px] w-[448px] mr-[900px]  max-2xl:h-[350px] max-2xl:w-[300px] max-xl:hidden"
                    alt="Bgdesign"
                  />
                  <Image
                    src={livingRoomImage2}
                    className="absolute h-[515px] w-[406px] mt-[900px] max-2xl:h-[350px] max-2xl:w-[300px] mr-[1130px] max-xl:hidden"
                    alt="livingRoomImage2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageSlider />

      <section className="mt-40 bg-cover bg-[url(/images/home/amenities-bg.png)] max-xl:mt-2">
        <div className="relative">
          <Image
            src={AmentiesdesignImage}
            className="absolute right-0 top-0 max-xl:hidden"
            alt="AmentiesdesignImage"
          />
        </div>

        <div className="container-main my-16 relative">
          <div
            className="flex mt-16"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="text-[52px] Newsreader text-[Amenities] my-16 max-sm:text-3xl max-sm:my-8">
              Amenities
            </h2>
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
              <p className="text-xl  my-3 max-sm:text-xs">
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

      <section className="flex pt-28 justify-center w-full max-sm:pt-32 max-lg:pt-72 ">
        <div className="container-main mt-11 w-[85%] max-sm:w-[100%] justify-center flex-row max-sm:flex-col-reverse max-lg:flex-col-reverse flex">
          <div
            className="flex-1 w-24 max-sm:w-full max-sm:mt-80 max-lg:w-full max-lg:mt-[600px] max-sm:pl-0"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <p className="text-[#AC6231] max-sm:text-[12px] max-sm:tracking-[8px] montserrat text-[18px] font-semibold uppercase leading-24 tracking-[8px] max-sm:text-center max-sm:font-medium max-lg:text-center">
              our rooms
            </p>
            <h4 className="text-[#14413E] pt-6 Newsreader text-5xl text-[52px] my-2 mb-4 text-left capitalize font-semibold max-sm:text-center max-lg:text-center max-sm:text-[25px] max-sm:pt-0">
              Studio Apartment
            </h4>
            <p className="font-sans pt-6 not-italic capitalize text-[24px] w-[85%] font-400 leading-[44px] mb-4 max-sm:text-center max-sm:mx-auto max-sm:leading-[1.5rem] max-lg:text-center max-lg:mx-auto max-lg:text-[26px] max-sm:text-[14px] max-sm:pt-0">
              Studio Apartments are big space apartments with a seating area, a
              small pantry, a private washroom but no separate bedroom. All
              apartments are equipped with cosy furniture, Air conditions, a
              Refrigerator, a flat screen Smart LED TV and a standing balcony
              with a view of the city1.
            </p>
            <div className="max-sm:mt-[18px] flex justify-start max-sm:justify-center max-lg:justify-center max-sm:mb-[80px]">
              <CustomButton>See Room</CustomButton>
            </div>
          </div>
          <div className=" flex-1 flex justify-center relative top-40">
            <Image
              src={OurroomImage}
              className=" max-sm:w-[320px] h-[750px] pb-5 max-sm:h-[450.694px] max-lg:-top-64 max-lg:w-[630px] absolute bottom-[-140px] max-sm:ml-3"
              alt="Tiny vector2"
            />
            <Image
              src={home}
              className=" max-sm:w-[90.289px] max-sm:top-[-348px] max-sm:right-[10px]  max-sm:h-[145.698px] max-lg:-top-[500px] max-lg:-right-[5px] max-lg:w-[230px] absolute bottom-[510px] right-6 drop-shadow-[14px_14px_10px_rgba(0,0,0,0.25)]  max-sm:drop-shadow-[5px_5px_5px_rgba(0,0,0,0.25)] "
              alt="Tiny vector2"
            />
          </div>
        </div>
      </section>

      <section className="max-sm:mt-[-2rem] mt-36 flex justify-center w-full mx-auto overflow-hidden">
        <div className="mt-0 w-[85%] justify-center flex-row max-sm:flex-col max-lg:flex-col flex container-main">
          <div className="flex-1 ml-3 ">
            <Image
              src={bedroom}
              className="w-[760px] relative ml-8 h-[900px] max-sm:w-[291.205px] max-sm:h-[287.694px] max-lg:w-[630px] max-sm:ml-6"
              alt="Tiny vector1"
            />
          </div>
          <div
            className="flex-1 w-24 max-sm:w-full max-sm:mt-[1rem] max-lg:w-full max-lg:mt-[1rem] mt-36"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h4 className="text-[#14413E] Newsreader text-5xl text-[52px] my-2 mb-4 text-left capitalize font-semibold max-sm:text-center max-lg:text-center flex items-center max-sm:text-[25px] max-lg:pl-[9%] max-lg:text-[49px] max-sm:my-3 max:sm:mb-0 max-sm:p-0 max-sm:w-full">
              <span className="w-[74px] h-[2px] mr-[3%] bg-[#14413E] max-sm:hidden max-lg:hidden "></span>
              One Bed Room Apartment
            </h4>
            <p className="font-[Sarabun] not-italic capitalize text-[24px] mt-6 font-400 leading-[44px] mb-4 max-sm:text-center max-sm:mx-auto max-sm:leading-[1.5rem] max-lg:text-center max-lg:mx-auto max-lg:text-[26px] max-sm:text-[14px] pl-24 max-sm:pl-0 max-lg:pl-0 max-sm:mt-0">
              One Bed Room Apartment has a separate bedroom, a private washroom
              and a drawing room cum seating area with small pantry offering a
              perfect home style look to the apartment. Apartment is equipped
              with cosy furniture, Air conditions, a Refrigerator, a flat screen
              Smart LED Tv and a balcony with a green view of the city.
            </p>
            <div className="flex items-center mt-6 ml-24 max-lg:ml-0 max-sm:py-[5px] max-lg:justify-center">
              <CustomButton>See Room</CustomButton>
            </div>
          </div>
        </div>
      </section>

      <div
        className="container-main m-auto capitalize mt-20 max-sm:mt-6 mb-28 max-sm:mb-[4%] overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="text-center px-6 md:px-20">
          <p className="text-[#AC6231] text-[18px] font-medium leading-6 montserrat max-sm:text-xs max-sm:tracking-[8px] tracking-[12px]">
            DINING EXPERIENCE
          </p>
          <h1 className="text-[#14413E] text-[52px] leading-[64px] mt-6 font-[Newsreader] max-sm:text-[24px] max-sm:leading-8">
            we'll even take you to dinner
          </h1>
          <p className="text-[24px] text-[#333] flex capitalize leading-[44px] mt-6 font-light font-[Sarabun] max-sm:text-[14px] max-sm:mt-[14px] max-sm:leading-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            malesuada elit ipsum, nec ultricies diam commodo non. Duis nec elit
            diam. Nunc rutrum, velit sed vehicula cursus, purus turpis tincidunt
            erat, sed varius erat metus quis lectus. Sed et metus dignissim,
            suscipit odio at, placerat purus. Sed facilisis iaculis sapien, ac
            sodales nulla. Nullam sed congue odio, at ornare eros.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-20 max-sm:mt-7">
          <div
            className="flex flex-col"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="capitalize w-[630px] mb-8 max-md:w-auto leading-[64px] font-[600] flex justify-center max-md:pl-0 max-sm:text-left max-sm:text-[24px] max-lg:text-center max-sm:ml-0 max-lg:ml-0 text-[#14413E] text-[52px] pb-3 Newsreader md:text-left max-sm:leading-[32px] max-sm:mb-0">
              Restaurant
            </h2>
            <div className="">
              <Image
                src="/images/home/restaurant.png"
                width={800}
                height={600}
                className="z-10 relative max-sm:w-[816px]"
                alt="restaurant"
              />
            </div>
          </div>
          <div className="flex justify-end pt-48 max-lg:pt-[4rem] max-md:pt-3">
            <div
              className="flex flex-col pl-24"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="md:mb-0">
                <Image
                  src={Homecafeteria}
                  width={700}
                  height={586}
                  className="max-sm:w-[255px]"
                  alt="Homecafeteria"
                />
              </div>
              <h2 className="text-center mt-8 md:text-center text-[#14413E] text-[52px] pb-3 Newsreader max-sm:text-[24px] max-sm:mt-[11px] max-sm:pb-0 font-[600]">
                Cafeteria
              </h2>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="relative">
          <Image
            src={strctureabout6}
            className="absolute right-0 top-[90px] max-sm:top-[450px] max-lg:top-[600px] "
            alt="strctureabout6"
          />
        </div>
        <div className="pt-0 max-sm:pt-14">
          <div className="bg-cover bg-[url(/images/home/amenities-bg.png)] ">
            <div className="container flex m-auto max-lg:flex gap-36 max-lg:gap-7 max-sm:gap-14 max-lg:flex-col">
              <div
                className=" m-auto max-sm:pt-12 max-lg:pt-14"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <p className="text-[#AC6231] uppercase font-medium tracking-[12px] text-[18px] montserrat  max-sm:text-[12px] max-sm:tracking-[8px]">
                  Our Staff
                </p>
                <h2 className="text-[#14413E] flex items-center gap-5 font-medium text-[52px] pb-3 Newsreader max-sm:text-[24px] max-sm:py-[17px]">
                  Service and Safety
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="79"
                    height="7"
                    viewBox="0 0 79 7"
                    fill="none"
                    className="mt-4 max-sm:hidden"
                  >
                    <path
                      d="M78.8868 3.29248L76 0.405729L73.1133 3.29248L76 6.17923L78.8868 3.29248ZM0 3.79248L76 3.79248V2.79248L0 2.79248L0 3.79248Z"
                      fill="#14413E"
                    />
                  </svg>
                </h2>
                <div className="flex">
                  <div className="flex flex-col w-[634px] gap-4  max-sm:w-[340px] max-sm:gap-4">
                    <div className="flex gap-2 items-center max-sm:items-start">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          className="max-sm:w-[12px] max-sm:h-[12px] max-sm:mt-[6px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 1.29248C12.4911 1.29248 12.9228 1.61806 13.0577 2.09029L14.2504 6.2647C14.7724 8.09184 16.2006 9.52007 18.0278 10.0421L22.2022 11.2348C22.6744 11.3697 23 11.8014 23 12.2925C23 12.7836 22.6744 13.2152 22.2022 13.3502L18.0278 14.5428C16.2006 15.0649 14.7724 16.4931 14.2504 18.3203L13.0577 22.4947C12.9228 22.9669 12.4911 23.2925 12 23.2925C11.5089 23.2925 11.0772 22.9669 10.9423 22.4947L9.74963 18.3203C9.22759 16.4931 7.79936 15.0649 5.97222 14.5428L1.79781 13.3502C1.32557 13.2152 1 12.7836 1 12.2925C1 11.8014 1.32557 11.3697 1.79781 11.2348L5.97222 10.0421C7.79936 9.52007 9.22759 8.09184 9.74963 6.2647L10.9423 2.09029C11.0772 1.61806 11.5089 1.29248 12 1.29248Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                      <p className="text-[24px] text-[#333] capitalize max-sm:text-[14px]">
                        It’s more like a residence with all the services of a
                        hotel.
                      </p>
                    </div>

                    <div className="flex gap-2 items-center">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          className="max-sm:w-[12px] max-sm:h-[12px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 1.29248C12.4911 1.29248 12.9228 1.61806 13.0577 2.09029L14.2504 6.2647C14.7724 8.09184 16.2006 9.52007 18.0278 10.0421L22.2022 11.2348C22.6744 11.3697 23 11.8014 23 12.2925C23 12.7836 22.6744 13.2152 22.2022 13.3502L18.0278 14.5428C16.2006 15.0649 14.7724 16.4931 14.2504 18.3203L13.0577 22.4947C12.9228 22.9669 12.4911 23.2925 12 23.2925C11.5089 23.2925 11.0772 22.9669 10.9423 22.4947L9.74963 18.3203C9.22759 16.4931 7.79936 15.0649 5.97222 14.5428L1.79781 13.3502C1.32557 13.2152 1 12.7836 1 12.2925C1 11.8014 1.32557 11.3697 1.79781 11.2348L5.97222 10.0421C7.79936 9.52007 9.22759 8.09184 9.74963 6.2647L10.9423 2.09029C11.0772 1.61806 11.5089 1.29248 12 1.29248Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                      <p className="text-[24px] text-[#333] capitalize max-sm:text-[14px]">
                        We serve with smile and make people happy.
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          className="mt-1 max-sm:w-[12px] max-sm:h-[12px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 1.29248C12.4911 1.29248 12.9228 1.61806 13.0577 2.09029L14.2504 6.2647C14.7724 8.09184 16.2006 9.52007 18.0278 10.0421L22.2022 11.2348C22.6744 11.3697 23 11.8014 23 12.2925C23 12.7836 22.6744 13.2152 22.2022 13.3502L18.0278 14.5428C16.2006 15.0649 14.7724 16.4931 14.2504 18.3203L13.0577 22.4947C12.9228 22.9669 12.4911 23.2925 12 23.2925C11.5089 23.2925 11.0772 22.9669 10.9423 22.4947L9.74963 18.3203C9.22759 16.4931 7.79936 15.0649 5.97222 14.5428L1.79781 13.3502C1.32557 13.2152 1 12.7836 1 12.2925C1 11.8014 1.32557 11.3697 1.79781 11.2348L5.97222 10.0421C7.79936 9.52007 9.22759 8.09184 9.74963 6.2647L10.9423 2.09029C11.0772 1.61806 11.5089 1.29248 12 1.29248Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                      <p className="text-[24px] text-[#333] capitalize max-sm:text-[14px] ">
                        It is the best place to stay while seeking a relaxation
                        from hustle and bustle of the city.
                      </p>
                    </div>

                    <div className="flex gap-2 ">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="25"
                          viewBox="0 0 24 25"
                          fill="none"
                          className="mt-1 max-sm:w-[12px] max-sm:h-[12px]"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 1.29248C12.4911 1.29248 12.9228 1.61806 13.0577 2.09029L14.2504 6.2647C14.7724 8.09184 16.2006 9.52007 18.0278 10.0421L22.2022 11.2348C22.6744 11.3697 23 11.8014 23 12.2925C23 12.7836 22.6744 13.2152 22.2022 13.3502L18.0278 14.5428C16.2006 15.0649 14.7724 16.4931 14.2504 18.3203L13.0577 22.4947C12.9228 22.9669 12.4911 23.2925 12 23.2925C11.5089 23.2925 11.0772 22.9669 10.9423 22.4947L9.74963 18.3203C9.22759 16.4931 7.79936 15.0649 5.97222 14.5428L1.79781 13.3502C1.32557 13.2152 1 12.7836 1 12.2925C1 11.8014 1.32557 11.3697 1.79781 11.2348L5.97222 10.0421C7.79936 9.52007 9.22759 8.09184 9.74963 6.2647L10.9423 2.09029C11.0772 1.61806 11.5089 1.29248 12 1.29248Z"
                            fill="#333333"
                          />
                        </svg>
                      </div>
                      <p className="text-[24px] text-[#333] capitalize max-sm:text-[14px]">
                        We take all the necessary measures as per the covid-19
                        guidelines to ensure your safety.We understand value of
                        your health and of your beloved ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" pt-24 max-sm:pt-0 flex justify-center w-full z-10">
                <Image
                  src="/images/about/woman-about.png"
                  className="w-auto h-auto max-sm:h-[274px] max-sm:w-[154px]"
                  width={353}
                  height={632}
                  alt="womanImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start pt-16 max-lg:pt-28 max-sm:pt-14 max-md:pb-0 overflow-hidden">
        <div className="mb-10 lg:mb-0 order-2 lg:order-1">
          <Image
            src="/images/home/img1.png"
            alt="Your Image"
            className="w-[1000px] h-auto object-cover pt-20 max-lg:ml-6 max-sm:ml-3 max-sm:pt-10 max-sm:w-[340px] max-sm:leading-6"
            width={1000}
            height={800}
          />
        </div>

        <div
          className="flex justify-start lg:w-1/2 lg:ml-10 order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="w-full py-36 max-sm:py-0 max-sm:w-screen max-lg:py-0">
            <p className="montserrat text-lg font-medium text-[#AC6231] uppercase leading-6 tracking-[12px] max-sm:text-xs max-sm:px-3">
              Location Area
            </p>
            <div className="flex items-center gap-5 mt-6 max-sm:mt-3">
              <h2 className="Newsreader text-[#14413E] text-[52px] font-medium leading-[64px] max-sm:text-2xl max-sm:px-3 max-sm:montserrat">
                Nearby Location
              </h2>
              <BigArrow />
            </div>
            <div className="mt-6 capitalize font-[Sarabun] text-[24px] leading-[54px] max-sm:mt-3 max-sm:leading-6 max-sm:text-sm max-sm:w-full">
              <div className="flex items-center gap-2 max-sm:gap-0.5 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5">
                  <StarPoint />
                </div>
                <p>About 4 Km from Palsana Surat Highway.</p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-0.5 max-sm:px-4 max-sm:items-start ">
                <div className="max-sm:mt-1.5">
                  <StarPoint />
                </div>
                <p>Easy access for people travelling by Car to the City.</p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-0.5 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5">
                  <StarPoint />
                </div>
                <p>
                  About 4 km from Surat International Exhibition centre (Sarsana
                  Dome).
                </p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-0.5 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5">
                  <StarPoint />
                </div>
                <p>About 15 minute drive from Surat International Airport. </p>
              </div>
              <div className="flex items-center gap-2 max-sm:gap-0.5 max-sm:px-4 max-sm:items-start">
                <div className="max-sm:mt-1.5">
                  <StarPoint />
                </div>
                <p>Less than 1 Km from Udhna Magdalla Road.</p>
              </div>
            </div>
            <div className="flex items-center mt-[54px] max-sm:w-screen max-sm:hidden max-lg:hidden">
              <CustomButton> Contact Us</CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
