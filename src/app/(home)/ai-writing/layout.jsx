import Footer from "@/app/ui/Footer/Footer";
import HeaderStyle2 from "@/app/ui/Header/HeaderStyle2";

const footerData = {
  logo: "/img/logo.svg",
  description:
    "Our analytics application turns raw data into actionable insights, empowering businesses to make data-driven decisions and enhance performance.",
  quickLinks: {
    title: "Quick Links",
    links: [
      { title: "home", url: "/" },
      { title: "features", url: "/features" },
      { title: "pricing", url: "/pricing" },
      { title: "blog", url: "/blog" },
      { title: "contact", url: "/contact" },
    ],
  },
  supportLinks: {
    title: "Help Center",
    links: [
      { title: "contact", url: "/contact" },
      { title: "help", url: "/contact" },
      { title: "resources", url: "#" },
      { title: "terms&Condition", url: "/term-condition" },
    ],
  },
  contactInfo: {
    title: "Contact Info",
    links: [
      { title: "24/7 Support Center", url: "" },
      { title: "contact@gosaas.com", url: "mailto:contact@gosaas.com" },
      { title: "(55) 1234-56789", url: "tel:(55) 1234-56789" },
      { title: "10 am - 12 pm, Everyday", url: "" },
    ],
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <HeaderStyle2 logo="/img/logo.svg" logoUrl="/" />
      {children}
      <Footer data={footerData} styleVarient="cs_type_1" />
    </>
  );
};

export default Layout;
