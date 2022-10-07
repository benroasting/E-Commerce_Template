import Layout from "../components/layout";
import ProductItem from "../components/ProductItem";
import db from "../utils/db";
import Product from "../models/Product";

export default function Home({ products }) {
  return (
    <Layout title="Home Page">
      <div className="grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductItem product={product} key={product.id}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find().lean();
  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
