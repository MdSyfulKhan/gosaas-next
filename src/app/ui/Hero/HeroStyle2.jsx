import CtaStyle3 from "../Cta/CtaStyle3";

const HeroStyle2 = ({ data }) => {
  const { title, subTitle, features, btnText, iconUrl, imgUrl } = data;
  return (
    <section className="cs_hero cs_style_4" id="home">
      <div className="container">
        <div className="cs_hero_content cs_center_column text-center">
          <CtaStyle3
            title={title}
            subTitle={subTitle}
            iconUrl={iconUrl}
            features={features}
            btnText={btnText}
          />
          <div className="cs_height_63 cs_height_lg_60"></div>
          <div
            className="cs_hero_thumbnail cs_radius_20 position-relative aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            <img src={imgUrl} alt="Hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStyle2;
