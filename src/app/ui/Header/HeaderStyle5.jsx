"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavList from "./NavList";

const HeaderStyle5 = ({ logo, logoUrl }) => {
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState();
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsSticky("cs_gescout_sticky"); // Scrolling down
      } else if (currentScrollPos !== 0) {
        setIsSticky("cs_gescout_sticky cs_gescout_show"); // Scrolling up
      } else {
        setIsSticky();
      }
      setPrevScrollPos(currentScrollPos); // Update previous scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <header
      className={`cs_site_header cs_style_1 cs_sticky_header  ${
        isSticky ? isSticky : ""
      }`}
    >
      <div className="cs_main_header cs_fs_18 cs_heading_color cs_medium">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link
                className="cs_site_branding"
                href={logoUrl}
                aria-label="Home page link"
              >
                <img src={`${logo}`} alt="Logo" />
              </Link>
              <div className="cs_main_header_center">
                <div className="cs_nav">
                  <NavList
                    setMobileToggle={setMobileToggle}
                    mobileToggle={mobileToggle}
                  />
                </div>
              </div>
            </div>
            <div className="cs_main_header_right">
              <Link
                href="/login"
                aria-label="Register page link button"
                className=""
              >
                <span>Login</span>
              </Link>
              <Link
                href="/register"
                aria-label="Register page link button"
                className="cs_btn cs_style_1 cs_fs_16 cs_semibold cs_purple_bg cs_white_color"
              >
                <span>Sign Up Free</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderStyle5;
