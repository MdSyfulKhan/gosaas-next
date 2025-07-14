"use client";
import { handleFormSubmit } from "@/app/helper/Functions";
import parser from "html-react-parser";
import { useState } from "react";

const CtaStyle1 = ({ data }) => {
  const [email, setEmail] = useState("");
  const { title, btnText } = data;

  return (
    <section className="cs_cta cs_style_3 cs_purple_bg position-relative overflow-hidden">
      <div className="cs_height_125 cs_height_lg_72" />
      <div className="container">
        <div className="cs_cta_text cs_center_column text-center position-relative z-1">
          <h2
            className="cs_fs_50 cs_white_color cs_mb_48 aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {parser(title)}
          </h2>
          <form
            action="#"
            className="cs_newsletter_form cs_type_1 position-relative aos fadeInUp"
            data-aos="fade-up"
            data-aos-duration="800"
            onSubmit={(e) =>
              handleFormSubmit(e, {
                email,
                resetFn: () => setEmail(""),
                successMessage: "You’re in! We’ll be in touch.",
              })
            }
          >
            <input
              type="text"
              className="cs_newsletter_input cs_white_bg cs_radius_50 border-0"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              aria-label="Get started now button"
              className="cs_btn cs_style_1 cs_heading_bg cs_fs_16 cs_semibold cs_white_color cs_purple_hover"
            >
              <span>{btnText}</span>
            </button>
          </form>
        </div>
        <div className="cs_cta_shape_1 cs_accent_bg cs_radius_100 position-absolute" />
        <div className="cs_cta_shape_2 cs_accent_bg cs_radius_100 position-absolute" />
      </div>
      <div className="cs_height_140 cs_height_lg_80" />
    </section>
  );
};

export default CtaStyle1;
