"use client";
import { handleFormSubmit } from "@/app/helper/Functions";
import { Icon } from "@iconify/react/dist/iconify.js";
import parser from "html-react-parser";
import { useState } from "react";

const CardStyle5 = ({ data }) => {
  const [email, setEmail] = useState("");
  const { mintTitle, title, subTitle, imgUrl, growthRate, happyCustomers } =
    data;

  return (
    <section>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_5">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-lg-5 order-lg-2 offset-lg-1">
              <div
                className="cs_card_thumbnail cs_radius_15 position-relative  fadeInRight"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <img src={imgUrl} alt="Feature image" />
                <div className="cs_fast_managing_badge position-absolute">
                  <img src="/img/fast-messaging.png" alt="Users text image" />
                </div>
                <div className="cs_task_info_badge position-absolute">
                  <img src="/img/Illustration_3.png" alt="Task info image" />
                </div>

                <div className="cs_rating_badge position-absolute">
                  <img src="/img/rating.png" alt="Rating info image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_37">
                  <p className="cs_body_color cs_semibold cs_mb_11">
                    {mintTitle}
                  </p>
                  <h2
                    className="cs_section_title cs_fs_50 cs_white_color cs_mb_27 aos fadeInDown"
                    data-aos="fade-down"
                    data-aos-duration="800"
                  >
                    {parser(title)}
                  </h2>
                  <p className="cs_section_text mb-0">{parser(subTitle)}</p>
                </div>

                <form
                  action="#"
                  className="cs_newsletter_form cs_type_2 cs_mb_29 position-relative aos fadeInUp"
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
                    className="cs_newsletter_input cs_radius_50 text-capitalize"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span className="cs_mail_icon position-absolute">
                    <Icon icon="fa6-regular:envelope" />
                  </span>
                  <button
                    type="submit"
                    aria-label="Subscribe button"
                    className="cs_btn cs_style_1 cs_purple_bg cs_fs_16 cs_semibold cs_white_color cs_accent_hover"
                  >
                    <span>Sign Up Free</span>
                  </button>
                </form>

                <div className="cs_funfact_wrapper">
                  <div className="cs_funfact cs_style_1">
                    <div className="cs_funfact_number cs_fs_38 cs_bold cs_white_color cs_mb_2">
                      <span>{growthRate}</span>%
                    </div>
                    <h3 className="cs_border_color cs_fs_16 cs_normal mb-0">
                      Increase growth rate
                    </h3>
                  </div>
                  <div className="cs_funfact cs_style_1">
                    <div className="cs_funfact_number cs_fs_38 cs_bold cs_white_color cs_mb_2">
                      <span>{happyCustomers}</span>K
                    </div>
                    <h3 className="cs_border_color cs_fs_16 cs_normal mb-0">
                      Happy Customers
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardStyle5;
