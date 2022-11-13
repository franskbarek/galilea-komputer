import React from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

export default function Product({ product: { image, name, slug, price } }) {
  function formatMoney(number) {
    return number.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
  }
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image && image[0])} width={250} height={250} className="product-image" />
          <p className="product-name">{name.slice(0, 30)}</p>
          <p className="product-price">{formatMoney(price)}</p>
        </div>
      </Link>
    </div>
  );
}
