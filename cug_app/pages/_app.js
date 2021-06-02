import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../components/Nav.js";
import HomePage from "../components/HomePage";
import Footer from "../components/Footer_component/Footer";
// import
// import
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
