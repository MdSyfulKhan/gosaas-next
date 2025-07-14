import CtaStyle8 from "@/app/ui/Cta/CtaStyle8";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";
import FaqStyle2 from "@/app/ui/Faq/FaqStyle2";
import PricingStyle4 from "@/app/ui/Pricing/PricingStyle4";

const pricingData = {
  title: "Select the plan that best fits <br/> your business needs",
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

const PricingPage = () => {
  return (
    <>
      <PricingStyle4 data={pricingData} />
      <div className="cs_height_130 cs_height_lg_80"></div>
      <FaqStyle2 data={faqData} />
      <div className="cs_height_122 cs_height_lg_70"></div>
      <CtaStyle8 data={ctaData} />
      <div className="cs_height_135 cs_height_lg_80"></div>
      <CtaStyle9 data={ctaTwoData}></CtaStyle9>
    </>
  );
};

export default PricingPage;
