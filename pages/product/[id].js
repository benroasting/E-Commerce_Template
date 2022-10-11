import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Layout from "../../components/layout";
import { Store } from "../../utils/Store";
import db from "../../utils/db";
import Product from "../../models/Product";

export default function ProductScreen(props) {
  const { product } = props;
  const { state, dispatch } = useContext(Store);
  const router = useRouter();
  if (!product) {
    return <Layout title="Product Not Found">Product Not Found</Layout>;
  }

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.id === product.id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock < quantity) {
      return toast.error("Sorry. Product is out of stock");
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

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;

  await db.connect();
  const product = await Product.findOne({ id }).lean();
  await db.disconnect();
  return {
    props: {
      product: product ? db.convertDocToObj(product) : null,
    },
  };
}
