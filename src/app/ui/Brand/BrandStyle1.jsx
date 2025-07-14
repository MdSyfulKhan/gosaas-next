const BrandStyle1 = ({ data }) => {
  const { title, brands } = data;
  return (
    <section>
      <div className="container">
        <div className="cs_center">
          <p
            className="cs_has_before_after cs_heading_color cs_mb_45 position-relative aos fadeInDown"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            {title}
          </p>
        </div>
        <div className="cs_horizontal_slider_wrapper cs_type_1">
          <div className="cs_slider_in">
            {[...Array(2)].map((_, loopIndex) => (
              <div className="cs_brands_list" key={`brand-list-${loopIndex}`}>
                {brands?.map((item, index) => (
                  <div
                    className="cs_center"
                    key={`brand-${loopIndex}-${index}`}
                  >
                    <img src={item.imgUrl} alt="Brand logo" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStyle1;
