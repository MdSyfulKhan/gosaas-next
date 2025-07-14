"use client";
import parser from "html-react-parser";
import "react-toastify/dist/ReactToastify.css";
import ContactForm from "./ContactForm";

const ContactStyle1 = ({ data }) => {
  const { title, features } = data;

  return (
    <>
      <section className="cs_contact_section">
        <div className="cs_height_124 cs_height_lg_80" />
        <div className="container">
          <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
            <h2
              className="cs_fs_50 mb-0 aos fadeInDown"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              {parser(title)}
            </h2>
          </div>
          <div className="row cs_gap_y_40">
            <div className="col-lg-5">
              {features?.map((item, index) => (
                <div
                  className="cs_iconbox cs_style_8 cs_mb_34"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <span className="cs_iconbox_icon">
                    <img
                      src={item.icon}
                      width={50}
                      height={50}
                      alt={`${item.icon} Icon`}
                    />
                  </span>
                  <div className="cs_iconbox_info">
                    <h3 className="cs_fs_29 cs_normal cs_mb_17">
                      {item.title}
                    </h3>
                    <p className="mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-xl-6 col-lg-7 offset-xl-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactStyle1;
