import "../styles/globals.css";
// THE NOTIFICATION PACKAGE SETTINGS
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Layout from "../components/Layout.jsx";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
