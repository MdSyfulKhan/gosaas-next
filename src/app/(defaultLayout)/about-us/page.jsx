import BrandStyle1 from "@/app/ui/Brand/BrandStyle1";
import CtaStyle5 from "@/app/ui/Cta/CtaStyle5";
import FunfactStyle2 from "@/app/ui/Funfact/FunfactStyle2";
import PageHeadingStyle1 from "@/app/ui/PageHeading/PageHeadingStyle1";
import ServiceStyle3 from "@/app/ui/Service/ServiceStyle3";
import TeamStyle1 from "@/app/ui/Team/TeamStyle1";
import VideoBlockStyle1 from "@/app/ui/VideoBlock/VideoBlockStyle1";
import WhyChooseStyle1 from "@/app/ui/WhyChoose/WhyChooseStyle1";

const videoBlockData = {
  videoUrl: "https://www.youtube.com/embed/U3IfeAqciL0",
  imgUrl: "/img/video-bg-1.jpg",
};

const brandData = {
  title: "Already Join 15K + Business Using GoSass",
  brands: [
    { imgUrl: "/img/brand-1.svg" },
    { imgUrl: "/img/brand-2.svg" },
    { imgUrl: "/img/brand-3.svg" },
    { imgUrl: "/img/brand-4.svg" },
    { imgUrl: "/img/brand-5.svg" },
    { imgUrl: "/img/brand-6.svg" },
  ],
};

const funfactData = {
  title: "Our Outstanding Success Story Told <br/> Through Key Numbers",
  funfacts: [
    {
      count: 50,
      suffix: "K",
      label: "Active User",
    },
    {
      count: 80,
      suffix: "K",
      label: "Download",
    },
    {
      count: 15,
      suffix: "K",
      label: "Reviews",
    },
    {
      suffix: "K",
      count: 4,
      label: "Got awards",
    },
    // { // Prefix if needed.
    //   prefix: "0",
    //   count: 4,
    //   label: "Got awards",
    // },
  ],
};

const serviceData = {
  title: "Supporting your growth at every step",
  subTitle:
    "Gain precise insights for your business with our advanced analytics tools. Make informed decisions based on accurate, real-time data.",
  imgUrl: "/img/feature_10.jpg",
  services: [
    {
      title: "Predictive Analytics",
      desc: "Utilize advanced machine learning algorithms to forecast future outcomes.",
      icon: "/img/service_2.svg",
      iconBg: "cs_accent_color",
    },
    {
      title: "Real-time Analytics",
      desc: "Transform complex data sets into clear and compelling visual representations.",
      icon: "/img/service_1.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "SEO-Optimized Writing",
      desc: "Analyze data in real-time to monitor key metrics & respond promptly to changes.",
      icon: "/img/service_3.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "Data Integration",
      desc: "Seamlessly combine data from multiple sources into a unified view.",
      icon: "/img/service_4.svg",
      iconBg: "cs_accent_color",
    },
  ],
};

const whyChooseData = {
  mintTitle: "WHY CHOOSE",
  title: "Why should you<br/>choose our GoSaas?",
  imgUrl: "/img/feature_5.png",
  services: [
    {
      title: "Enhanced Collaboration",
      desc: "GoSaaS Chat enables efficient team communication with real-time messaging, group chats, and multimedia sharing from anywhere.",
      icon: "/img/feature_13.svg",
    },
    {
      title: "Robust Security",
      desc: "With end-to-end encryption and secure storage, GoSaaS Chat ensures your privacy and data protection.",
      icon: "/img/feature_14.svg",
    },
    {
      title: "Enhanced Collaboration",
      desc: "GoSaaS Chat enables efficient team communication with real-time messaging, group chats, and multimedia sharing from anywhere.",
      icon: "/img/feature_15.svg",
    },
  ],
};

const teamData = {
  title: "We're a team focused on <br> delivering results",
  members: [
    {
      name: "John Williams",
      position: "Front Office Manager",
      imgUrl: "/img/team-1.jpg",
      socials: [
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "#" },
        { platform: "Twitter", icon: "fa-brands fa-x-twitter", url: "#" },
        { platform: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
        { platform: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
      ],
    },
    {
      name: "Sarah Smith",
      position: "General Manager",
      imgUrl: "/img/team-2.jpg",
      socials: [
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "#" },
        { platform: "Twitter", icon: "fa-brands fa-x-twitter", url: "#" },
        { platform: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
        { platform: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
      ],
    },
    {
      name: "Michael Anderson",
      position: "Software Developer",
      imgUrl: "/img/team-3.jpg",
      socials: [
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "#" },
        { platform: "Twitter", icon: "fa-brands fa-x-twitter", url: "#" },
        { platform: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
        { platform: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
      ],
    },
    {
      name: "Jessica Tylore",
      position: "Marketing Officer",
      imgUrl: "/img/team-4.jpg",
      socials: [
        { platform: "LinkedIn", icon: "fa-brands fa-linkedin-in", url: "#" },
        { platform: "Twitter", icon: "fa-brands fa-x-twitter", url: "#" },
        { platform: "YouTube", icon: "fa-brands fa-youtube", url: "#" },
        { platform: "Instagram", icon: "fa-brands fa-instagram", url: "#" },
      ],
    },
  ],
};

const ctaData = {
  image: "/img/cta-img-1.png",
  quoteImage: "/img/quote.png",
  title: "Stay Connected!",
  description:
    "Subscribe to our newsletter for the latest insights, updates,<br />and exclusive offers and exclusive tips. Stay informed and <br />never miss an update.",
  btnText: "Subscribe Now",
  formAction: "#",
};

const AboutUsPage = () => {
  return (
    <>
      <PageHeadingStyle1
        title="Big Results for Small Businesses"
        subTitle="Driven by technology and a dedication to excellence, we help businesses <br/> succeed in the ever-evolving digital world."
      />
      <VideoBlockStyle1 data={videoBlockData} />
      <div className="cs_height_60 cs_height_lg_60"></div>
      <BrandStyle1 data={brandData} />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <FunfactStyle2
        data={funfactData}
        styleVarient="cs_gray_bg_6"
        shapeIcon={true}
      />
      <div className="cs_height_140 cs_height_lg_80" />
      <ServiceStyle3 data={serviceData} />
      <div className="cs_height_140 cs_height_lg_80" />
      <WhyChooseStyle1 data={whyChooseData} />
      <TeamStyle1 data={teamData} />
      <CtaStyle5 data={ctaData} />
    </>
  );
};

export default AboutUsPage;
