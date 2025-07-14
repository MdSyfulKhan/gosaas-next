import CardStyle4 from "@/app/ui/Card/CardStyle4";
import CtaStyle5 from "@/app/ui/Cta/CtaStyle5";
import FaqStyle4 from "@/app/ui/Faq/FaqStyle4";
import FeaturesStyle3 from "@/app/ui/Features/FeaturesStyle3";
import FeaturesStyle5 from "@/app/ui/Features/FeaturesStyle5";
import FunfactStyle1 from "@/app/ui/Funfact/FunfactStyle1";
import HeroStyle4 from "@/app/ui/Hero/HeroStyle4";
import PricingStyle4 from "@/app/ui/Pricing/PricingStyle4";
import ServiceStyle2 from "@/app/ui/Service/ServiceStyle2";

const heroData = {
  title: "Unlock Insights with Powerful Data Analytics",
  subTitle:
    "Transform raw data into actionable insights effortlessly. Our application helps you make data-driven decisions, visualize trends, and optimize performance with intuitive and powerful analytics tools",
  btnText1: "Sign Up Now",
  btnUrl1: "/register",
  videoBtnText: "View Demo",
  videoSrc: "https://www.youtube.com/embed/U3IfeAqciL0",
  imgUrl: "/img/hero_img_1.jpg",
};

const funfactData = {
  title:
    " Our analytics platform is trusted by over <br /> 15,000 companies worldwide",
  subTitle:
    "Transform raw data into actionable insights effortlessly. Our application helps you make data-driven decisions, visualize trends, and optimize performance with intuitive and powerful analytics tools",
  bgUrl: "/img/counter_bg.svg",
  funfacts: [
    {
      count: "15",
      suffix: "K",
      title: "Active Users",
    },
    {
      count: "100",
      suffix: "%",
      title: "Automation",
    },
    {
      count: "2",
      suffix: "M",
      title: "Downloads",
    },
    {
      count: "15",
      suffix: "K",
      title: "Active Users",
    },
  ],
};

const featuresData = {
  title: "Discover our incredible features",
  subTitle:
    "With our intuitive dashboards and user-friendly interface, you can effortlessly explore <br /> and analyze your data, no matter your level of technical expertise.",
  features: [
    {
      icon: "/img/icons/dashboard.svg",
      title: "Interactive Dashboard",
      subtitle: "Get real-time insights with interactive dashboards.",
      link: "/features",
      animation: "fade-in-left",
    },
    {
      icon: "/img/icons/stats.svg",
      title: "Predictive Analytics",
      subtitle: "Predict trends with advanced machine learning.",
      link: "/features",
      animation: "fade-in-up",
    },
    {
      icon: "/img/icons/magic-wand.svg",
      title: "Collaboration Tools",
      subtitle: "Seamlessly collaborate with team together.",
      link: "/features",
      animation: "fade-in-right",
    },
  ],
};

const cardTwoData = {
  title: "Gain precise insights for your business",
  subTitle:
    "Our fast response system helps you tackle tasks efficiently, enabling you to focus on what truly matters and achieve your goals with ease.",
  imgUrl: "/img/feature_1.jpg",
  badge1: "/img/active-user.png",
  badge2: "/img/advance-search.png",
  features: [
    {
      title: "Real-Time Messaging",
    },
    {
      title: "Quick File Sharing",
    },
    {
      title: "Fast System Integration",
    },
  ],
};

const featureThreeData = {
  title: "Convert your data into meaningful insights",
  subTitle:
    "Gain precise insights for your business with our advanced analytics tools. Make informed decisions based on accurate, real-time data",
  imgUrl: "/img/feature_2.jpg",
  imgUrl2: "/img/Illustration.png",
  badge1: "/img/vector_1.svg",
  features: [
    {
      title: "Actionable Insights",
    },
    {
      title: "Enhanced Decision-Making",
    },
    {
      title: "Improved Efficiency",
    },
  ],
};

const serviceData = {
  title: "Our Analytical Services Offer",
  subTitle:
    "Unlock the full potential of your data with our comprehensive analytics solutions. we <br /> provide the tools you need to make informed decisions & drive business growth.",
  services: [
    {
      title: "Smart Content Generator",
      desc: "Create blog posts, ads, emails, and more with just a few keywords. Let AI turn your ideas into polished, ready-to-use content.",
      icon: "/img/service_1.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "Tone & Style Customization",
      desc: "Match your voice ease — professional, friendly, or witty. Select the tone you want to watch your content adapt accordingly.",
      icon: "/img/service_2.svg",
      iconBg: "cs_accent_color",
    },
    {
      title: "SEO-Optimized Writing",
      desc: "Boost visibility with AI-powered keyword suggestions. Write content that ranks — without needing an SEO expert.",
      icon: "/img/service_3.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "Grammar & Clarity Enhancement",
      desc: "Polish your writing to perfection. Automatically fix grammar, improve readability, and ensure clarity.",
      icon: "/img/service_4.svg",
      iconBg: "cs_accent_color",
    },
    {
      title: "Multi-Language Support",
      desc: "Create content in over 20 languages. Reach global audiences with native-level translation and localization.",
      icon: "/img/service_5.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "Templates for Every Need",
      desc: "Ready-to-use templates for blogs, ads, social posts, and more. Save time with proven content powered by AI.",
      icon: "/img/service_6.svg",
      iconBg: "cs_accent_color",
    },
  ],
  cta: {
    btnText: "Contact For Free Trial",
    btnUrl: "/contact",
    iconText:
      'Our application is trusted by over <span class="cs_purple_color">15K</span> clients worldwide!',
  },
};

const pricingData = {
  title: "Select the plan that best fits <br /> your business needs",
  plans: [
    {
      label: "Free",
      monthly: 0,
      yearly: 0,
      buttonText: "Try It For Free",
      features: [
        { label: "Limited number of data points", available: true },
        { label: "Standard analytics reports", available: true },
        { label: "Basic dashboard", available: true },
        { label: "Email support", available: false },
        { label: "Premium Support", available: false },
      ],
    },
    {
      label: "Standard",
      monthly: 29,
      yearly: 99,
      active: true,
      buttonText: "Purchase Now",
      features: [
        { label: "Increased data point limits", available: true },
        { label: "Advanced analytics", available: true },
        { label: "Customizable dashboards", available: true },
        { label: "API access", available: false },
        { label: "Priority email support", available: false },
      ],
    },
    {
      label: "Enterprise",
      monthly: 229,
      yearly: 729,
      buttonText: "Purchase Now",
      features: [
        { label: "Unlimited data points", available: true },
        { label: "Real-time analytics", available: true },
        { label: "Advanced predictive analytics", available: true },
        { label: "Dedicated account manager", available: false },
        { label: "Phone support", available: false },
      ],
    },
  ],
};

const faqData = {
  title: "Answers to Your Frequently <br /> Asked Questions",
  faqs: [
    {
      question: "What data types does your analytics application support?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Do you offer a free trial of your analytics application?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Do you offer discounts for annual subscriptions?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "What support options are available if I need help?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "What are benefits of using your analytics application?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Is there any future prediction for business?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
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

const DataAnalyticsPage = () => {
  return (
    <>
      <HeroStyle4 data={heroData} />
      <FunfactStyle1 data={funfactData} />
      <FeaturesStyle5 data={featuresData} />
      <div className="cs_height_133 cs_height_lg_80"></div>
      <CardStyle4 data={cardTwoData} varient="cs_heading_color" />
      <FeaturesStyle3
        data={featureThreeData}
        btnText="Get Started Now"
        btnUrl="/register"
      />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <ServiceStyle2 data={serviceData} />
      <div className="cs_height_45"></div>
      <PricingStyle4 data={pricingData} />
      <FaqStyle4 data={faqData} />
      <CtaStyle5 data={ctaData} />
    </>
  );
};

export default DataAnalyticsPage;
