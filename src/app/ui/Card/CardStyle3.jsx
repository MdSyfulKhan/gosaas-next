import parser from "html-react-parser";
const CardStyle3 = ({ data }) => {
  const { mintTitle, title, subTitle, imgUrl, features } = data;

  return (
    <section>
      <div className="container">
        <div className="cs_card cs_style_1 cs_type_4">
          <div className="row cs_gap_y_40 align-items-center">
            <div className="col-xl-5 col-lg-5 offset-xl-1 order-lg-2">
              <div
                className="cs_card_thumbnail cs_radius_15 position-relative  fadeInRight"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <img src={imgUrl} alt="Feature image" />
                <div className="cs_illustration position-absolute">
                  <img
                    src="/img/Illustration_2.png"
                    alt="Analytics chart image"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 order-lg-1">
              <div className="cs_card_content">
                <div className="cs_section_heading cs_style_1 cs_mb_39">
                  <p className="cs_body_color cs_mb_11">{mintTitle}</p>
                  <h2
                    className="cs_section_title cs_white_color cs_fs_50 cs_mb_24 aos fadeInDown"
                    data-aos="fade-down"
                    data-aos-duration="800"
                  >
                    {parser(title)}
                  </h2>
                  <p className="cs_section_text cs_fs_21 mb-0">
                    {parser(subTitle)}
                  </p>
                </div>
                <div className="row cs_gap_y_40">
                  {features?.map((item, index) => (
                    <div
                      className={`col-md-6 wow  ${item.animation}`}
                      key={index}
                    >
                      <div className="cs_iconbox">
                        <span className="cs_iconbox_icon cs_accent_color cs_mb_24 d-inline-block">
                          <img src={item.icon} alt="icon" />
                        </span>
                        <h3 className="cs_fs_21 cs_white_color cs_mb_15">
                          {item.title}
                        </h3>
                        <p className="mb-0">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardStyle3;
