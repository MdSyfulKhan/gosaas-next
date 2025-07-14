import Link from "next/link";
import DropDown from "./DropDown";

const homePageMenu = [
  {
    title: "AI Writing Assistant",
    linkUrl: "/ai-writing",
  },
  {
    title: "CRM Management",
    linkUrl: "/",
  },
  {
    title: "Task Management",
    linkUrl: "/task-management",
  },
  {
    title: "Data Analytics",
    linkUrl: "/data-analytics",
  },
  {
    title: "App Landing",
    linkUrl: "/app-landing",
  },
  {
    title: "POS Landing",
    linkUrl: "/pos",
  },
  {
    title: "Live Chat",
    linkUrl: "/live-chat",
  },
];

const pagesMenu = [
  {
    title: "About Us",
    linkUrl: "/about-us",
  },
  {
    title: "Services",
    linkUrl: "/services",
  },
  {
    title: "Integration",
    linkUrl: "/integration",
  },
  {
    title: "Faq's & Answer",
    linkUrl: "/faqs",
  },
  {
    title: "Blog Details",
    linkUrl: "/blog/blog-details",
  },
  {
    title: "Login",
    linkUrl: "/login",
  },
  {
    title: "Register",
    linkUrl: "/register",
  },
];

const NavList = ({ setMobileToggle, mobileToggle }) => {
  return (
    <>
      <ul className={`cs_nav_list ${mobileToggle ? "cs_active" : ""}`}>
        <li className="menu-item-has-children">
          <Link href="/" aria-label="Menu link">
            Home
          </Link>
          <DropDown>
            <ul>
              {homePageMenu?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.linkUrl}
                    onClick={() => setMobileToggle(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </DropDown>
        </li>
        <li>
          <Link href="/features" aria-label="Menu link">
            Features
          </Link>
        </li>
        <li>
          <Link href="/pricing" aria-label="Menu link">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/blog" aria-label="Menu link">
            Blog
          </Link>
        </li>
        <li className="menu-item-has-children">
          <Link href="" aria-label="Menu link">
            Pages
          </Link>
          <DropDown>
            <ul>
              {pagesMenu?.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.linkUrl}
                    onClick={() => setMobileToggle(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </DropDown>
        </li>
        <li>
          <Link href="/contact" aria-label="Menu link">
            Contact
          </Link>
        </li>
      </ul>
      <span
        className={
          mobileToggle ? "cs_menu_toggle cs_toggle_active" : "cs_menu_toggle"
        }
        onClick={() => setMobileToggle(!mobileToggle)}
      >
        <span></span>
      </span>
    </>
  );
};

export default NavList;
