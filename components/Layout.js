import React from "react";
import Head from "next/head";
import { Navbar, Footer } from "./index";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Head>
        <title>Galilea Komputer</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
