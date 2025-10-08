import dbConnect from "../../../lib/db";
import Product from "../../../models/Product";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find({}).sort({ createdAt: -1 }).lean();
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const adminPass = req.headers["x-admin-password"] || process.env.ADMIN_PASSWORD;
    if (adminPass !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { name, slug, description, price, image, stock, category } = req.body;
    if (!name || !slug || price == null) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const exists = await Product.findOne({ slug });
      if (exists) {
        return res.status(400).json({ error: "Slug already exists" });
      }
      const product = new Product({ name, slug, description, price, image, stock, category });
      await product.save();
      return res.status(201).json(product);
    } catch (err) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
