import CtaStyle8 from "@/app/ui/Cta/CtaStyle8";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";
import IntegrationStyle2 from "@/app/ui/Integration/IntegrationStyle2";
import IntegrationStyle3 from "@/app/ui/Integration/IntegrationStyle3";

const integrationData = {
  title: "Seamless App Integration <br /> for  Effortless Connectivity",
  subtitle:
    "Effortlessly connect and integrate your favorite apps to enhance             <br /> functionality and streamline your workflows.",
  tools: [
    { name: "Discord", icon: "/img/icons/discord.svg" },
    { name: "Slack", icon: "/img/icons/slack.svg" },
    { name: "Microsoft", icon: "/img/icons/microsoft.svg" },
    { name: "Spotify", icon: "/img/icons/spotify.svg" },
    { name: "Google", icon: "/img/icons/google.svg" },
    { name: "Facebook", icon: "/img/icons/fscebook.svg" },
  ],
};

const integrationTwoData = {
  title: "Essential Tools Integration",
  subtitle:
    "Unlock the full potential of your data with our comprehensive analytics solutions. we <br/> provide the tools you need to make informed decisions & drive business growth.",
  tools: [
    {
      name: "Discord",
      icon: "/img/icons/discord-l.svg",
      desc: "Sync with platforms like Twitch or YouTube to notify your community when you go live or upload new content.",
    },
    {
      name: "Slack",
      icon: "/img/icons/slack-l.svg",
      desc: "Sync with platforms like Twitch or YouTube to notify your community when you go live or upload new content.",
    },
    {
      name: "Microsoft",
      icon: "/img/icons/microsoft-l.svg",
      desc: "Sync with platforms like Twitch or YouTube to notify your community when you go live or upload new content.",
    },
    {
      name: "Jira",
      icon: "/img/icons/jira-l.svg",
      desc: "Sync with platforms like Twitch or YouTube to notify your community when you go live or upload new content.",
    },
    {
      name: "Google",
      icon: "/img/icons/google-l.svg",
      desc: "Sync with platforms like Twitch or YouTube to notify your community when you go live or upload new content.",
    },
    {
      name: "Zapier",
      icon: "/img/icons/zapier-l.svg",
      desc: "Sync with platforms like Twitch or YouTube to notify your community when you go live or upload new content.",
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

const IntegrationPage = () => {
  return (
    <>
      <IntegrationStyle2 data={integrationData} />
      <div className="cs_height_140 cs_height_lg_80"></div>
      <IntegrationStyle3 data={integrationTwoData} />
      <div className="cs_height_132 cs_height_lg_70"></div>
      <CtaStyle8 data={ctaData} />
      <div className="cs_height_135 cs_height_lg_80"></div>
      <CtaStyle9 data={ctaTwoData}></CtaStyle9>
    </>
  );
};

export default IntegrationPage;
