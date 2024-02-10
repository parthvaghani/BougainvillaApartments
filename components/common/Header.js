import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/images/logo/Logo.png";
import toggle from "../../public/icons/toggle.svg";
import { useOnClickOutsideSingel } from "@/Hooks/useOnClickOutside";
import { SubMenuVisibilityContext } from "../Layout/DefaultLayout";

function Header() {
  const { subMenuVisible, setSubMenuVisible } = useContext(
    SubMenuVisibilityContext
  );
  const navItems = [
    { path: "/home", label: "Home" },
    {
      label: "Types of Apartments",
      subItems: [
        {
          path: "/studio-apartment",
          label: "Studio Apartment",
          key: "StudioApartment",
        },
        {
          path: "/one-bedroom-apartment",
          label: "One Bed Room Apartment",
          key: "OneBedRoomApartment",
        },
      ],
    },
    { path: "/gallery", label: "Gallery", key: "Gallery" },
    { path: "/about", label: "About Us", key: "About" },
    { path: "/contact", label: "Contact Us", key: "Contact" },
  ];

  const router = useRouter();
  const submenuRef = useRef(null);
  const [isToggle, setIsToggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(router.pathname || "/home");
  const [scrolled, setScrolled] = useState(false);

  useOnClickOutsideSingel(submenuRef, () => {
    setSubMenuVisible(false);
  });

  const handleSelectedMenu = (name) => {
    setSelectedMenu(name);
    if (
      name === "one-bedroom-apartment" ||
      name === "studio-apartment" ||
      name === "Types of Apartments"
    ) {
      setSubMenuVisible(!subMenuVisible);
    }
  };

  const handleResponsiveToggle = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed z-50 w-full mt-8 mx-auto max-lg:mt-0`}>
      <div
        className={`relative flex h-24 items-center justify-between lg:mx-auto lg:rounded-[32px] lg:container md:mx-auto ${
          scrolled
            ? "backdrop-blur-sm bg-[#f5ede391] border-[1px] md:border-[#ffc7846e] max-sm:border-b-[#ffc7846e]"
            : "md:bg-[url(/images/home/amenities-bg.png)] bg-cover bg-white"
        }`}
      >
        <div className="navitems flex flex-1 items-center justify-center">
          <div className="hidden sm:flex space-x-4 gap-4 sm:gap-1 md:gap-4 lg:gap-10 xl:gap-24 items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.key === "Gallery" && (
                  <Link href={"/home"}>
                    <div className="flex flex-shrink-0 items-center">
                      <Image
                        className="w-40 h-16"
                        src={logo}
                        alt="logo image"
                      />
                    </div>
                  </Link>
                )}
                {item.subItems ? (
                  <div className="relative group">
                    <div
                      onClick={() => handleSelectedMenu(item.label)}
                      className={`px-3 py-2 font-medium font-sans text-lg cursor-pointer transition duration-500 ease-in-out hover:border-[#14413E] hover:border-b-2
                      ${
                        router.pathname === "/one-bedroom-apartment" ||
                        router.pathname === "/studio-apartment"
                          ? "border-b-2 border-[#14413E] text-[#14413E]"
                          : "text-[#5F4C3B]"
                      }`}
                    >
                      {item.label}
                    </div>

                    {subMenuVisible && (
                      <div
                        ref={submenuRef}
                        className="absolute bg-[#FFF9F0] mt-[2px] w-[275px] z-10 space-y-2 px-3 py-2 rounded-lg"
                      >
                        {item.subItems.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.path}
                            onClick={() => setSelectedMenu(item.label)}
                          >
                            <div
                              className={`text-[#5F4C3B] block rounded-md px-2 py-3 text-base font-medium text-[20px] `}
                            >
                              <p className="border-b-2 border-transparent transition duration-10 ease-in-out hover:border-[#14413E] hover:border-b-2">
                                {subItem.label}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.path}>
                    <div
                      onClick={() => handleSelectedMenu(item.label)}
                      className={`px-3 py-2 font-medium font-sans text-lg relative transition duration-10 ease-in-out hover:border-[#14413E] hover:border-b-2 ${
                        selectedMenu === item.path
                          ? "border-b-2 border-[#14413E] text-[#14413E]"
                          : "text-[#5F4C3B]"
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tablet and above header */}
          <div className="sm:hidden w-full flex justify-between items-center mx-5 mt-6 mb-4">
            <Link href={"/home"}>
              <div className="w-32">
                <Image src={logo} alt="logo image" />
              </div>
            </Link>
            <div
              className="items-center cursor-pointer"
              onClick={handleResponsiveToggle}
            >
              <Image src={toggle} alt="toggle image" />
            </div>
          </div>
        </div>
      </div>
      {isToggle && (
        <div className="sm:hidden z-50" id="mobile-menu">
          <div
            className={`space-y-1 px-2 pb-3 pt-2 flex flex-col bg-[#FFF9F0] ${
              scrolled ? "backdrop-blur-sm bg-[#f5ede3b7]" : ""
            }`}
          >
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                {item.subItems ? (
                  item.subItems.map((subItem, index) => (
                    <Link key={index} href={subItem.path}>
                      <div
                        className={`text-black  block rounded-md px-3 py-2 text-base font-medium${
                          router.pathname === subItem.path &&
                          "border-b-2 border-[#14413E]"
                        }`}
                      >
                        {subItem.label}
                      </div>
                    </Link>
                  ))
                ) : (
                  <Link href={item?.path}>
                    <div
                      className={`text-black block rounded-md px-3 py-2 text-base font-medium${
                        router.pathname === item.path &&
                        "border-b-2 border-[#14413E]"
                      }`}
                    >
                      {item.label}
                    </div>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
