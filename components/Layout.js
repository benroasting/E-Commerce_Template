import React, { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { Store } from "../utils/Store";

//main page layout

export default function Layout({ title, children }) {
  const { state } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

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
                <a className="p-5">
                  CART
                  {cartItemsCount > 0 && (
                    <span className="ml-1 rounded-full bg-red-400 px-2 py-1 text-xs font-bold text-white">
                      {cartItemsCount}
                    </span>
                  )}
                </a>
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
