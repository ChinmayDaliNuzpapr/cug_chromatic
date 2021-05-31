import "../styles/globals.css";
// import "tailwindcss/tailwind.css";
import Navbar from "../components/Nav.js";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
