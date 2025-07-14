"use client";
import { useState } from "react";
import PageHeadingStyle1 from "../PageHeading/PageHeadingStyle1";

const AccordionItem = ({ question, answer, isOpen, onClick }) => (
  <div className="cs_accordian cs_radius_15 cs_white_bg cs_type_2 position-relative">
    <div
      className={`cs_accordian_head cs_fs_21 cs_heading_color ${
        isOpen ? "active" : ""
      }`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {question}
      <span className="cs_accordian_toggle position-absolute" />
    </div>
    {isOpen && <div className="cs_accordian_body">{answer}</div>}
  </div>
);

const FaqStyle1 = ({ data }) => {
  const { title, faqs } = data;
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="position-relative">
      <PageHeadingStyle1 title={title} />
      <div className="container">
        <div className="row cs_gap_y_24 position-relative z-1">
          <div
            className="col-xl-6 aos fadeInLeft"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {faqs?.slice(0, 4).map((faq, index) => (
              <AccordionItem
                key={index}
                {...faq}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
          <div
            className="col-xl-6 aos"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {faqs?.slice(4).map((faq, index) => (
              <AccordionItem
                key={index + 4}
                {...faq}
                isOpen={openIndex === index + 4}
                onClick={() => handleToggle(index + 4)}
              />
            ))}
          </div>
        </div>

        <div className="cs_faq_shape_1 cs_purple_bg cs_radius_100 position-absolute" />
        <div className="cs_faq_shape_2 cs_accent_bg cs_radius_100 position-absolute" />
      </div>
    </section>
  );
};

export default FaqStyle1;
