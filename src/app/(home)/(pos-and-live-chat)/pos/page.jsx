import BlogStyle1 from "@/app/ui/Blog/BlogStyle1";
import CardStyle4 from "@/app/ui/Card/CardStyle4";
import ContactStyle1 from "@/app/ui/Contact/ContactStyle1";
import CtaStyle6 from "@/app/ui/Cta/CtaStyle6";
import CtaStyle7 from "@/app/ui/Cta/CtaStyle7";
import FaqStyle1 from "@/app/ui/Faq/FaqStyle1";
import FeaturesStyle3 from "@/app/ui/Features/FeaturesStyle3";
import HeroStyle6 from "@/app/ui/Hero/HeroStyle6";
import PricingStyle5 from "@/app/ui/Pricing/PricingStyle5";
import ServiceStyle1 from "@/app/ui/Service/ServiceStyle1";
import TestimonialStyle2 from "@/app/ui/Testimonial/TestimonialStyle2";

const heroData = {
  titleStart: "The Ultimate",
  highlightedText: "POS",
  titleEnd: "Solution for Seamless Transactions",
  subTitle:
    "GoSaaS comes with powerful features and user-friendly interface, enhance customer experiences, and boost your overall efficiency.",
  videoUrl: "https://www.youtube.com/embed/U3IfeAqciL0",
  btnText1: "Get a Demo",
  btnText2: "Get Started Free",
  btnUrl2: "/register",
  imgUrl: "/img/hero_img_6.png",
  brands: [
    "/img/brand-1.svg",
    "/img/brand-2.svg",
    "/img/brand-3.svg",
    "/img/brand-4.svg",
    "/img/brand-5.svg",
    "/img/brand-6.svg",
  ],
};

const serviceData = {
  title: "Grow Your Business With GoSaaS",
  subTitle:
    "Designed to provide an effortless user experience with advanced technology, ensuring <br/>seamless performance, enhanced security, and intuitive navigation.",
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

const cardData = {
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

const featureData = {
  title: "Convert your data into meaningful insights",
  subTitle:
    "Gain precise insights for your business with our advanced analytics tools. Make informed decisions based on accurate, real-time data",
  imgUrl: "/img/feature_2.jpg",
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

const testimonialData = {
  title: "Customer Reviews and <br/> Success Stories",
  subTitle: "",
  testimonials: [
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

const faqData = {
  title: "Answers to Your Frequently <br /> Asked Questions",
  subTitle: "",
  faqs: [
    {
      question: "Is there a free trial available?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus quos vitae, consectetur eos, aut porro repellat quas eum reprehenderit magnam natus, voluptatem tempore numquam. Similique, dicta porro.",
    },
    {
      question: "Can I use the app offline?",
      answer:
        "Yes, we offer a 14-day free trial so you can explore all features before purchasing.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely! You can change your plan at any time directly from your dashboard.",
    },
    {
      question: "How can I contact support?",
      answer:
        "Yes! We offer up to 20% discounts on yearly plans compared to monthly subscriptions.",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "We provide 24/7 chat support, a help center, and personal onboarding for enterprise plans.",
    },
    {
      question: "Is there a mobile app available?",
      answer:
        "Yes, we have both iOS and Android apps available for download on their respective stores.",
    },
    {
      question: "Are there any hidden fees?",
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

const blogData = {
  title: "Insights hub: Navigating the world <br/> business of Knowledge",
  blogs: [
    {
      title: "Strategies for your Post-Pandemic Workplace",
      imgUrl: "/img/post-5.jpg",
      desc: "Discover key strategies to adapt your workplace after the pandemic, from flexible policies and hybrid models to employee well-being, technology integration, and maintaining strong team collaboration post-crisis.",
      date: "Jun 25, 2025",
      author: "Emma Carter",
      blogSlug: "strategies-for-your-post-pandemic-workplace",
    },
    {
      title: "Navigating the Complex Path to Corporate Growth",
      imgUrl: "/img/post-8.jpg",
      desc: "Understand how to grow your business strategically by leveraging innovation, market expansion, smart investments, performance tracking, and leadership development while managing risks and aligning with long-term vision.",
      date: "Jun 25, 2025",
      author: "Noah Mitchell",
      blogSlug: "navigating-the-complex-path-to-corporate-growth",
    },
    {
      title: "Making a Positive Impact Beyond your Profits",
      imgUrl: "/img/post-6.jpg",
      desc: "Explore how businesses can make a meaningful difference beyond financial success by focusing on sustainability, social responsibility, ethical practices, and creating value for communities and future generations.",
      date: "Aug 01, 2025",
      author: "Liam Bennett",
      blogSlug: "making-a-positive-impact-beyond-your-profits",
    },
    {
      title: "Protecting Your Business from Data Breaches",
      imgUrl: "/img/post-7.jpg",
      desc: "Learn how to shield your company from data breaches with strong cybersecurity practices, employee training, threat detection, backup strategies, secure systems, and a clear incident response plan.",
      date: "Sep 14, 2025",
      author: "Sophia Reynolds",
      blogSlug: "protecting-your-business-from-data-breaches",
    },
    {
      title: "Navigating the Complex Path to Corporate Growth",
      imgUrl: "/img/post-8.jpg",
      desc: "Understand how to grow your business strategically by leveraging innovation, market expansion, smart investments, performance tracking, and leadership development while managing risks and aligning with long-term vision.",
      date: "Jun 25, 2025",
      author: "Noah Mitchell",
      blogSlug: "navigating-the-complex-path-to-corporate-growth",
    },
    {
      title: "Enhancing User Experience with Custom Web Designs",
      imgUrl: "/img/post-1.jpg",
      desc: "Discover how custom web design can set your brand apart and create a more engaging user experience. This blog covers the benefits of personalized designs, from improving navigation to reinforcing brand identity.",
      date: "Jun 25, 2025",
      author: "Syful Khan",
      blogSlug: "enhancing-user-experience-with-custom-web-designs",
    },
    {
      title: "The Importance of SEO in Growing Your Online Store",
      imgUrl: "/img/post-2.jpg",
      desc: "Learn why SEO is essential for any online business and how it can help drive organic traffic to your store. This blog provides tips on optimizing product listings, keywords, and content to rank higher in search results.",
      date: "Aug 01, 2025",
      author: "Shariful UK",
      blogSlug: "the-importance-of-seo-in-growing-your-online-store",
    },
    {
      title: "Effective Marketing Strategies for Small Businesses",
      imgUrl: "/img/post-3.jpg",
      desc: "This blog offers actionable marketing strategies tailored for small businesses. Learn how to make the most of your limited resources with cost-effective tactics like content marketing, email campaigns, and local SEO.",
      date: "Sep 14, 2025",
      author: "Ripon Hossain",
      blogSlug: "effective-marketing-strategies-for-small-businesses",
    },
    {
      title: "How to Streamline Your Business with Automation",
      imgUrl: "/img/post-4.jpg",
      desc: "Discover how automation tools can help you save time, reduce errors, and improve productivity. This blog covers the best practices for automating tasks like order management, customer communication, and data syncing across different platforms.",
      date: "Jun 25, 2025",
      author: "Mamun",
      blogSlug: "how-to-streamline-your-business-with-automation",
    },
  ],
};

const contactData = {
  title: "Get in Touch! <br /> Reach Out to Us Today",
  features: [
    {
      title: "Call Us",
      desc: "Call us at (+088-234-567-90), available Monday to Friday, 9 AM to 5 PM.",
      icon: "/img/icons/call.svg",
    },
    {
      title: "Email Us",
      desc: "Send us an email at info@gmail.com, and we’ll get back to you within 24 hours.",
      icon: "/img/icons/mail.svg",
    },
    {
      title: "Chat with us",
      desc: "We're here to assist you Monday through Friday, from 9 AM to 5 PM EST.",
      icon: "/img/icons/chat.svg",
    },
  ],
};

const ctaTwoData = {
  title: "Stay Updated with the Latest  Features & Offers",
  btnText: "Sign Up Free",
  bgImg: "/img/counter_bg.svg",
  items: [{ title: "No credit card needed" }, { title: "Free 14-day trial" }],
};

const POSLandingPage = () => {
  return (
    <>
      <HeroStyle6 data={heroData} />
      <ServiceStyle1 data={serviceData} />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <CardStyle4 data={cardData} varient="cs_heading_color" />
      <FeaturesStyle3
        data={featureData}
        btnText="Get Started Now"
        btnUrl="/register"
      />
      <div className="cs_height_130 cs_height_lg_80" />
      <PricingStyle5 data={pricingData} styleVarient="cs_gray_bg_8" />
      <TestimonialStyle2 data={testimonialData} />
      <div className="cs_height_130 cs_height_lg_80" />
      <CtaStyle6 data={ctaOneData} />
      <FaqStyle1 data={faqData} />
      <BlogStyle1 data={blogData} />
      <ContactStyle1 data={contactData} />
      <CtaStyle7 data={ctaTwoData} />
    </>
  );
};

export default POSLandingPage;
