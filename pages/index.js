import Head from "next/head";
import dbConnect from "../lib/db";
import Product from "../models/Product";
import ProductCard from "../components/ProductCard";

export default function Home({ products }) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Shop Thể Thao";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  return (
    <>
      <Head>
        <title>{siteName} - Cửa hàng đồ thể thao</title>
        <meta name="description" content="Cửa hàng bán đồ thể thao: giày, quần áo, phụ kiện. Giao hàng nhanh." />
        <meta property="og:title" content={`${siteName} - Đồ thể thao`} />
        <meta property="og:url" content={siteUrl} />
      </Head>

      <header className="header">
        <div className="container">
          <h1>{siteName}</h1>
        </div>
      </header>

      <main className="container">
        <section className="grid">
          {products.map((p) => (
            <ProductCard key={p._id} product={p} />
          ))}
        </section>
      </main>

      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} {siteName}</div>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  const docs = await Product.find({}).sort({ createdAt: -1 }).lean();
  const products = docs.map((d) => {
    d._id = d._id.toString();
    return d;
  });

  return { props: { products } };
}
