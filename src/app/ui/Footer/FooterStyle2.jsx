import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const FooterStyle2 = ({ data }) => {
  const { logo, desc, quickLinks, supportLinks, contactInfo } = data;
  return (
    <footer className="cs_footer cs_style_1">
      <div className="cs_height_130 cs_height_lg_80" />
      <div className="container">
        <div className="cs_footer_main">
          <div className="row cs_gap_y_30">
            <div className="col-xl-5 col-lg-4 col-md-7">
              <div className="cs_footer_widget cs_text_widget">
                <div
                  className="cs_brand cs_mb_10 aos fadeInUp"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img src={logo || "Logo"} alt="Logo" />
                </div>
                <p className="mb-0">{desc}</p>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-4 offset-lg-0 offset-md-1">
              <div className="cs_footer_widget cs_links_widget">
                <h3 className="cs_footer_widget_title cs_fs_21 cs_mb_21">
                  {quickLinks.title}
                </h3>
                <ul className="cs_footer_menu cs_mp_0">
                  {quickLinks?.links?.map((item, index) => (
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
                <h3 className="cs_footer_widget_title cs_fs_21 cs_mb_21">
                  {supportLinks.title}
                </h3>
                <ul className="cs_footer_menu cs_mp_0">
                  {supportLinks?.links?.map((item) => (
                    <li key={item.title}>
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
                <h3 className="cs_footer_widget_title cs_fs_21 cs_mb_24">
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
        <div className="cs_height_62 cs_height_lg_40" />
        <div className="cs_footer_bottom cs_gray_bg_2 cs_radius_50">
          <div className="cs_footer_text cs_heading_color">
            © Copyright{" "}
            <span className="cs_getting_year">{new Date().getFullYear()}</span>{" "}
            GoSaas theme by{" "}
            <Link target="_blank" href={"https://laralink.com/"}>
              Laralink
            </Link>
          </div>
          <div className="cs_social_links cs_style_1 cs_heading_color">
            <Link href="#" aria-label="Social link">
              <span className="cs_social_icon cs_purple_color">
                <i>
                  <Icon icon="fa6-brands:facebook" />
                </i>
              </span>
              <span>Facebook</span>
            </Link>
            <Link href="#" aria-label="Social link">
              <span className="cs_social_icon cs_purple_color">
                <i>
                  <Icon icon="fa6-brands:youtube" />
                </i>
              </span>
              <span>Youtube</span>
            </Link>
            <Link href="#" aria-label="Social link">
              <span className="cs_social_icon cs_purple_color">
                <i>
                  <Icon icon="fa6-brands:instagram" />
                </i>
              </span>
              <span>Instagram</span>
            </Link>
          </div>
        </div>
        <div className="cs_height_70 cs_height_lg_30" />
      </div>
    </footer>
  );
};

export default FooterStyle2;
