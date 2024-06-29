import React, { Fragment, useState } from "react";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { usePathname } from "next/navigation";

const Header = ({ basicInfo, socialProfiles }) => {
  const resume = basicInfo?.[0]?.resume || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  const email = socialProfiles?.[0]?.email || "";
  const profile = basicInfo?.[0]?.profile || "";
  const navigation = [
    {
      id: "0",
      title: "Projects",
      url: "#Projects",
    },
    {
      id: "1",
      title: "Works",
      url: "#works",
    },
    {
      id: "3",
      title: "Resume",
      url: resume,
    },
    {
      id: "4",
      title: "Hire Me",
      url: linkedin,
      onlyMobile: true,
    },
  ];
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState(false);

  const toggleNavigation = () => {
    if (openNav) {
      setOpenNav(false);
      enablePageScroll();
    } else {
      setOpenNav(true);
      disablePageScroll();
    }
  };

  const handelClick = () => {
    enablePageScroll();
    setOpenNav(false);
  };

  return (
    <Fragment>
      <div
        className={`fixed top-0 left-0 w-screen z-50 text-white border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
          openNav ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
        }`}
      >
        <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-2">
          {profile && (
            <a className="block w-[5rem] xl:mr-8 " href="#me">
              <img
                className="drop-shadow-md w-[50px] h-[50px] object-cover rounded-full"
                src={profile}
                alt="profile image"
              />
            </a>
          )}

          <nav
            className={`${
              openNav ? "flex" : "hidden"
            }  fixed top-[6.5rem] right-0 left-0 bottom-0 bg-n-8 lg:flex lg:static lg:mx-auto lg:bg-transparent`}
          >
            <div className="relative z-2 flex flex-col justify-center items-center mx-auto lg:flex-row ">
              {navigation.map((item) => (
                <a
                  href={item.url}
                  key={item.id}
                  onClick={handelClick}
                  className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                    item.onlyMobile ? "lg:hidden" : ""
                  } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-base lg:font-semibold ${
                    item.url === pathname.hash
                      ? "z-2 lg:text-n-1 "
                      : "lg:text-n-1/50"
                  } lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:hover:scale-105 lg:transition-all lg:duration-300 `}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <HamburgerMenu />
          </nav>

          <a
            href={linkedin}
            className="button hidden mr-8 text-n-1/50 bg-transparent transition-colors lg:text-n-1 lg:block lg:text-base "
          >
            Hire Me
          </a>
          <Button
            onClick={toggleNavigation}
            px={"px-3"}
            className={`ml-auto lg:hidden`}
          >
            <MenuSvg openNavigation={openNav} />
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
