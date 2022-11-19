import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import MainHeader from "../components/mainHeader/MainHeader";
import Menu from "../components/menu/Menu";
import Projects from "../components/projects/Projects";
import Testimony from "../components/testimony/Testimony";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Menu />
      <MainHeader />
      <About />
      <Projects />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
}
