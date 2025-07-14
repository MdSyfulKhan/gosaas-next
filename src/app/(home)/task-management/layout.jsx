import FooterStyle3 from "@/app/ui/Footer/FooterStyle3";
import HeaderStyle3 from "@/app/ui/Header/HeaderStyle3";

const footerData = {
  logo: "/img/logo-2.svg",
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
    <div className="cs_task_management">
      <HeaderStyle3 logo="/img/logo-2.svg" logoUrl="/" />
      {children}
      <FooterStyle3 data={footerData} styleVarient="cs_type_1" />
    </div>
  );
};

export default Layout;
