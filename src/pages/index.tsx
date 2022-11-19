import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import MainHeader from "../components/mainHeader/MainHeader";
import Menu from "../components/menu/Menu";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Menu />
      <MainHeader />
    </>
  );
}
