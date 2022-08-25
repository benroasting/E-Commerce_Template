/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>
        <a>
          <img
            src={product.image}
            alt={product.id}
            className="rounded shadow"
          />
        </a>
      </Link>

      <div className="flex flex-col items-center text-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <a>
            <h3 className="text-md">
              {product.origin} {product.farm}
            </h3>
          </a>
        </Link>
        <p>Processing Method: {product.process}</p>
        <p>Tasting Notes: {product.tasting_notes}</p>
        <p className="pb-2">${product.price}</p>
        <button className="primary-button" type="button">
          Add to cart
        </button>
      </div>
    </div>
  );
}
