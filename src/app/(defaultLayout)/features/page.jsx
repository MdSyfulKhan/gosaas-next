import CardStyle4 from "@/app/ui/Card/CardStyle4";
import CtaStyle8 from "@/app/ui/Cta/CtaStyle8";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";
import FeaturesStyle2 from "@/app/ui/Features/FeaturesStyle2";
import FeaturesStyle3 from "@/app/ui/Features/FeaturesStyle3";
import FeaturesStyle6 from "@/app/ui/Features/FeaturesStyle6";
import IntegrationStyle1 from "@/app/ui/Integration/IntegrationStyle1";
import PageHeadingStyle1 from "@/app/ui/PageHeading/PageHeadingStyle1";

const cardTwoData = {
  title: "Gain precise insights for your business",
  subTitle:
    "Our fast response system helps you tackle tasks efficiently, enabling you to focus on what truly matters and achieve your goals with ease.",
  imgUrl: "/img/feature_11.png",
  badge1: "/img/active-user.png",
  badge2: "/img/advance-search.png",
  features: [
    {
      title: "Advanced Analytics Tools",
    },
    {
      title: "Real-time Data",
    },
    {
      title: "Accurate Predictions",
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

const featureTwoData = {
  title: "Upgrade Your Business with Our CRM Solution",
  imgUrl: "/img/feature_12.png",
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

const FeaturesPage = () => {
  return (
    <>
      <PageHeadingStyle1
        title="Everything You Expect and <br /> More Features Beyond"
        subTitle="GoSaas delivers all the key features, offering a versatile <br /> platform to streamline your business operations."
      />
      <CardStyle4 data={cardTwoData} varient="cs_heading_color" />
      <FeaturesStyle3
        data={featureThreeData}
        btnText="Get Started Now"
        btnUrl="/register"
      />
      <FeaturesStyle2 data={featureTwoData} />
      <IntegrationStyle1 data={integrationData} />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <FeaturesStyle6 data={featuresData} />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <CtaStyle8 data={ctaData} />
      <div className="cs_height_135 cs_height_lg_80"></div>
      <CtaStyle9 data={ctaTwoData}></CtaStyle9>
    </>
  );
};

export default FeaturesPage;
