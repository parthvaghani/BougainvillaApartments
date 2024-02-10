import React from "react";
import CustomButton from "../common/Button";
import BgImage from "../../public/images/home/pseudo.png";
import Image from "next/image";
import StarPoint from "../common/StarPoint";
import Vector from "../../public/images/apartments/TinyVector";
import { Email, Global, BigArrow } from "@/public/images/contact/Vectors";

export const ContactPage = () => {
  const inputStyle = { fontSize: "24px" };

  return (
    <>
      <div className="relative overflow-hidden">
        <Image
          src="/images/contact/D1.png"
          alt="15"
          className="absolute z-2 top-72 max-sm:hidden max-lg:hidden"
          width={350}
          height={349}
        />
        <Image
          src="/images/contact/D2.png"
          alt="16"
          className="absolute z-[1] top-[600px] max-sm:hidden max-lg:hidden"
          width={385}
          height={354}
        />
        <div className="absolute z-[2] flex justify-center w-full h-[981px] items-center max-sm:h-[360px] max-sm:items-end">
          <div className="bg-[#ffffff] rounded-tl-[37px] rounded-tr-[37px] w-[575px] h-auto max-sm:w-[300px] max-sm:rounded-tl-[16px] max-sm:rounded-tr-[16px] max-sm:h-[90px] relative -top-14 max-sm:top-0 max-lg:-top-4">
            <div className=" flex justify-center items-center gap-2 pt-[41px] pb-[41px] flex-col max-sm:pt-[18px] max-sm:pb-[18px]">
              <p className="Newsreader text-[52px] text-[#14413E] font-medium leading-[64px] max-sm:text-[24px] max-sm:DM Serif Display max-sm:text-[#292F36] max-sm:leading-[30px] ">
                Contact Us
              </p>
              <p className="Jost text-[22px] text-[#AC6231] font-normal leading-[33px] not-italic max-sm:text-[12px] max-sm:leading-[18px] max-sm:text-[#4D5053] max-sm:font-bold">
                Home / Contact Us
              </p>
            </div>
          </div>
        </div>
        <Image
          src={BgImage}
          className="w-full h-[500px] relative max-sm:h-[350px] max-lg:h-[550px] max-sm:object-cover max-sm:pt-20"
          height={500}
          width={"100%"}
          alt="BgImage"
        />
        <div className="container mx-auto max-sm:container z-[3] relative max-sm:mx-0">
          <div className="max-sm:w-full max-sm:flex max-sm:items-center max-sm:flex-col max-sm:mb-5 max-lg:flex max-lg:flex-col max-lg:items-center ">
            <h1
              className="text-center text-[52px] leading-[64px] mt-[100px] capitalize Newsreader pb-[54px] max-sm:text-lg max-sm:text-[18px] max:sm:leading-[24px] max-sm:mt-14 max-sm:w-60 max-sm:pb-6 max-sm:text-[#14413E]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              We love meeting new people and helping them
            </h1>
            <div className="w-full flex justify-center ">
              <Vector />
            </div>
          </div>
          <div className="md:mt-11 flex gap-24 max-sm:gap-0 max-sm:flex-col-reverse max-lg:flex-col-reverse max-xl:flex-col-reverse max-lg:gap-0 relative z-[4]">
            <div
              className="container w-[60%] max-lg:w-full max-xl:w-full"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              <form
                action="#"
                method="POST"
                className="mx-auto mt-16 max-w-full sm:mt-10"
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 font-[Sarabun] w-full text-2xl max-sm:gap-10 max-sm:text-[20px] max-sm:gap-y-6 ">
                  <div>
                    <div className="max-sm:px-4">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Name"
                        style={inputStyle}
                        className="text-3xl block w-full border-0 border-b border-solid border-[#000000] px-3.5 py-2 text-[#4D5053] shadow-sm sm:leading-6 placeholder-[#4D5053] h-14 placeholder:text-2xl max-sm:text-xl max-sm:pl-0 max-lg:pl-0 max-sm:w-full max-sm:placeholder-[#333] max-sm:placeholder:text-[20px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="max-sm:px-4">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Email"
                        style={inputStyle}
                        className="text-3xl block w-full border-0 border-b border-solid border-[#000000] px-3.5 py-2 text-[#4D5053] shadow-sm sm:leading-6 placeholder-[#4D5053] h-14 placeholder:text-2xl max-sm:text-xl max-sm:pl-0 max-lg:pl-0 max-sm:w-full max-sm:placeholder-[#333] max-sm:placeholder:text-[20px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="max-sm:px-4">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        autoComplete="organization"
                        placeholder="Subject"
                        style={inputStyle}
                        className="text-3xl block w-full border-0 border-b border-solid border-[#000000] px-3.5 py-2 text-[#4D5053] shadow-sm sm:leading-6 placeholder-[#4D5053] h-14 placeholder:text-2xl max-sm:text-xl max-sm:pl-0 max-lg:pl-0 max-sm:w-full max-sm:placeholder-[#333] max-sm:placeholder:text-[20px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative max-sm:px-4">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        placeholder="Phone"
                        style={inputStyle}
                        className="text-3xl block w-full border-0 border-b border-solid border-[#000000] px-3.5 py-2 text-[#4D5053] shadow-sm sm:leading-6 placeholder-[#4D5053] h-14 placeholder:text-2xl max-sm:text-xl max-sm:pl-0 max-lg:pl-0 max-sm:w-full max-sm:placeholder-[#333] max-sm:placeholder:text-[20px]"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="max-sm:px-4">
                      <input
                        name="message"
                        id="message"
                        placeholder="Hello Iam Intrested in.."
                        style={inputStyle}
                        className="block w-full border-0 border-b outline-none border-solid border-[#000000] px-3.5 py-2 text-2xl text-[#4D5053] shadow-sm sm:leading-6 placeholder-[#4D5053] h-14 placeholder:text-2xl max-sm:w-full max-sm:text-xl max-sm:pl-0 max-lg:pl-0 max-sm:placeholder-[#333] max-sm:placeholder:text-[20px]"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center mt-[54px] max-sm:w-screen">
                  <CustomButton> Contact Us</CustomButton>
                </div>
              </form>
            </div>
            <div className=" w-[60%] max-sm:w-full max-lg:w-full max-lg:pt-8 max-xl:w-full ">
              <div
                className="px-[40px] pt-[32px] pb-[80px] bg-[#f4f0ec] flex flex-col gap-[30px] rounded-[50px] max-lg:rounded-none max-xl:rounded-none"
                data-aos="fade-left"
                data-aos-duration="1500"
              >
                <Image
                  src="/images/contact/image 18.png"
                  alt="logo"
                  className="w-[237px] h-[87px] max-sm:w-[131px] max-sm:h-[48px]"
                  width={237}
                  height={87}
                />
                <p className="font-[Sarabun] text-[#333] text-[24px] capitalize leading-[44px] max-sm:text-sm max-sm:leading-6 max-sm:text-[#333]">
                  Bougainvilla Apartment Design is a fusion design concept which
                  represents the classic French type furniture design with a
                  boutique colourful concepts of the Architect Lt. Mr.
                  TrilochanChhaya. Architect has put his life time experience to
                  design building in a rustic and an artistic way.
                </p>
                <div className="flex flex-col gap-4 max-sm:text-sm max-sm:gap-4">
                  <div className="flex items-center gap-4 max-sm:gap-2 text-2xl max-sm:text-sm">
                    <Email />
                    <p className="font-[Sarabun] leading-6 text-2xl lowercase max-sm:text-sm text-[#4D5053] max-sm:text-[#333]">
                      BOUGAINVILLASURAT@GMAIL.COM
                    </p>
                  </div>
                  <div className="flex items-center gap-4 max-sm:gap-2">
                    <Global />
                    <p className="font-[Sarabun] capitalize leading-6 text-2xl max-sm:text-sm text-[#4D5053] max-sm:text-[#333] ">
                      Bougainvillaapartment.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex flex-col xl:flex-row items-center lg:items-start pt-16 max-lg:pt-28 max-sm:pt-14 max-md:pb-0">
          <div className="mb-10 lg:mb-0 order-2 lg:order-1 max-xl:mx-auto">
            <Image
              src="/images/home/img1.png"
              alt="Your Image"
              className="w-[1000px] h-auto max-xl:w-[800px] object-cover pt-20  max-lg:ml-6 max-sm:ml-3 max-sm:pt-10 max-sm:w-[340px] max-sm:leading-6"
              width={1000}
              height={1097}
            />
          </div>

          <div className="xl:w-1/2 lg:ml-10 order-1 lg:order-2 ">
            <div
              className="w-full py-36 max-sm:py-0 max-sm:w-screen max-lg:py-0"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              <p className="Montserrat text-lg font-medium text-[#AC6231] uppercase leading-6 tracking-[12px] max-sm:text-xs max-sm:px-3">
                Location Area
              </p>
              <div className="flex items-center gap-5 mt-6 max-sm:mt-3">
                <h2 className="Newsreader text-[#14413E] text-[52px] font-medium leading-[64px] max-sm:text-2xl max-sm:px-3 max-sm:Montserrat">
                  Nearby Location
                </h2>
                <BigArrow />
              </div>
              <div className="mt-6 capitalize font-[Sarabun] text-[24px] leading-[54px] max-sm:mt-3 max-sm:leading-6 max-sm:text-sm max-sm:w-full max-sm:flex max-sm:flex-col max-sm:gap-2 max-sm:tracking-[0.5px]">
                <div className="flex items-center gap-2 max-sm:gap-1 max-sm:px-4 max-sm:items-start ">
                  <div className="max-sm:mt-1.5">
                    <StarPoint />
                  </div>
                  <p>About 4 Km from Palsana Surat Highway.</p>
                </div>
                <div className="flex items-center gap-2 max-sm:gap-1 max-sm:px-4 max-sm:items-start ">
                  <div className="max-sm:mt-1.5">
                    <StarPoint />
                  </div>
                  <p>Easy access for people travelling by Car to the City.</p>
                </div>
                <div className="flex items-center gap-2 max-sm:gap-1 max-sm:px-4 max-sm:items-start">
                  <div className="max-sm:mt-1.5">
                    <StarPoint />
                  </div>
                  <p>
                    About 4 km from Surat International Exhibition centre
                    (Sarsana Dome).
                  </p>
                </div>
                <div className="flex items-center gap-2 max-sm:gap-1 max-sm:px-4 max-sm:items-start">
                  <div className="max-sm:mt-1.5">
                    <StarPoint />
                  </div>
                  <p>
                    About 15 minute drive from Surat International Airport.{" "}
                  </p>
                </div>
                <div className="flex items-center gap-2 max-sm:gap-1 max-sm:px-4 max-sm:items-start">
                  <div className="max-sm:mt-1.5">
                    <StarPoint />
                  </div>
                  <p>Less than 1 Km from Udhna Magdalla Road.</p>
                </div>
              </div>
              <div className="flex items-center mt-[54px] max-sm:w-screen max-sm:hidden max-xl:hidden ">
                <CustomButton> Contact Us</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
