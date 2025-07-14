import parser from "html-react-parser";
import "swiper/css";
import "swiper/css/pagination";
import TestimonialSliderStyle2 from "../Slider/TestimonialSliderStyle2";

const TestimonialStyle2 = ({ data }) => {
  const { title, testimonials } = data;

  return (
    <section className="cs_slider cs_style_1 cs_slider_gap_24">
      <div className="cs_height_124 cs_height_lg_80" />
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center cs_mb_55">
          <h2
            className="cs_fs_50 mb-0 aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {parser(title)}
          </h2>
        </div>
        <TestimonialSliderStyle2 testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialStyle2;
