import CtaStyle2 from "@/app/ui/Cta/CtaStyle2";
import CtaStyle6 from "@/app/ui/Cta/CtaStyle6";
import FaqStyle2 from "@/app/ui/Faq/FaqStyle2";
import FeaturesStyle2 from "@/app/ui/Features/FeaturesStyle2";
import FunfactStyle2 from "@/app/ui/Funfact/FunfactStyle2";
import HeroStyle5 from "@/app/ui/Hero/HeroStyle5";
import InterfaceStyle1 from "@/app/ui/Interface/InterfaceStyle1";
import PricingStyle5 from "@/app/ui/Pricing/PricingStyle5";
import ServiceStyle1 from "@/app/ui/Service/ServiceStyle1";
import TestimonialStyle1 from "@/app/ui/Testimonial/TestimonialStyle1";
import WhyChooseStyle1 from "@/app/ui/WhyChoose/WhyChooseStyle1";

const heroData = {
  mintTitle: "GoSaaS v3.5 Now Available!",
  title: "Launch Your First App with a Stunning Online Experience.",
  subTitle:
    "The ultimate app with cutting-edge features, best performance, intuitive design. Download now and elevate your experience!",
  imgUrl: "/img/hero_img_5.png",
  appStore: {
    title: "App Store",
    subTitle: "Download on the",
    icon: "/img/icons/apple-icon-dark.svg",
    url: "#",
  },
  playStore: {
    title: "Google Play",
    subTitle: "GET IT ON",
    icon: "/img/icons/playstore.svg",
    url: "#",
  },
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
  ],
};

const serviceData = {
  title: "Powerful Core Features",
  subTitle:
    "Designed to provide an effortless user experience with advanced technology, ensuring<br/> seamless performance, enhanced security, and intuitive navigation.",
  services: [
    {
      title: "Lightning-Fast Performance",
      desc: "Create blog posts, ads, emails, and more with just a few keywords. Let AI turn your ideas into polished, ready-to-use content.",
      icon: "/img/service_1.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "AI-Powered Assistance",
      desc: "Match your voice ease — professional, friendly, or witty. Select the tone you want to watch your content adapt accordingly.",
      icon: "/img/service_2.svg",
      iconBg: "cs_accent_color",
    },
    {
      title: "Multi-Platform Support",
      desc: "Boost visibility with AI-powered keyword suggestions. Write content that ranks — without needing an SEO expert.",
      icon: "/img/service_3.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "Offline Mode",
      desc: "Polish your writing to perfection. Automatically fix grammar, improve readability, and ensure clarity.",
      icon: "/img/service_4.svg",
      iconBg: "cs_accent_color",
    },
    {
      title: "Enhanced Security",
      desc: "Create content in over 20 languages. Reach global audiences with native-level translation and localization.",
      icon: "/img/service_5.svg",
      iconBg: "cs_purple_color",
    },
    {
      title: "Customization Options",
      desc: "Ready-to-use templates for blogs, ads, social posts, and more. Save time with proven content powered by AI.",
      icon: "/img/service_6.svg",
      iconBg: "cs_accent_color",
    },
  ],
};

const featureTwoData = {
  title: "Built for the Maximum Productivity",
  imgUrl: "/img/feature_9.png",
  features: [
    {
      icon: "/img/icons/magnet-user.svg",
      title: "Smart Task Management",
      desc: "Effortlessly organize, plan, and track your tasks with intuitive tools, ensuring better productivity and time management.",
    },
    {
      icon: "/img/icons/rocket-lunch.svg",
      title: "Real-Time Collaboration",
      desc: "Seamlessly work with your team, share updates instantly, and stay connected for efficient project coordination and communication.",
    },
    {
      icon: "/img/icons/journey.svg",
      title: "Instant Notifications",
      desc: "Receive real-time alerts for important updates, messages, and reminders to stay informed and never miss a task.",
    },
  ],
};

const whyChooseData = {
  mintTitle: "IT’S AWESOME",
  title: "Why Creators Choose <br/> Our AI Writing <br/> Assistant",
  imgUrl: "/img/feature_5.png",
  services: [
    {
      title: "User-Friendly Interface",
      desc: "Clean, intuitive, and designed for focus — so you can write without distractions and combine powerful technology with user-first design.",
      icon: "/img/feature_13.svg",
    },
    {
      title: "Advanced AI Technology",
      desc: "Built on cutting-edge language models that understand your intent and deliver human-like content.",
      icon: "/img/feature_14.svg",
    },
    {
      title: "Templates for Every Use Case",
      desc: "From blog posts to product descriptions, access ready-made templates for all your writing needs.",
      icon: "/img/feature_15.svg",
    },
  ],
};

const interfaceData = {
  title: "Simple & Beautiful Interface",
  subTitle:
    "Clean and elegant interface with sApp that combines simplicity with beauty, <br /> ensuring a smooth and enjoyable user journey.",
  interfaceImages: [
    { imgUrl: "/img/interface-1.jpg" },
    { imgUrl: "/img/interface-2.jpg" },
    { imgUrl: "/img/interface-3.jpg" },
    { imgUrl: "/img/interface-4.jpg" },
    { imgUrl: "/img/interface-1.jpg" },
    { imgUrl: "/img/interface-2.jpg" },
  ],
};

const ctaOneData = {
  title: "Early Download",
  subTitle:
    "Download now to explore cutting-edge features, seamless performance, and an intuitive experience, redefining the next generation of mobile apps.",
  imgUrl: "/img/cta-img-1.png",
  quoteImg: "/img/quote.png",
  appStore: {
    title: "App Store",
    subTitle: "Download on the",
    icon: "/img/icons/apple-icon-dark.svg",
    url: "#",
  },
  playStore: {
    title: "Google Play",
    subTitle: "GET IT ON",
    icon: "/img/icons/playstore.svg",
    url: "#",
  },
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
  title: "Got Questions? We’ve <br/> Got Answers!",
  subTitle:
    "Get answers to frequently asked questions about our app, covering features, security, pricing, availability, and more to ensure a smooth and informed user experience.",
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
  title: "Stay Updated with the Latest  Features & Offers",
  btnText: "Sign Up Free",
  bgImg: "/img/counter_bg.svg",
  items: [{ title: "No credit card needed" }, { title: "Free 14-day trial" }],
};

const AppLandingPage = () => {
  return (
    <>
      <HeroStyle5 data={heroData} />
      <FunfactStyle2 data={funfactData} />
      <ServiceStyle1 data={serviceData} />
      <FeaturesStyle2 data={featureTwoData} />
      <WhyChooseStyle1 data={whyChooseData} />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <InterfaceStyle1 data={interfaceData} />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <CtaStyle6 data={ctaOneData} />
      <TestimonialStyle1 data={testimonialData} />
      <PricingStyle5
        data={pricingData}
        styleVarient="cs_gray_bg_7"
        switchBtn={false}
      />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <FaqStyle2 data={faqData} />
      <CtaStyle2 data={ctaTwoData} />
    </>
  );
};

export default AppLandingPage;
