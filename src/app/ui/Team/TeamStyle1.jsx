import { Icon } from "@iconify/react/dist/iconify.js";
import parser from "html-react-parser";

const TeamStyle1 = ({ data }) => {
  const { title, members } = data;
  return (
    <section>
      <div className="cs_height_133 cs_height_lg_73"></div>
      <div className="container">
        <div className="cs_section_heading cs_style_1 text-center cs_mb_60">
          <h2
            className="cs_section_title cs_fs_50 mb-0 aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {parser(title)}
          </h2>
        </div>
        <div className="row cs_gap_y_24">
          {members.map((member, index) => (
            <div
              className="col-lg-3 col-sm-6 aos fadeInDown"
              data-aos="fade-down"
              data-aos-duration="800"
              data-wow-delay={`${index * 200}ms`}
              key={index}
            >
              <div className="cs_card cs_style_3">
                <div className="cs_card_thumbnail cs_radius_10 cs_mb_29 position-relative">
                  <img src={member.imgUrl} alt={member.name} />
                  <div className="cs_social_links cs_style_1 cs_white_color">
                    <a href="" aria-label={`Social link`}>
                      <Icon icon="fa6-brands:linkedin-in" />
                    </a>
                    <a href="" aria-label={`Social link`}>
                      <Icon icon="fa6-brands:x-twitter" />
                    </a>
                    <a href="" aria-label={`Social link`}>
                      <Icon icon="fa6-brands:youtube" />
                    </a>
                    <a href="" aria-label={`Social link`}>
                      <Icon icon="fa6-brands:x-twitter" />
                    </a>
                  </div>
                </div>
                <div className="cs_card_info">
                  <h3 className="cs_fs_29 cs_normal cs_mb_8">{member.name}</h3>
                  <p className="mb-0">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="cs_height_136 cs_height_lg_76"></div>
    </section>
  );
};

export default TeamStyle1;
