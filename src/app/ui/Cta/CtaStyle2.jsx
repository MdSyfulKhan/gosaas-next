"use client";
import { handleFormSubmit } from "@/app/helper/Functions";
import { Icon } from "@iconify/react/dist/iconify.js";
import parser from "html-react-parser";
import { useState } from "react";

const CtaStyle2 = ({ data }) => {
  const [email, setEmail] = useState("");
  const { title, btnText, bgImg } = data;
  return (
    <section>
      <div className="cs_height_134 cs_height_lg_80" />
      <div className="container">
        <div
          className="cs_cta cs_style_2 cs_type_1 cs_heading_bg cs_bg_filed cs_radius_10"
          style={{ backgroundImage: `url(${bgImg ? bgImg : ""})` }}
        >
          <div className="cs_center_column text-center position-relative z-1">
            <h2
              className="cs_contet_title cs_fs_70 cs_white_color cs_mb_55 aos fadeInDown"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              {parser(title)}
            </h2>
            <form
              action="#"
              className="cs_newsletter_form cs_type_3 cs_mb_21 position-relative aos fadeInUp"
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
                className="cs_newsletter_input cs_heading_bg cs_radius_50 text-capitalize"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                aria-label="Sign up button"
                className="cs_btn cs_style_1 cs_purple_bg cs_accent_hover cs_fs_16 cs_semibold cs_white_color"
              >
                <span>{btnText}</span>
              </button>
            </form>
            <ul className="cs_list cs_style_2 cs_mp_0">
              <li className="cs_border_color">
                <i>
                  <Icon icon="fa6-solid:check" className="cs_accent_color" />
                </i>
                No credit card needed
              </li>
              <li className="cs_border_color">
                <i>
                  <Icon icon="fa6-solid:check" className="cs_accent_color" />
                </i>
                Free 14-day trial
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaStyle2;
