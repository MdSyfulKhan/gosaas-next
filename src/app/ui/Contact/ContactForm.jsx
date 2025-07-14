"use client";
import { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullname: "",
    email: "",
    companyname: "",
    phone: "",
    message: "",
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
    if (!form.companyname.trim()) {
      return toast.error("Company Name field is required!");
    }
    if (!form.phone.trim()) {
      return toast.error("Phone field is required!");
    }
    if (!form.message.trim()) {
      return toast.error("Message field is required!");
    }

    const formData = new FormData();
    formData.append("access_key", "26591316-723c-44f7-af23-ec0503a5d458");
    formData.append("fullname", form.fullname);
    formData.append("email", form.email);
    formData.append("companyname", form.companyname);
    formData.append("phone", form.phone);
    formData.append("message", form.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Message sent successfully!", {
          style: { background: "#d4edda", color: "#155724" },
        });
        setForm({
          fullname: "",
          email: "",
          companyname: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (err) {
      toast.error("Network error. Please try again later.", err);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="cs_contact_form row cs_gap_y_24"
      id="cs_form"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <div className="col-sm-6">
        <label htmlFor="fullname">Full Name*</label>
        <input
          type="text"
          name="fullname"
          id="fullname"
          className="cs_form_field cs_radius_30"
          value={form.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-6">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          name="email"
          id="email"
          className="cs_form_field cs_radius_30"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-6">
        <label htmlFor="companyname">Company Name*</label>
        <input
          type="text"
          name="companyname"
          id="companyname"
          className="cs_form_field cs_radius_30"
          value={form.companyname}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-6">
        <label htmlFor="phone">Mobile*</label>
        <input
          type="number"
          name="phone"
          id="phone"
          className="cs_form_field cs_radius_30"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-12">
        <label htmlFor="message">Write Query Details*</label>
        <textarea
          name="message"
          id="message"
          rows="7"
          className="cs_form_field cs_radius_30"
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <div className="col-sm-12">
        <button
          type="submit"
          className="cs_btn cs_style_1 cs_accent_bg cs_purple_hover cs_fs_16 cs_semibold cs_white_color cs_radius_30 aos fadeInUp"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span>Send Message</span>
        </button>
        <div id="cs_result" className="cs_result"></div>
      </div>
    </form>
  );
};

export default ContactForm;
