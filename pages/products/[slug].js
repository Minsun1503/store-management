import Head from "next/head";
import dbConnect from "../../lib/db";
import Product from "../../models/Product";

export default function ProductPage({ product }) {
  if (!product) return <div>Product not found</div>;

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Shop Thể Thao";

  return (
    <>
      <Head>
        <title>{product.name} — {siteName}</title>
        <meta name="description" content={product.description.slice(0, 150)} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description.slice(0, 150)} />
        <meta property="og:image" content={product.image} />
      </Head>

      <main className="container product-page">
        <div className="product-media">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p className="price">{product.price.toLocaleString()} VND</p>
          <p>{product.description}</p>
          <p>Kho: {product.stock}</p>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  await dbConnect();
  const product = await Product.findOne({ slug: params.slug }).lean();
  if (!product) return { props: { product: null } };

  product._id = product._id.toString();
  return { props: { product } };
}
