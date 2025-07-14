import parser from "html-react-parser";
import FunFactWhiteItem from "./FunFactWhiteItem";

const FunfactStyle1 = ({ data }) => {
  const { title, subTitle, bgUrl, funfacts } = data;
  return (
    <section
      className="cs_heading_bg cs_bg_filed position-relative overflow-hidden"
      style={{ backgroundImage: `url(${bgUrl})` }}
    >
      <div className="cs_height_124 cs_height_lg_80" />
      <div className="container">
        <div className="text-center position-relative z-1">
          <h2
            className="cs_contet_title cs_fs_38 cs_white_color cs_mb_46 aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {parser(title || "Funfact Section Title")}
          </h2>
          <div className="row">
            <div className="col-xl-6 col-lg-8 offset-xl-3 offset-lg-2">
              <div className="row cs_gap_y_40">
                {funfacts?.slice(0, 3).map((item, index) => (
                  <div className="col-md-4" key={index}>
                    <FunFactWhiteItem
                      count={item.count}
                      suffix={item.suffix}
                      title={item.title}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="cs_counter_shape_1 cs_accent_bg position-absolute" />
        <div className="cs_counter_shape_2 cs_purple_bg position-absolute" />
      </div>
      <div className="cs_height_130 cs_height_lg_80" />
    </section>
  );
};

export default FunfactStyle1;
