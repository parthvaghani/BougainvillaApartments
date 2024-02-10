import React, { useContext } from "react";
import fotter from "../.././public/images/footer/fotter-logo.png";
import structure from "../.././public/images/footer/structure-1.png";
import structure2 from "../.././public/images/footer/structure-2.png";
import Link from "next/link";
import Image from "next/image";
import { SubMenuVisibilityContext } from "../Layout/DefaultLayout";
const Footer = () => {
  const { subMenuVisible, setSubMenuVisible } = useContext(
    SubMenuVisibilityContext
  );

  return (
    <>
      <footer className="text-gray-600 text-sm bg-cover bg-[url(/images/footer/footer-bg.png)] relative z-40 mt-12">
        <div className="container mx-auto flex flex-col">
          <div className="border-b-2 border-[#CDA274] flex justify-between max-sm:gap-8 gap-16 md:gap-8 lg:gap-8 max-lg:flex-col max-sm:items-start max-sm:text-start max-lg:text-center max-lg:items-center max-lg:w-full pt-10 max-sm:px-2 max-sm:py-4 max-sm:flex-col">
            <div className="w-auto">
              <Link href="/home">
                <Image src={fotter} alt="Bougainvilla Apartment" />
              </Link>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col gap-4 sm:gap-8">
                <Link href="/home">
                  <div className="text-sm sm:text-lg font-semibold  text-[#5F4C3B]  uppercase ">
                    Home
                  </div>
                </Link>
                <Link
                  href=""
                  onClick={() => setSubMenuVisible(!subMenuVisible)}
                >
                  <div className="text-sm sm:text-lg font-semibold text-[#5F4C3B]  uppercase ">
                    Types Of Apartments
                  </div>
                </Link>
                <Link href="/about">
                  <div className="text-sm sm:text-lg font-semibold text-[#5F4C3B]  uppercase ">
                    About Us
                  </div>
                </Link>
                <Link href="/contact">
                  <div className="text-sm sm:text-lg font-semibold text-[#5F4C3B]  uppercase ">
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
            <div className="text-[20px] text-[#5F4C3B] sm:text-lg md:mb-0 w-[300px] max-sm:text-[14px] uppercase">
              <p>About Bougainvilla apartment</p>
              <p className="text-[20px] text-[#5F4C3B] sm:text-lg pb-2  max-sm:text-[14px] uppercase">
                6, Rajwansh society, Nr.Ratnadeep Hospital, New city light road,
                Surat, Gujarat - 395007
              </p>
              <p>bougainvillasurat@gmail.com</p>
            </div>
            <div className="w-full max-w-[520px] h-[294px] mb-10 max-sm:w-[95%] max-sm:mx-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29767.453441290018!2d72.797604!3d21.155117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d9567f2c72b%3A0xe2d22b5b39425e3c!2sBougainvilla%20Apartment!5e0!3m2!1sen!2sin!4v1706255849409!5m2!1sen!2sin"
                className="w-full h-full"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="text-center text-xs p-7 leading-6 font-normal">
            <p className="text-[#333] uppercase leading-normal text-[20px] text-sm sm:text-lg">
              © 2020 Bougainvillaapartment.com All Rights Reserved. Site
            </p>
          </div>
        </div>
        <div className="absolute z-0 top-[60px] left-0 hidden sm:block">
          <Image src={structure} alt="Bougainvilla Apartment" />
        </div>
        <div className="absolute z-0 bottom-0 left-0 hidden sm:block">
          <Image
            src={structure2}
            alt="Bougainvilla Apartment"
            className="h-[140px]"
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
