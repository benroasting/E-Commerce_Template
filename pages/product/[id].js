import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import data from "../../utils/data";
import Link from "next/link";
import Image from "next/image";

function ProductScreen() {
  const { query } = useRouter();
  const { id } = query;
  const product = data.products.find((x) => x.id === id);
  if (!product) {
    return <div>Product Not Found</div>;
  }

  return (
    <Layout title={product.farm}>
      <h1>
        {product.origin} {product.farm}
      </h1>
      <div className="py-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.farm}
            width={640}
            height={640}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-lg">
                {product.origin} {product.farm}
              </h1>
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
              <button className="primary-button w-full">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ProductScreen;
