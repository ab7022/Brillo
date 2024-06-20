import React, { useEffect, useState } from "react";
import "../Header/Header.scss";
import Link from "next/link";

function Header({ basicInfo, socialProfiles }) {
  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const delta = 4;
  const [navbarHeight, setNavbarHeight] = useState(0);
  const firstName = basicInfo?.[0]?.first_name || "";
  const lastName = basicInfo?.[0]?.last_name || "";
  const designation = basicInfo?.[0]?.designation || "";
  const city = basicInfo?.[0]?.city || "";
  const country = basicInfo?.[0]?.country || "";
  const email = basicInfo?.[0]?.email || "";
  const resume = basicInfo?.[0]?.resume || "";
  const github = socialProfiles?.[0]?.github || "";
  const linkedin = socialProfiles?.[0]?.linkedin || "";
  console.log("names", firstName, lastName);
  if (!firstName || !lastName) {
    return null;
  }
  useEffect(() => {
    function hasScrolled() {
      const st = window.scrollY;

      if (Math.abs(lastScrollTop - st) <= delta) return;

      if (st > lastScrollTop && st > navbarHeight) {
        document.querySelector("header")?.classList.remove("show-nav");
        document.querySelector("header")?.classList.add("hide-nav");
        document.querySelector(".nav-toggle")?.classList.remove("open");
        document.querySelector(".menu-left")?.classList.remove("collapse");
      } else {
        if (st + window.innerHeight < document.body.scrollHeight) {
          document.querySelector("header")?.classList.remove("hide-nav");
          document.querySelector("header")?.classList.add("show-nav");
        }
      }

      setLastScrollTop(st);
    }

    function scrollHandler() {
      setDidScroll(true);
    }

    window.addEventListener("scroll", scrollHandler);

    // Measure the navbarHeight when the component mounts
    const headerElement = document.querySelector("header");
    if (headerElement) {
      setNavbarHeight(headerElement.offsetHeight);
    }

    const scrollInterval = setInterval(() => {
      if (didScroll) {
        hasScrolled();
        setDidScroll(false);
      }
    }, 250);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      clearInterval(scrollInterval);
    };
  }, [didScroll, lastScrollTop, navbarHeight]);

  function handleLogoClick(e) {
    e.preventDefault();
    document.querySelector(".nav-toggle")?.classList.remove("open");
    document.querySelector(".menu-left")?.classList.remove("collapse");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleNavToggleClick() {
    document.querySelector(".nav-toggle")?.classList.toggle("open");
    document.querySelector(".menu-left")?.classList.toggle("collapse");
  }

  function handleMenuItemClick() {
    document.querySelector(".nav-toggle")?.classList.remove("open");
    document.querySelector(".menu-left")?.classList.remove("collapse");
  }

  return (
    <div>
      <header>
        <div className="headercontainer">
          <nav id="navigation">
            <div className="Logocontainer">
              <Link href="/" className="logo" onClick={handleLogoClick}>
                <div className="stack" style={{ "--stacks": 3 }}>
                  <span style={{ "--index": 0 }}>
                    &lt;{firstName} {lastName} /&gt;
                  </span>
                  <span style={{ "--index": 1 }}>
                    &lt;{firstName} {lastName} /&gt;
                  </span>
                  <span style={{ "--index": 2 }}>
                    &lt;{firstName} {lastName} /&gt;
                  </span>
                </div>
              </Link>
            </div>

            <a
              aria-label="mobile menu"
              className="nav-toggle"
              onClick={handleNavToggleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
            <ul className="menu-left">
              <li>
                <Link href="/" onClick={handleMenuItemClick}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={handleMenuItemClick}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/project" onClick={handleMenuItemClick}>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={handleMenuItemClick}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Your remaining JSX content */}
    </div>
  );
}

export default Header;
