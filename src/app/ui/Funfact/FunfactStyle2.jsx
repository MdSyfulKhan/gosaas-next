import parser from "html-react-parser";
import FunFactBlackItem from "./FunFactBlackItem";

const FunfactStyle2 = ({ data, shapeIcon, styleVarient }) => {
  const { title, funfacts } = data;

  return (
    <section
      className={` ${
        styleVarient ? styleVarient : ""
      } position-relative overflow-hidden`}
    >
      <div className="cs_height_124 cs_height_lg_80"></div>
      <div className="container">
        <div className="text-center position-relative z-1">
          <h2
            className="cs_contet_title cs_fs_50 cs_mb_46 aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {parser(title)}
          </h2>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row cs_gap_y_30">
                {funfacts?.slice(0, 4).map((item, index) => (
                  <div className="col-md-3 col-sm-6" key={index}>
                    <FunFactBlackItem
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
      </div>
      {shapeIcon && (
        <>
          <div className="cs_counter_shape_3 position-absolute start-0 bottom-0">
            <img src="/img/stroke.svg" alt="Stroke shape" />
          </div>
          <div className="cs_counter_shape_4 position-absolute">
            <img src="/img/celebration.svg" alt="Celebration shape" />
          </div>
        </>
      )}

      <div className="cs_height_130 cs_height_lg_80"></div>
    </section>
  );
};

export default FunfactStyle2;
