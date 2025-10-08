import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, default: "" },
  category: { type: String, default: "General" },
  price: { type: Number, required: true, default: 0 },
  image: { type: String, default: "/placeholder.png" },
  stock: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
