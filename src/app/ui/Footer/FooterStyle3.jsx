import { Icon } from "@iconify/react";
import Link from "next/link";

const FooterStyle3 = ({ data }) => {
  const { logo, desc, quickLinks, supportLinks, contactInfo } = data;
  return (
    <footer className="cs_footer cs_style_1 cs_type_2 position-relative overflow-hidden">
      <div className="cs_height_130 cs_height_lg_80" />
      <div className="container">
        <div className="cs_footer_main position-relative z-1">
          <div className="row cs_gap_y_30">
            <div className="col-xl-5 col-lg-4 col-md-7">
              <div className="cs_footer_widget cs_text_widget">
                <div
                  className="cs_brand cs_mb_13 aos fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img src={logo || "Logo"} alt="Logo" />
                </div>
                <p className="cs_mb_27">{desc}</p>
                <div className="d-flex flex-column">
                  <a
                    href="mailto:contact@gosaas.com"
                    aria-label="Email send link"
                    className="cs_support_link cs_white_color cs_semibold cs_mb_23"
                  >
                    <span className="cs_support_icon cs_center cs_radius_100">
                      <img src="/img/icons/envelopes.svg" alt="Email icon" />
                    </span>
                    <span className="cs_support_text">contact@gosaas.com</span>
                  </a>
                  <a
                    href="tel:+5514545155540"
                    aria-label="Phone call link"
                    className="cs_support_link cs_white_color cs_semibold cs_phone"
                  >
                    <span className="cs_support_icon cs_center cs_radius_100">
                      <img src="/img/icons/phone-rotary.svg" alt="Phone icon" />
                    </span>
                    <span className="cs_support_text">+55 145451 55540</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 offset-lg-0 offset-md-1">
              <div className="cs_footer_widget cs_links_widget">
                <h3 className="cs_footer_widget_title cs_fs_21 cs_white_color cs_mb_24">
                  {quickLinks.title}
                </h3>
                <ul className="cs_footer_menu cs_mp_0">
                  {quickLinks.links?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className="text-capitalize"
                        aria-label="Home page link"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-7">
              <div className="cs_footer_widget cs_help_widget">
                <h3 className="cs_footer_widget_title cs_fs_21 cs_white_color cs_mb_24">
                  {supportLinks.title}
                </h3>
                <ul className="cs_footer_menu cs_mp_0">
                  {supportLinks.links?.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.url}
                        className="text-capitalize"
                        aria-label="Home page link"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3  col-md-4 offset-md-1 offset-lg-0">
              <div className="cs_footer_widget cs_contact_widget">
                <h3 className="cs_footer_widget_title cs_fs_21 cs_white_color cs_mb_24">
                  {contactInfo.title}
                </h3>
                <ul className="cs_footer_menu cs_mp_0">
                  {contactInfo.links?.map((item, index) => (
                    <li key={index}>
                      {item.url ? (
                        <Link href={`${item.url}`} aria-label="Email send link">
                          {item.title}
                        </Link>
                      ) : (
                        <>{item.title}</>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cs_height_62 cs_height_lg_40" />
      <hr />
      <div className="container">
        <div className="cs_footer_bottom position-relative z-1">
          <div className="cs_footer_text cs_white_color">
            Copyright ©{" "}
            <span className="cs_getting_year">{new Date().getFullYear()}</span>{" "}
            GoSaas theme by Laralink All Rights.
          </div>
          <div className="cs_social_links cs_style_1 cs_white_color">
            <a href="#" aria-label="Social link">
              <span className="cs_social_icon">
                <i>
                  <Icon icon="fa6-brands:facebook" />
                </i>
              </span>
              <span>Facebook</span>
            </a>
            <a href="#" aria-label="Social link">
              <span className="cs_social_icon">
                <i>
                  <Icon icon="fa6-brands:youtube" />
                </i>
              </span>
              <span>YouTube</span>
            </a>
            <a href="#" aria-label="Social link">
              <span className="cs_social_icon">
                <i>
                  <Icon icon="fa6-brands:instagram" />
                </i>
              </span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <div className="cs_ellipse_1 position-absolute" />
      <div className="cs_ellipse_2 position-absolute" />
      <div className="cs_ellipse_3 position-absolute" />
      <div className="cs_ellipse_4 position-absolute" />
      <div className="cs_vector_1 position-absolute">
        <img src="/img/vector_4.svg" alt="Vector shape" />
      </div>
    </footer>
  );
};

export default FooterStyle3;
