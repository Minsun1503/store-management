import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <article className="card">
      <Link href={`/products/${product.slug}`}>
        <a>
          <img src={product.image} alt={product.name} className="thumb" />
          <h3>{product.name}</h3>
          <p className="price">{product.price.toLocaleString()} VND</p>
        </a>
      </Link>
    </article>
  );
}
