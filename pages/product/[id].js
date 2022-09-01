import React, { useContext } from "react";
import Router, { useRouter } from "next/router";
import Layout from "../../components/layout";
import data from "../../utils/data";
import { Store } from "../../utils/Store";
import Link from "next/link";
import Image from "next/image";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);

  const { query } = useRouter();
  const { id } = query;
  const product = data.products.find((x) => x.id === id);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if (product.countInStock < quantity) {
      alert("Sorry! This product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    // Do I want the user to be redirected to cart after adding item?
    // Router.push("/cart");
  };

  return (
    <Layout title={product.name}>
      <h1>{product.name}</h1>
      <div className="py-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Processing Method: {product.process}</li>
            <li>Variety: {product.variety}</li>
            <li>Elevation: {product.elevation}</li>
            <li>Tasting Notes: {product.tasting_notes}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex-col">
              <div className="flex justify-between">
                <h1>Price:</h1>
                <h1>${product.price}</h1>
              </div>
              <div className="flex justify-between">
                <h1>Product Status:</h1>
                <h1>{product.countInStock > 0 ? "In stock" : "Unavailable"}</h1>
              </div>
              <button
                className="primary-button w-full"
                onClick={addToCartHandler}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
