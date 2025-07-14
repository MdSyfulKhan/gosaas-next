import BrandStyle2 from "@/app/ui/Brand/BrandStyle2";
import CardStyle3 from "@/app/ui/Card/CardStyle3";
import CardStyle4 from "@/app/ui/Card/CardStyle4";
import CardStyle5 from "@/app/ui/Card/CardStyle5";
import CtaStyle4 from "@/app/ui/Cta/CtaStyle4";
import FaqStyle3 from "@/app/ui/Faq/FaqStyle3";
import FeaturesStyle4 from "@/app/ui/Features/FeaturesStyle4";
import FeaturesStyle7 from "@/app/ui/Features/FeaturesStyle7";
import Herostyle3 from "@/app/ui/Hero/Herostyle3";
import PricingStyle3 from "@/app/ui/Pricing/PricingStyle3";

const heroData = {
  title: "We unite tasks, team, and <br /> tools in one place",
  subTitle:
    "Streamline your tasks, stay organized, and enhance your productivity <br /> with our intuitive task management web application.",
  iconUrl: "/img/cup.png",
  imgUrl: "/img/hero_img_3.jpg",
  bgImgUrl: "/img/hero_shape_2.svg",
  btnText: "Sign Up Free",
};

const featuresData = {
  mintTitle: "FEATURES",
  title: "Key features to boost your <br/> productivity",
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

const cardData = {
  mintTitle: "FLEXIBILIY",
  title: "Access real-time updates <br/> on your team's work",
  subTitle:
    "Skip the tedious manual work. Automation handles it for you, streamlining workflows, minimizing errors, and freeing up time for more critical tasks.",
  imgUrl: "/img/feature_5.jpg",
  features: [
    {
      title: "Automate Task Creation",
      desc: "Automate task creation to streamline your workflow and boost productivity.",
      icon: "/img/feature_16.svg",
      animation: "fade-in-left",
    },
    {
      title: "Enhanced Collaboration",
      desc: "Enabling seamless communication and collaboration from anywhere.",
      icon: "/img/feature_17.svg",
      animation: "fade-in-right",
    },
  ],
};

const cardTwoData = {
  mintTitle: "FAST RESPONSE",
  title: "Experience unmatched <br/> speed and efficiency",
  subTitle:
    "Our fast response system helps you tackle tasks efficiently, enabling you to focus on what truly matters and achieve your goals with ease.",
  imgUrl: "/img/feature_6.jpg",
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

const featurestwoData = {
  title: "Increase your productivity",
  subTitle:
    "Packed with features to provide you the ultimate web <br />conferencing experience",
  features: [
    {
      img: "/img/card-img-1.png",
      title: "Task Creation & Assignment",
      desc: "Increase productivity through streamlined workflows and highly efficient task management solutions.",
      animation: "fade-in-left",
    },
    {
      img: "/img/card-img-2.png",
      title: "Deadline & Priority Setting",
      desc: "Set deadlines and prioritize tasks to help manage workloads and meet project timelines effectively",
      animation: "fade-in-down",
    },
    {
      img: "/img/card-img-3.png",
      title: "Progress Tracking",
      desc: "Monitor task progress with status updates, checklists, and completion indicators, keeping everyone on the same page.",
      animation: "fade-in-right",
    },
  ],
};

const intrigrationData = {
  mintTitle: "INTEGRATIONS",
  title: "Seamlessly integrating with your <br/> preferred tools",
  integrations: {
    integrations1: [
      { icon: "/img/icons/slack.svg", name: "Slack" },
      { icon: "/img/icons/spotify.svg", name: "Spotify" },
      { icon: "/img/icons/fscebook.svg", name: "Facebook" },
      { icon: "/img/icons/figma.svg", name: "Figma" },
      { icon: "/img/icons/microsoft.svg", name: "Microsoft" },
      { icon: "/img/icons/discord.svg", name: "Discord" },
    ],

    integrations2: [
      { icon: "/img/icons/talegram.svg", name: "Telegram" },
      { icon: "/img/icons/amazon.svg", name: "Amazon" },
      { icon: "/img/icons/twitter.svg", name: "Twitter" },
      { icon: "/img/icons/google.svg", name: "Google" },
      { icon: "/img/icons/snapchat.svg", name: "Snapchat" },
      { icon: "/img/icons/github.svg", name: "Github" },
      { icon: "/img/icons/paypal.svg", name: "Paypal" },
    ],
  },
};

const cardThreeData = {
  mintTitle: "AWESOME FACT",
  title: `A task Manager that’s both <span class='cs_gradient_color'>powerful & essential</span>`,
  subTitle:
    "Skip the tedious manual work. Automation handles it for you,<br> streamlining workflows, minimizing errors, and freeing up time <br> for more critical tasks.",
  imgUrl: "/img/feature_7.jpg",
  growthRate: 35,
  happyCustomers: 30,
};

const pricingData = {
  subtitle: "PRICING",
  title: "Select the plan that best fits <br> your business needs",
  plans: [
    {
      title: "Free",
      monthly: 0,
      yearly: 0,
      badge: null,
      features: [
        { label: "Limited number of data points", available: true },
        { label: "Standard analytics reports", available: true },
        { label: "Basic dashboard", available: true },
        { label: "Email support", available: false },
        { label: "Premium Support", available: false },
      ],
    },
    {
      title: "Standard",
      monthly: 29,
      yearly: 99,
      badge: "Most Popular",
      features: [
        { label: "Increased data point limits", available: true },
        { label: "Advanced analytics", available: true },
        { label: "Customizable dashboards", available: true },
        { label: "API access", available: false },
        { label: "Priority email support", available: false },
      ],
    },
    {
      title: "Enterprise",
      monthly: 229,
      yearly: 729,
      badge: null,
      features: [
        { label: "Unlimited data points", available: true },
        { label: "Real-time analytics", available: true },
        { label: "Advanced predictive analytics", available: true },
        { label: "Dedicated account manager", available: true },
        { label: "Phone support", available: true },
      ],
    },
  ],
};

const ctaData = {
  title: "Ready to get started? Start your free trial now!",
  subTitle:
    "Elevate sales and stay ahead in the competitive market by being among <br/> the first to benefit from our game-changing solutions.",
  btnText: "Start Free Trial",
  btnUrl: "/about-us",
  shape1: "",
  shape2: "/img/vector_3.svg",
};

const faqData = {
  subtitle: "FAQ'S",
  title: "Answers to Your Frequently <br> Asked Questions",
  faqs: [
    {
      question: "What data types does your analytics application support?",
      answer: "We support JSON, CSV, SQL databases, and more.",
    },
    {
      question: "Do you offer a free trial of your analytics application?",
      answer: "Yes, we offer a 14-day free trial.",
    },
    {
      question: "Can I upgrade or downgrade my plan at any time?",
      answer: "Absolutely, plans can be changed anytime via your dashboard.",
    },
    {
      question: "Do you offer discounts for annual subscriptions?",
      answer: "Yes, annual plans receive a 20% discount.",
    },
    {
      question: "What support options are available if I need help?",
      answer: "We provide email, live chat, and priority support options.",
    },
    {
      question: "Is there a mobile app available?",
      answer: "Yes, our app is available for both iOS and Android.",
    },
    {
      question: "What are benefits of using your analytics application?",
      answer:
        "Real-time insights, powerful dashboards, and collaboration tools.",
    },
    {
      question: "Is there any future prediction for business?",
      answer: "Yes, we use machine learning to provide predictive analytics.",
    },
  ],
};

const TaskManagementPage = () => {
  return (
    <>
      <Herostyle3 data={heroData} />
      <FeaturesStyle4 data={featuresData} />
      <CardStyle3 data={cardData} />
      <div className="cs_height_136 cs_height_lg_80"></div>
      <CardStyle4 data={cardTwoData} varient="cs_white_color" />
      <FeaturesStyle7 data={featurestwoData} />
      <BrandStyle2 data={intrigrationData} />
      <CardStyle5 data={cardThreeData} />
      <PricingStyle3 data={pricingData} />
      <CtaStyle4 data={ctaData} />
      <FaqStyle3 data={faqData} />
    </>
  );
};

export default TaskManagementPage;
