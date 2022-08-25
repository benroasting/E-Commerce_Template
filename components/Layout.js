import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>ECommerce Template</title>
        <meta name="description" content="ECommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-20 items-center px-4 justify-between bg-slate-100">
            <Link href="/">
              <a className="text-lg">Company Name</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-5">CART</a>
              </Link>
              <Link href="/login">
                <a className="p-5">LOGIN</a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4">{children}</main>
        <footer className="flex h-20 justify-center items-center">
          Footer
        </footer>
      </div>
    </>
  );
}
