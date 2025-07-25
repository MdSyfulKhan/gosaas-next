"use client";
import PageHeadingStyle1 from "../PageHeading/PageHeadingStyle1";

const ContactMethods = ({ data }) => {
  const { methods } = data;
  return (
    <section>
      <PageHeadingStyle1
        title="Get in Touch with Us"
        subTitle="Have questions or need support? Reach out to us, <br /> and we’ll be happy to assist you!"
      />
      <div className="container">
        <div className="row cs_gap_y_24">
          {methods?.map((item, index) => (
            <div
              key={index}
              className={`col-lg-4 wow  ${item.animation || "aos fadeInUp"}`}
              data-wow-delay={item.delay || "0s"}
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="cs_iconbox cs_style_7 cs_gray_bg_1 cs_radius_10">
                <span className="cs_iconbox_icon cs_mb_23">
                  <img src={item.icon} alt="" />
                </span>
                <div className="cs_iconbox_info">
                  <h3 className="cs_fs_29 cs_normal cs_mb_15">{item.title}</h3>
                  <p className="mb-0">
                    {item.text}
                    {item.link && (
                      <a
                        href={item.link}
                        className="cs_accent_color"
                        aria-label={item.link.label}
                      >
                        {item.link.text}
                      </a>
                    )}
                    {item.afterLink}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;
