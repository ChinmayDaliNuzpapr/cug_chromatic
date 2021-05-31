import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Footer from "../stories/Home/Screen1_Footer/Footer";
export default function Home() {
  return (
    <div>
      <p>Welcome to next</p>
      <Footer />
    </div>
  );
}
