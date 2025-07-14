"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Input field must not be empty!");
      return;
    }

    // Simulate successful login
    toast.success("Login successful!");

    // Reset form (optional)
    setEmail("");
  };

  return (
    <section className="position-relative">
      <div className="cs_height_140 cs_height_lg_80" />
      <div className="container">
        <div className="cs_center">
          <div className="cs_register_form_wrapper cs_white_bg cs_radius_30 position-relative z-1">
            <div className="cs_mb_31 text-center">
              <h2
                className="cs_fs_29 cs_medium cs_mb_9 aos zoomIn"
                data-aos="zoom-in"
              >
                Reset Password
              </h2>
              <p className="mb-0">
                Enter your email that you used to recover your password. We will
                send a password reset link.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="cs_register_form row cs_gap_y_24 cs_mb_26"
            >
              <div className="col-12">
                <div className="position-relative">
                  <Icon icon="fa6-solid:envelope" />
                  <input
                    type="email"
                    className="cs_form_field cs_radius_30"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_purple_bg cs_accent_hover cs_fs_16 cs_semibold cs_white_color cs_radius_30 w-100"
                >
                  <span>Reset Password</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="cs_register_shape_1 cs_purple_bg cs_radius_100 position-absolute" />
        <div className="cs_register_shape_2 cs_accent_bg cs_radius_100 position-absolute" />
      </div>
      <div className="cs_height_140 cs_height_lg_80" />
    </section>
  );
};

export default ResetPassword;
