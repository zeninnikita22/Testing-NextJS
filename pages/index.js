import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage || Cool</title>
      </Head>
      <div>This is homepage</div>
      <Link href="./creators/mario">Mario</Link>
      <Link href="./creators/luigi">Luigi</Link>
    </>
  );
}
