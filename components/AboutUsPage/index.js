import Image from "next/image";
import React from "react";
import strctureabout from "../../public/images/about/strcture-about.png";
import strctureabout2 from "../../public/images/about/strcture-about-2.png";
import aboutRoom from "../../public/images/about/about-room.png";
import aboutRoom2 from "../../public/images/about/about-room-2.png";
import BgImage from "../../public/images/home/pseudo.png";
import strctureabout6 from "../../public/images/about/strcture-about-6.png";
import CustomButton from "../common/Button";
import aboutcafeteria from "../../public/images/about/cafeteria-about.png";
import Vector from "../../public/images/apartments/TinyVector";
import { BigArrow } from "@/public/images/contact/Vectors";
import Star from "../../components/common/StarPoint";

function AboutUsPage() {
  return (
    <>
      <div className="absolute z-10 flex justify-center w-full h-[981px] items-center max-sm:h-[360px] max-sm:items-end">
        <div className="bg-[#ffffff] rounded-tl-[37px] rounded-tr-[37px] w-[575px] h-auto max-sm:w-[300px] max-sm:rounded-tl-[16px] max-sm:rounded-tr-[16px] max-sm:h-[90px]">
          <div className="flex justify-center items-center gap-2 pt-[41px] pb-[41px] flex-col max-sm:pt-[18px] max-sm:pb-[18px]">
            <p className="Newsreader capitalize text-[52px] text-[#14413E] font-medium leading-[64px] max-sm:text-[24px] max-sm:DM Serif Display max-sm:text-[#292F36] max-sm:leading-[30px] ">
              Know more About Us
            </p>
            <p className="Jost tracking-[0.22px] text-[22px] text-[#AC6231] font-normal leading-[33px] not-italic max-sm:text-[12px] max-sm:leading-[18px] max-sm:text-[#4D5053]">
              Home / About Us
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
        <div className="relative">
          <Image
            src={strctureabout}
            className="absolute left-0 top-[-130px] max-lg:hidden"
            alt="strctureabout"
          />
          <Image
            src={strctureabout2}
            className="absolute  left-5 top-[170px] max-lg:hidden"
            alt="strctureabout2"
          />
        </div>
        <div className="container m-auto pt-24 max-sm:pt-14 max-lg:pt-7 leading-[64px]  max-sm:leading-[24px] max-sm:p-5 z-10 ">
          <div className="w-full flex justify-center ">
            <div
              className="w-full items-center max-w-[1333px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              <h1 className="text-[#14413E] text-[52px] Newsreader font-medium text-center max-sm:text-[18px]">
                Surprising people with joy, and celebrating life’s moments.
                That’s what we do
              </h1>
              <div className="flex justify-center pt-10">
                <Vector />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="xl:container xl:m-auto xl:pt-24 pt-[450px] pb-64 max-lg:pb-32 max-sm:pb-20 max-sm:pt-[450px] max-xl:pt-[700px] overflow-hidden">
          <div className="flex justify-center">
            <div className="w-[100%] bg-cover bg-[url(/images/home/amenities-bg.png)] max-sm:py-8 py-6 max-w-full md:max-w-[922px] max-sm:w-[390px] max-sm:h-[510px] mx-auto">
              <div className="text-center items-center flex justify-center">
                <div className="pt-16  max-sm:p-4">
                  <div
                    className="text-center flex justify-center pb-8 max-lg:pb-4 max-sm:pb-2"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="79"
                      viewBox="0 0 6 79"
                      fill="none"
                      className="max-sm:h-[43px]"
                    >
                      <path
                        d="M3 0.096647L0.113249 2.9834L3 5.87015L5.88675 2.9834L3 0.096647ZM2.5 2.9834V78.9583H3.5V2.9834H2.5Z"
                        fill="#AC6231"
                      />
                    </svg>
                  </div>
                  <p
                    className="text-[#AC6231] text-[18px] max-sm:text-[12px] uppercase tracking-[12px] max-sm:pb-3 Montserrat  max-sm:tracking-[8px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    About us
                  </p>
                  <h2
                    className="text-[#14413E] text-[52px] max-sm:text-[24px] md:w-[500px] Newsreader leading-[72px] max-sm:leading-[32px] font-medium m-auto  pb-8"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Experience the Wonder of Nature in Comfort and Style
                  </h2>
                  <p
                    className="w-full md:w-[658px] h-[220px] text-[24px] max-sm:w-[337px] max-sm:h-[141px] max-sm:text-[14px] max-sm:leading-5 max-sm:pb-2  pb-8"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Bougainvilla Apartment Design is a fusion design concept
                    which represents the classic French type furniture design
                    with a boutique colourful concepts of the Architect Lt. Mr.
                    TrilochanChhaya. Architect has put his life time experience
                    to design building in a rustic and an artistic way.
                  </p>
                  <p
                    className="w-full md:w-[658px] h-[220px] max-sm:pt-0 max-sm:text-[14px] max-sm:w-[337px]  max-sm:leading-5  text-[24px]"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    Developers have made the best effort to restore all the
                    trees surrounding the property to allow staying guests to
                    feel the taste of nature and to experience a green home.
                    Moreover, each apartment has a small balcony to allow guests
                    to breathe abundant fresh air and restore the energy for the
                    day.
                  </p>
                </div>
              </div>
              <div className="absolute">
                <Image
                  src={aboutRoom}
                  className="relative left-[850px] bottom-[700px] max-2xl:h-[350px] max-2xl:w-[290px] max-2xl:left-[810px] max-sm:hidden max-xl:hidden "
                  width={395}
                  height={489}
                  alt="aboutRoom"
                />
                <Image
                  src={aboutRoom2}
                  className="relative max-sm:w-[320px] bottom-[750px] left-[-280px] max-xl:left-[200px] max-xl:top-[-1500px] max-sm:left-[30px] max-sm:top-[-1020px]"
                  width={406}
                  height={515}
                  alt="aboutRoom2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="container m-auto capitalize pt-20 max-sm:pt-0 max-lg:pt-5">
          <div
            className="text-center px-6 md:px-20"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <p className="text-[#AC6231] text-[18px] max-sm:pb-5  Montserrat tracking-[12px]  max-sm:text-[12px] max-sm:tracking-[8px]">
              DINING EXPERIENCE
            </p>
            <h2 className="text-[#14413E] text-[52px] pb-3 Newsreader font-medium max-sm:text-[24px]">
              we'll even take you to dinner
            </h2>
            <p className="text-[24px] text-[#333] font-light max-sm:text-[14px] max-sm:leading-5 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              malesuada elit ipsum, nec ultricies diam commodo non. Duis nec
              elit diam. Nunc rutrum, velit sed vehicula cursus, purus turpis
              tincidunt erat, sed varius erat metus quis lectus. Sed et metus
              dignissim, suscipit odio at, placerat purus. Sed facilisis iaculis
              sapien, ac sodales nulla. Nullam sed congue odio, at ornare eros.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-between max-lg:gap-10 max-sm:gap-0 max-sm:p-5 max-sm:mt-3  mt-12 ">
            <div
              className="flex flex-col md:w-1/2"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <h2 className="ml-48 text-[##14413E] max-md:pl-0 max-sm:text-[24px]  max-sm:text-start max-sm:ml-10  font-medium max-lg:text-center  max-lg:-ml-16 text-[#14413E] text-[52px] pb-3 Newsreader">
                Restaurant
              </h2>
              <div className="pt-4 max-sm:pt-2 max-lg:pt-5 ">
                <Image
                  src="/images/home/restaurant.png"
                  className="z-10 relative h-auto w-auto  max-sm:w-[230px] max-sm:h-[255px]"
                  width={870}
                  height={664}
                  alt="restaurant"
                />
              </div>
            </div>
            <div
              className="flex  md:w-1/2 justify-end pt-56 max-md:pt-32 max-sm:pt-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <div className="flex flex-col ">
                <div className=" md:mb-0">
                  <Image
                    src={aboutcafeteria}
                    className="max-sm:w-[230px] max-sm:h-[255px] "
                    width={1270}
                    height={652}
                    alt="aboutcafeteria"
                  />
                </div>
                <h2 className="text-center pt-10 max-sm:pt-2 max-lg:pt-5  text-[##14413E]  max-sm:text-[24px] md:text-center text-[#14413E] text-[52px] font-medium pb-3 Newsreader">
                  Cafeteria
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative">
          <Image
            src={strctureabout6}
            className="absolute right-0 top-[90px] max-sm:top-[450px] max-lg:top-[600px] "
            alt="strctureabout6"
          />
        </div>
        <div className="pt-20  max-sm:pt-14">
          <div className="bg-cover bg-[url(/images/home/amenities-bg.png)]">
            <div className="container flex m-auto max-lg:flex gap-36 max-lg:gap-7 max-sm:gap-14    max-lg:flex-col">
              <div
                className=" m-auto max-sm:pt-12 max-lg:pt-14"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <p className="text-[#AC6231] uppercase font-medium tracking-[12px] text-[18px] Montserrat  max-sm:text-[12px] max-sm:tracking-[8px]">
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
                      <p className="text-[24px] text-[#333] capitalize max-sm:text-[14px] ">
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
                      <p className="text-[24px] text-[#333] capitalize  max-sm:text-[14px]">
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
                      <p className="text-[24px] text-[#333] capitalize  max-sm:text-[14px] ">
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

      <section className="overflow-hidden">
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start max-sm:pb-0 max-sm:mb-0 py-32 my-12 max-sm:py-5">
          <div className="lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1 relative max-sm:p-5">
            <Image
              src="/images/about/table.png"
              alt="Your Image"
              className="w-full h-auto object-cover  relative z-2"
              width={732}
              height={1096}
            />
          </div>
          <div className="lg:w-1/2 lg:ml-20 order-1 lg:order-2">
            <div
              className="w-full py-16 max-sm:py-0 max-sm:w-screen max-lg:py-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <p className="Montserrat text-lg text-[#AC6231] uppercase tracking-[12px] max-sm:text-xs  max-sm:px-3">
                Location Area
              </p>
              <div className="flex items-center gap-5 mt-3 max-sm:mt-3">
                <h2 className="Newsreader text-[52px] font-medium leading-[64px] max-sm:text-2xl  max-sm:px-3">
                  Nearby Location
                </h2>
                <BigArrow />
              </div>
              <div className="mt-6 m-auto capitalize font-[Sarabun] text-2xl leading-[54px] max-sm:my-5 max-sm:leading-6 max-sm:text-sm max-lg:pb-12 max-sm:py-0	max-sm:w-full">
                <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-3 max-sm:items-center">
                  <div className="max-sm:mt-1.5 max-sm:py-2  ">
                    <Star />
                  </div>
                  <p className="max-sm:text-[14px] flex items-center ">
                    About 4 Km from Palsana Surat Highway.
                  </p>
                </div>
                <div className="flex  gap-3 max-sm:gap-2 max-sm:px-3 max-sm:items-start ">
                  <div className="max-sm:mt-1.5 max-sm:py-0 pt-4 ">
                    <Star />
                  </div>
                  <p className="max-sm:text-[14px] max-sm:py-0">
                    Easy access for people travelling by Car to the City.
                  </p>
                </div>
                <div className="flex  gap-2 max-sm:gap-2 max-sm:px-3 max-sm:items-start">
                  <div className="max-sm:mt-1.5 max-sm:py-2 pt-4">
                    <Star />
                  </div>
                  <p className="max-sm:text-[14px] max-sm:py-1 ">
                    About 4 km from Surat International Exhibition
                    centre(Sarsana Dome).
                  </p>
                </div>
                <div className="flex  gap-2 max-sm:gap-2 max-sm:px-3 max-sm:items-start">
                  <div className="max-sm:mt-1.5 max-sm:py-2 pt-4">
                    <Star />
                  </div>
                  <p className="max-sm:text-[14px] max-sm:py-1">
                    About 15 minute drive from Surat International Airport.
                  </p>
                </div>
                <div className="flex items-center gap-2 max-sm:gap-2 max-sm:px-3 max-sm:items-start">
                  <div className="max-sm:mt-1.5 max-sm:py-2">
                    <Star />
                  </div>
                  <p className="max-sm:text-[14px] max-sm:py-2">
                    Less than 1 Km from Udhna Magdalla Road.
                  </p>
                </div>
              </div>
              <div className="flex items-center mt-[10px] max-sm:w-screen max-sm:hidden max-lg:hidden">
                <CustomButton> Contact Us</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsPage;
