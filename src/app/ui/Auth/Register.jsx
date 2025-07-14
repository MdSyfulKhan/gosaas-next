"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conditions, setConditions] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      toast.error("Input field must not be empty!");
      return;
    }

    // Simulate successful login
    toast.success("Login successful!");

    // Reset form (optional)
    setFullName("");
    setEmail("");
    setPassword("");
    setConditions(false);
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
                Create an account
              </h2>
              <p className="mb-0">
                Use your credentials to access your account
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="cs_register_form row cs_gap_y_24 cs_mb_26"
            >
              <div className="col-12">
                <div className="position-relative">
                  <Icon icon="fa6-solid:circle-user" />
                  <input
                    type="text"
                    className="cs_form_field cs_radius_30"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>
              </div>

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
                <div className="position-relative">
                  <Icon icon="fa6-solid:lock" />
                  <Icon
                    icon={`fa6-solid:${showPassword ? "eye-slash" : "eye"}`}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                      cursor: "pointer",
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform: "translateY(-50%)",
                    }}
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    className="cs_form_field cs_radius_30"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="cs_login_meta d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                      checked={conditions}
                      onChange={(e) => setConditions(e.target.checked)}
                    />
                    <label htmlFor="remember">Accept terms & condition</label>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <button
                  type="submit"
                  className="cs_btn cs_style_1 cs_purple_bg cs_accent_hover cs_fs_16 cs_semibold cs_white_color cs_radius_30 w-100"
                >
                  <span>Register Now</span>
                </button>
              </div>
            </form>

            <div className="cs_social_login text-center">
              <p className="cs_mb_22">or signup with</p>
              <div className="cs_social_links cs_center cs_mb_20">
                <a
                  href="#"
                  className="cs_center cs_radius_100"
                  aria-label="LinkedIn"
                >
                  <Icon icon="fa6-brands:linkedin-in" />
                </a>
                <a
                  href="#"
                  className="cs_center cs_radius_100"
                  aria-label="Twitter"
                >
                  <Icon icon="fa6-brands:x-twitter" />
                </a>
                <a
                  href="#"
                  className="cs_center cs_radius_100"
                  aria-label="Facebook"
                >
                  <Icon icon="fa6-brands:facebook-f" />
                </a>
                <a
                  href="#"
                  className="cs_center cs_radius_100"
                  aria-label="Google"
                >
                  <Icon icon="fa6-brands:google" />
                </a>
              </div>
              <p className="mb-0">
                Don’t have an account?{" "}
                <Link href="/login" className="cs_accent_color">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="cs_register_shape_1 cs_purple_bg cs_radius_100 position-absolute" />
        <div className="cs_register_shape_2 cs_accent_bg cs_radius_100 position-absolute" />
      </div>
      <div className="cs_height_140 cs_height_lg_80" />
    </section>
  );
};

export default Register;
