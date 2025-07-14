import CtaStyle8 from "@/app/ui/Cta/CtaStyle8";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";
import FaqStyle2 from "@/app/ui/Faq/FaqStyle2";
import FeaturesStyle8 from "@/app/ui/Features/FeaturesStyle8";
import TestimonialStyle1 from "@/app/ui/Testimonial/TestimonialStyle1";

const featuresData = {
  title: "GoSaas: Your All-in-One <br/> Solution for Business Success",
  subTitle:
    "We offers a comprehensive platform with all the tools you need <br/> to streamline and grow your business efficiently.",
  features: [
    {
      title: "Easy Task Creation",
      desc: "Add new tasks quickly with a simple and user-friendly interface. Organize your workload without the hassle.",
      icon: "/img/icons/easy-task.svg",
      iconBg: "",
    },
    {
      title: "Due Date & Reminders",
      desc: "Set due dates and reminders to ensure you meet your deadlines. Get notified via email or in-app alerts.",
      icon: "/img/icons/due-date.svg",
      iconBg: "cs_bg_2",
    },
    {
      title: "Customizable Lists",
      desc: "Customize task lists to match your unique workflow. Group tasks by project, priority, or deadline to stay on top of everything.",
      icon: "/img/icons/slider.svg",
      iconBg: "cs_bg_3",
    },
    {
      title: "Progress Tracking",
      desc: "Visualize your progress with intuitive dashboards and progress bars. Keep track of completed and pending tasks effortlessly.",
      icon: "/img/icons/progress.svg",
      iconBg: "cs_bg_4",
    },
    {
      title: "Cross Platform Sync",
      desc: "Access your tasks from any device. Our application syncs across web, mobile, and desktop to keep you connected.",
      icon: "/img/icons/cross-plateform.svg",
      iconBg: "cs_bg_5",
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

const faqData = {
  title: "Answers to Your Frequently<br/>Asked Questions",
  subTitle:
    "Find answers to common questions about our CRM application, including features, usage, and troubleshooting tips to help you get the most out of our solution.",
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

const ServicePage = () => {
  return (
    <>
      <FeaturesStyle8 data={featuresData} />
      <TestimonialStyle1 data={testimonialData} />
      <FaqStyle2 data={faqData} />
      <div className="cs_height_122 cs_height_lg_70"></div>
      <CtaStyle8 data={ctaData} />
      <div className="cs_height_135 cs_height_lg_80"></div>
      <CtaStyle9 data={ctaTwoData}></CtaStyle9>
    </>
  );
};

export default ServicePage;
