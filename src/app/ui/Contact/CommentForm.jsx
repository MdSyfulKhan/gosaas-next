"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CommentForm = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Field validation
    if (!form.fullname.trim()) {
      return toast.error("Full Name field is required!");
    }
    if (!form.email.trim()) {
      return toast.error("Email field is required!");
    }
    if (!form.comment.trim()) {
      return toast.error("Message field is required!");
    }

    const formData = new FormData();
    formData.append("access_key", "26591316-723c-44f7-af23-ec0503a5d458");
    formData.append("fullname", form.fullname);
    formData.append("email", form.email);
    formData.append("website", form.website);
    formData.append("comment", form.comment);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Comment sent successfully!");
        setForm({
          fullname: "",
          email: "",
          website: "",
          comment: "",
        });
      } else {
        toast.error("Failed to send comment. Try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again later.", err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="cs_comment_form row cs_gap_y_24">
        <div className="col-sm-6">
          <label htmlFor="fullname">Full Name*</label>
          <input
            type="text"
            name="fullname"
            value={form.fullname}
            onChange={handleChange}
            className="cs_form_field cs_radius_30"
            id="fullname"
          />
        </div>
        <div className="col-sm-6">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="cs_form_field cs_radius_30"
            id="email"
          />
        </div>
        <div className="col-sm-12">
          <label htmlFor="website">Website</label>
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="cs_form_field cs_radius_30"
            id="website"
          />
        </div>
        <div className="col-sm-12">
          <label htmlFor="comment">Write Your Comment*</label>
          <textarea
            rows={5}
            name="comment"
            value={form.comment}
            onChange={handleChange}
            className="cs_form_field cs_radius_30"
            id="comment"
          />
        </div>
        <div className="col-sm-12">
          <button
            type="submit"
            aria-label="Submit Comment"
            className="cs_btn cs_style_1 cs_purple_bg cs_fs_16 cs_white_color cs_semibold cs_accent_hover aos fadeInUp"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span>Post Comment</span>
            <span className="cs_btn_icon cs_center overflow-hidden">
              <Icon
                icon="fa6-solid:arrow-right"
                style={{
                  filter: "drop-shadow(-20px -0px 0px rgb(255,255,255))",
                  color: "#fff",
                }}
              />
            </span>
          </button>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
