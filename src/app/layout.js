import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import BackToTop from "./helper/BackToTop";
import './sass/style.scss';
import AOSInit from "./ui/AosInit/AosInit";

export const metadata = {
  title: "Gosaas - SaaS & Software Startup NextJS Template",
  description: "Generated by create next app",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="ReactSet" />
        <link rel="icon" href="/images/favicon.png" sizes="any" />
      </head>
      <body className="">
        <AOSInit />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <BackToTop />
      </body>
    </html>
  );
}
