import BrandStyle1 from "@/app/ui/Brand/BrandStyle1";
import CardStyle1 from "@/app/ui/Card/CardStyle1";
import CardStyle2 from "@/app/ui/Card/CardStyle2";
import CtaStyle8 from "@/app/ui/Cta/CtaStyle8";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";
import FeaturesStyle6 from "@/app/ui/Features/FeaturesStyle6";
import HeroStyle7 from "@/app/ui/Hero/HeroStyle7";
import IntegrationStyle1 from "@/app/ui/Integration/IntegrationStyle1";
import PricingStyle2 from "@/app/ui/Pricing/PricingStyle2";
import TestimonialStyle1 from "@/app/ui/Testimonial/TestimonialStyle1";
import WhyChooseStyle1 from "@/app/ui/WhyChoose/WhyChooseStyle1";

const heroData = {
  title: "Boost Customer Satisfaction <br/> with Live Chat",
  subTitle:
    "Our chat application is trusted by over <span className='cs_purple_color'>15K</span> companies!",
  iconUrl: "/img/cup.png",
  imgUrl: "/img/hero_img_2.jpg",
  btnText: "Sign Up Free",
  features: [
    { title: "No credit card needed" },
    { title: "Free 14-day trial" },
  ],
  animText1: "AI Assistant",
  animText2: "Grammar Checker",
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

const cardDataOne = {
  mintTitle: "AI ASSISTANT",
  title: "Resolve up to 70% of cases with AI",
  subTitle:
    "Our AI assistant in a live chat application provides instant answers to common questions, delivers personalized responses by analyzing user data, enhancing efficiency & user satisfaction.",
  btnText: "Learn More",
  btnUrl: "/about-us",
  imgUrl: "/img/feature_3.jpg",
  imgUrl2: "/img/chat.png",
};

const cardDataTwo = {
  mintTitle: "AUTO SPELLING CHECKER",
  title: "Enhance Your Writing with AI-Powered Auto Spelling Checker",
  subTitle:
    "Our AI-powered auto spelling checker instantly detects and corrects spelling errors as you type. It ensures your writing is accurate and polished across all platforms.",
  btnText: "Learn More",
  btnUrl: "/about-us",
  imgUrl: "/img/feature_4.jpg",
};

const featuresData = {
  title: "Discover our incredible features",
  subTitle:
    "With our intuitive dashboards and user-friendly interface, you can effortlessly explore and <br/> analyze your data, no matter your level of technical expertise.",
  features: [
    {
      icon: "/img/icons/messages.svg",
      title: "Real‑Time Messaging",
      desc: "Instant communication with no noticeable delay, ensuring smooth conversations.",
      url: "/features",
    },
    {
      icon: "/img/icons/users-alt.svg",
      title: "Group Chats",
      desc: "Create and participate in group conversations for team collaboration or social interactions.",
      url: "/features",
    },
    {
      icon: "/img/icons/graphic-style.svg",
      title: "Multimedia Sharing",
      desc: "Send and receive images, videos, audio files, and documents within the chat.",
      url: "/features",
    },
    {
      icon: "/img/icons/text.svg",
      title: "Typing Indicators",
      desc: "See when the other person is typing, making the conversation feel more interactive.",
      url: "/features",
    },
    {
      icon: "/img/icons/discover.svg",
      title: "Search Functionality",
      desc: "Easily find specific messages or conversations using keywords or filters.",
      url: "/features",
    },
    {
      icon: "/img/icons/user-headset.svg",
      title: "Voice and Video Calls",
      desc: "Make voice and video calls directly from the chat application, facilitating face‑to‑face.",
      url: "/features",
    },
  ],
};

const integrationData = {
  title: "Seamlessly integrating with your preferred tools",
  subtitle:
    "Seamlessly integrating with your preferred tools, our chat application connects with various apps and services.",
  tools: [
    { name: "Discord", icon: "/img/icons/discord.svg" },
    { name: "Slack", icon: "/img/icons/slack.svg" },
    { name: "Microsoft", icon: "/img/icons/microsoft.svg" },
    { name: "Spotify", icon: "/img/icons/spotify.svg" },
    { name: "Google", icon: "/img/icons/google.svg" },
    { name: "Facebook", icon: "/img/icons/fscebook.svg" },
  ],
};

const pricingData = {
  title: "Select the plan that best fits <br/> your business needs",
  plans: [
    {
      name: "Starter",
      monthlyPrice: 10,
      features: [
        "Upto 5000 words/month",
        "Access basic writing tools",
        "10+ writing templates",
        "Grammar checker",
        "Light mode theme only",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Team",
      monthlyPrice: 20,
      features: [
        "Upto 5000 words/month",
        "30+ writing templates",
        "Tone and customization",
        "SEO keyword suggestion",
        "Multi-language output",
        "Priority email support",
      ],
      popular: false,
    },
    {
      name: "Business",
      monthlyPrice: 49,
      features: [
        "Limitless word generation",
        "Access to all AI tools",
        "Collaboration (up to 5)",
        "AI-powered rewriting",
        "Content history",
        "Chat & email support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      monthlyPrice: 79,
      features: [
        "Unlimited usage & users",
        "Custom AI model",
        "Dedicated manager",
        "API access & integrations",
        "Security controls",
        "24/7 priority support",
      ],
      popular: false,
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

const testimonialData = {
  title: "Customer Reviews and <br/> Success Stories",
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

const ctaData = {
  title: "Ready to enhance your sales & customer satisfaction?",
  features: [
    { title: "No credit card needed" },
    { title: "Free 14-day trial" },
  ],
  btnText: "Sign Up Free",
};

const ctaTwoData = {
  imgUrl: "/img/support-img-group.png",
  title: "Any Questions? Our support team is available 24/7",
  btnText: "Live Chat Now",
};

const LiveChatPage = () => {
  return (
    <>
      <HeroStyle7 data={heroData} />
      <div className="cs_height_124 cs_height_lg_80" />
      <BrandStyle1 data={brandData} />
      <div className="cs_height_140 cs_height_lg_80" />
      <CardStyle1 data={cardDataOne} />
      <CardStyle2 data={cardDataTwo} />
      <FeaturesStyle6 data={featuresData} />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <IntegrationStyle1 data={integrationData} />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <PricingStyle2 data={pricingData} styleVarient="cs_gray_bg_4" />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <WhyChooseStyle1 data={whyChooseData} />
      <TestimonialStyle1 data={testimonialData} />
      <CtaStyle8 data={ctaData} />
      <div className="cs_height_135 cs_height_lg_80"></div>
      <CtaStyle9 data={ctaTwoData} />
    </>
  );
};

export default LiveChatPage;
