"use client";
import AOS from "aos";
import { useEffect } from "react";

const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return null;
};

export default AOSInit;
