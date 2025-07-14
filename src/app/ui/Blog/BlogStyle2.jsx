import Link from "next/link";
import BlogSidebarStyle1 from "./BlogSidebarStyle1";

const BlogStyle2 = ({ data }) => {
  const { blogs } = data;
  return (
    <section>
      <div className="container">
        <div className="row cs_gap_y_60">
          <div className="col-lg-3 order-lg-2  fadeInRight">
            <BlogSidebarStyle1 />
          </div>
          <div
            className="col-lg-9 order-lg-1 aos fadeInLeft"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {blogs?.slice(4).map((item, index) => (
              <article className="cs_post cs_style_1 cs_mb_40" key={index}>
                <Link
                  href={`/blog/${item.blogSlug}`}
                  aria-label="Read post details link"
                  className="cs_post_thumbnail cs_radius_10"
                >
                  <img src={item.imgUrl} alt="Post thumbnail" />
                </Link>
                <div className="cs_post_content">
                  <div className="cs_post_meta_wrapper cs_mb_8">
                    <div className="cs_post_meta">By {item.author}</div>
                    <div className="cs_post_meta">{item.date}</div>
                    <div className="cs_post_meta">0 Comments</div>
                  </div>
                  <h3 className="cs_post_title cs_fs_38 cs_mb_15">
                    <Link
                      href={`/blog/${item.blogSlug}`}
                      aria-label="Read post details link"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="cs_post_subtitle cs_mb_33">{item.desc}</p>
                  <Link
                    href={`/blog/${item.blogSlug}`}
                    aria-label="Read post button"
                    className="cs_btn cs_style_1 cs_purple_bg cs_accent_hover cs_white_color cs_fs_16 cs_semibold cs_radius_30"
                  >
                    <span> Read more</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStyle2;
