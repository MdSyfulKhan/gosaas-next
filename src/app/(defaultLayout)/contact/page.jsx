import ContactMethods from "@/app/ui/Contact/ContactMethods";
import ContactStyle2 from "@/app/ui/Contact/ContactStyle2";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";

const contactMethodsData = {
  methods: [
    {
      icon: "/img/icons/phone.svg",
      title: "Call Us",
      text: "Call us at ",
      link: {
        href: "tel:+08823456790",
        label: "Call us link",
        text: "(+088-234-567-90)",
      },
      afterLink: ", available Monday to Friday, 9 AM to 5 PM.",
      animation: "fade-in-left",
    },
    {
      icon: "/img/icons/email.svg",
      title: "Email Us",
      text: "Send us an email at ",
      link: {
        href: "mailto:info@gmail.com",
        label: "Send mail link",
        text: "info@gmail.com",
      },
      afterLink: ", and we’ll get back to you within 24 hours.",
      animation: "fade-in-down",
    },
    {
      icon: "/img/icons/chat.svg",
      title: "Chat with us",
      text: "We're here to assist you Monday through Friday, from 9 AM to 5 PM EST.",
      animation: "fade-in-right",
    },
  ],
};

const contactData = {
  mintTitle: "ANY QUERY",
  title: "Feel free to fill out this form & contact us.",
};

const ctaData = {
  imgUrl: "/img/support-img-group.png",
  title: "Any Questions? Our support team is available 24/7",
  btnText: "Live Chat Now",
};

const ContactPage = () => {
  return (
    <>
      <ContactMethods data={contactMethodsData} />
      <ContactStyle2 data={contactData} />
      <CtaStyle9 data={ctaData} />
    </>
  );
};

export default ContactPage;
