import CardStyle1 from "@/app/ui/Card/CardStyle1";
import CardStyle2 from "@/app/ui/Card/CardStyle2";
import CtaStyle4 from "@/app/ui/Cta/CtaStyle4";
import FaqStyle2 from "@/app/ui/Faq/FaqStyle2";
import HeroStyle2 from "@/app/ui/Hero/HeroStyle2";
import PricingStyle1 from "@/app/ui/Pricing/PricingStyle1";
import ServiceStyle1 from "@/app/ui/Service/ServiceStyle1";
import TestimonialStyle1 from "@/app/ui/Testimonial/TestimonialStyle1";
import WhyChooseStyle1 from "@/app/ui/WhyChoose/WhyChooseStyle1";

const heroData = {
  title: "The most capable generative <br/> AI–powered assistant",
  subTitle:
    "Our chat application is trusted by over <span className='cs_purple_color'>15K</span> companies!",
  iconUrl: "/img/cup.png",
  imgUrl: "/img/hero_img_7.jpg",
  btnText: "Sign Up Free",
  features: [
    { title: "No credit card needed" },
    { title: "Free 14-day trial" },
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

const serviceData = {
  title: "Write Smarter, Create Faster",
  subTitle:
    "Experience a powerful AI assistant that helps you generate high-quality content in <br/> seconds — whether you’re blogging, emailing, or selling.",
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

const ctaData = {
  title: "Unlock Limitless Content <br/> Creation with AI",
  subTitle:
    "Join thousands of creators using our AI Writing Assistant to write faster,smarter, and better — no experience needed.",
  btnText: "Start Free Trial",
  btnUrl: "/about-us",
  shape1: "",
  shape2: "/img/vector_3.svg",
};

const AIWritingAssistantPage = () => {
  return (
    <>
      <HeroStyle2 data={heroData} />
      <CardStyle1 data={cardDataOne} />
      <CardStyle2 data={cardDataTwo} />
      <ServiceStyle1 data={serviceData} />
      <PricingStyle1 data={pricingData} />
      <WhyChooseStyle1 data={whyChooseData} />
      <TestimonialStyle1 data={testimonialData} />
      <FaqStyle2 data={faqData} />
      <CtaStyle4 data={ctaData} />
    </>
  );
};

export default AIWritingAssistantPage;
