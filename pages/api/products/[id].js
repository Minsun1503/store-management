import dbConnect from "../../../lib/db";
import Product from "../../../models/Product";
import mongoose from "mongoose";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  if (req.method === "GET") {
    const product = await Product.findById(id).lean();
    if (!product) return res.status(404).json({ error: "Not found" });
    return res.status(200).json(product);
  }

  const adminPass = req.headers["x-admin-password"];
  if (adminPass !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method === "PUT") {
    try {
      const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json(updated);
    } catch (err) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  if (req.method === "DELETE") {
    try {
      await Product.findByIdAndDelete(id);
      return res.status(200).json({ success: true });
    } catch (err) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
