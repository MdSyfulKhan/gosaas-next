import BlogDetails from "@/app/ui/Blog/BlogDetails";
import CtaStyle9 from "@/app/ui/Cta/CtaStyle9";

const ctaTwoData = {
  imgUrl: "/img/support-img-group.png",
  title: "Any Questions? Our support team is available 24/7",
  btnText: "Live Chat Now",
};

const BlogDetailsPage = ({ params }) => {
  return (
    <>
      <div className="cs_height_66 cs_height_lg_60" />
      <BlogDetails blogSlug={params?.blogSlug ?? null} />
      <div className="cs_height_140 cs_height_lg_80" />
      <CtaStyle9 data={ctaTwoData} />
    </>
  );
};

export default BlogDetailsPage;
