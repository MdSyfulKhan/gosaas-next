import BrandStyle1 from "@/app/ui/Brand/BrandStyle1";
import CtaStyle1 from "@/app/ui/Cta/CtaStyle1";
import CtaStyle2 from "@/app/ui/Cta/CtaStyle2";
import FaqStyle1 from "@/app/ui/Faq/FaqStyle1";
import FeaturesStyle1 from "@/app/ui/Features/FeaturesStyle1";
import FeaturesStyle2 from "@/app/ui/Features/FeaturesStyle2";
import FeaturesStyle3 from "@/app/ui/Features/FeaturesStyle3";
import HeroStyle1 from "@/app/ui/Hero/HeroStyle1";
import PricingStyle1 from "@/app/ui/Pricing/PricingStyle1";
import TestimonialStyle1 from "@/app/ui/Testimonial/TestimonialStyle1";

const heroData = {
  title: "Elevate Ur Customer Relationships with Our ",
  subTitle:
    "Enhance your customer interactions and streamline your sales processes with our powerful and intuitive CRM solution.",
  imgUrl: "/img/hero_img_4.jpg",
  btnText1: "Get Started Free",
  btnUrl1: "/register",
  videoBtnText: "Get a Demo",
  videoSrc: "https://www.youtube.com/embed/U3IfeAqciL0",
};

const featureOneData = {
  title: " Core Features of Our <br /> CRM Application",
  subTitle:
    "Discover the essential tools and functionalities designed to optimize your customer management, improve sales efficiency, and enhance overall business performance.",
  features: [
    {
      title: "Contact Management",
      description:
        "Store and organize customer <br /> information in a centralized, easily <br /> accessible database.",
      icon: "/img/icons/browser.svg",
      icon_bg: "cs_accent_bg",
    },
    {
      title: "Sales Track Management",
      description:
        "Track and manage sales leads <br /> from initial contact to deal <br /> closure.",
      icon: "/img/icons/stats.svg",
      icon_bg: "cs_bg_1",
    },
    {
      title: "Reporting and Analytics",
      description:
        "Generate detailed reports and <br /> insights into sales, customer <br /> behavior, and business health.",
      icon: "/img/icons/point-of-sale-bill.svg",
      icon_bg: "cs_bg_2",
    },
    {
      title: "Contact Management",
      description:
        "Store and organize customer <br /> information in a centralized, easily <br /> accessible database.",
      icon: "/img/icons/browser.svg",
      icon_bg: "cs_accent_bg",
    },
  ],
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

const featureTwoData = {
  title: "Upgrade Your Business with Our CRM Solution",
  imgUrl: "/img/feature_9.png",
  features: [
    {
      icon: "/img/icons/magnet-user.svg",
      title: "High-Quality Leads",
      desc: "Discover how to use AI-powered marketing tools to attract and convert more leads without multiplying your marketing spend.",
    },
    {
      icon: "/img/icons/rocket-lunch.svg",
      title: "Accelerate Sales",
      desc: "Start closing more deals faster and streamlining your sales process with HubSpot’s AI-powered deal management tools.",
    },
    {
      icon: "/img/icons/journey.svg",
      title: "Create Customer Journey",
      desc: "Fuel the entire customer journey with content across formats and channels with all-in-one, AI-powered content marketing software.",
    },
  ],
};

const ctaOneData = {
  title:
    "Boost Sales. Build Lasting Relationships.<br/>Achieve Faster Growth Today!",
  btnText: "Get Started Now!",
};

const featureThreeData = {
  title: "Automate tasks to increase efficiency and reduce manual effort",
  subTitle:
    "Gain precise insights for your business with our advanced analytics tools. Make informed decisions based on accurate, real-time data",
  imgUrl: "/img/feature_8.jpg",
  imgUrl2: "/img/Illustration.png",
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

const testimonialData = {
  title: "Customer Reviews and <br/> Success Stories",
  subTitle: "",
  testimonial: [
    {
      avaterImgUrl: "/img/avatar-1.jpg",
      avaterName: "Sara Thomas",
      avaterDesignation: "Project Manager",
      desc: " Gosaas has completely transformed how we manage projects at our company. The intuitive interface makes it easy for everyone to get on board, and the powerful features like subtasks and dependencies.",
      ratting: 3.5,
    },
    {
      avaterImgUrl: "/img/avatar-2.jpg",
      avaterName: "Wizard Bona",
      avaterDesignation: "Creative Director",
      desc: "Managing a creative team comes with its own set of challenges,  but Gosaas has made it so much easier. The customizable views allow us to organize tasks in a way that makes sense for our projects",
      ratting: 5,
    },
    {
      avaterImgUrl: "/img/avatar-3.jpg",
      avaterName: "Jhon Kubera",
      avaterDesignation: "Marketing Specialist",
      desc: "As a marketing specialist, staying organized and on top of deadlines is crucial. Gosaas has been a lifesaver. The platform is incredibly user-friendly, and I love how I can customize task lists to fit my workflow.",
      ratting: "5",
    },
    {
      avaterImgUrl: "/img/avatar-1.jpg",
      avaterName: "Sara Thomas",
      avaterDesignation: "Project Manager",
      desc: " Gosaas has completely transformed how we manage projects at our company. The intuitive interface makes it easy for everyone to get on board, and the powerful features like subtasks and dependencies.",
      ratting: "4.5",
    },
    {
      avaterImgUrl: "/img/avatar-2.jpg",
      avaterName: "Wizard Bona",
      avaterDesignation: "Creative Director",
      desc: "Managing a creative team comes with its own set of challenges,  but Gosaas has made it so much easier. The customizable views allow us to organize tasks in a way that makes sense for our projects",
      ratting: "4.5",
    },
    {
      avaterImgUrl: "/img/avatar-3.jpg",
      avaterName: "Jhon Kubera",
      avaterDesignation: "Marketing Specialist",
      desc: "As a marketing specialist, staying organized and on top of deadlines is crucial. Gosaas has been a lifesaver. The platform is incredibly user-friendly, and I love how I can customize task lists to fit my workflow.",
      ratting: "4",
    },
  ],
};

const pricingData = {
  title: "Transparent pricing plans, find the <br/> perfect fit for your needs",
  subTitle: "",
  icon: "",
  plan: [
    {
      title: "Free",
      subtitle: "Free for small team",
      monthly: 0,
      features: [true, true, true, false, false, false, false],
    },
    {
      title: "Standard",
      subtitle: "Most popular deal",
      monthly: 10,
      features: [true, true, true, true, true, false, false],
      badge: "Most Popular",
    },
    {
      title: "Premium",
      subtitle: "For your large team",
      monthly: 20,
      features: [true, true, true, true, true, true, true],
    },
  ],
};

const faqData = {
  title: "Answers to Your Frequently <br /> Asked Questions",
  subTitle: "",
  faqs: [
    {
      question: "What data types does your analytics application support?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Do you offer a free trial of your analytics application?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features before purchasing.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer:
        "Absolutely! You can change your plan at any time directly from your dashboard.",
    },
    {
      question: "Do you offer discounts for annual subscriptions?",
      answer:
        "Yes! We offer up to 20% discounts on yearly plans compared to monthly subscriptions.",
    },
    {
      question: "What support options are available if I need help?",
      answer:
        "We provide 24/7 chat support, a help center, and personal onboarding for enterprise plans.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have both iOS and Android apps available for download on their respective stores.",
    },
    {
      question: "What are benefits of using your analytics application?",
      answer:
        "Real-time data tracking, AI-driven insights, custom reports, and integration with over 100 tools.",
    },
    {
      question: "Is there any future prediction for business?",
      answer:
        "Yes, our platform uses machine learning to offer predictive analytics tailored to your data.",
    },
  ],
};

const ctaTwoData = {
  title: "Ready to enhance your sales & <br/> customer satisfaction?",
  btnText: "Sign Up Free",
  bgImg: "/img/counter_bg.svg",
  items: [{ title: "No credit card needed" }, { title: "Free 14-day trial" }],
};

const page = () => {
  return (
    <>
      <HeroStyle1 data={heroData} />
      <FeaturesStyle1 data={featureOneData} />
      <div className="cs_height_132 cs_height_lg_72" />
      <BrandStyle1 data={brandData} />
      <FeaturesStyle2 data={featureTwoData} />
      <CtaStyle1 data={ctaOneData} />
      <FeaturesStyle3
        data={featureThreeData}
        btnText="Learn More"
        btnUrl="/contact"
      />
      <TestimonialStyle1 data={testimonialData} />
      <PricingStyle1 data={pricingData} />
      <FaqStyle1 data={faqData} />
      <CtaStyle2 data={ctaTwoData} />
    </>
  );
};

export default page;
