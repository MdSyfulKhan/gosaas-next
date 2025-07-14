import parser from "html-react-parser";
import TestimonialSliderStyle1 from "../Slider/TestimonialSliderStyle1";
const TestimonialStyle1 = ({ data }) => {
  const { title, testimonial } = data;
  return (
    <section>
      <div className="cs_height_120 cs_height_lg_70" />
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
      </div>
      <TestimonialSliderStyle1 testimonial={testimonial} />
      <div className="cs_height_140 cs_height_lg_80" />
    </section>
  );
};

export default TestimonialStyle1;
