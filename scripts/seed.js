const mongoose = require("mongoose");
const Product = require("../models/Product").default || require("../models/Product");
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("MONGODB_URI missing");
  process.exit(1);
}

async function run() {
  await mongoose.connect(MONGODB_URI, { dbName: "sports-store" });
  const count = await Product.countDocuments();
  if (count > 0) {
    console.log("Already seeded");
    process.exit(0);
  }

  const items = [
    { name: "Giày chạy bộ AirRun", slug: "giay-airrun", price: 1500000, description: "Giày nhẹ, êm cho chạy đường dài.", image: "/images/airrun.jpg", stock: 20 },
    { name: "Áo thun thể thao DryFit", slug: "ao-dryfit", price: 250000, description: "Thoáng mát, mau khô.", image: "/images/dryfit.jpg", stock: 50 }
  ];

  await Product.insertMany(items);
  console.log("Seed done");
  process.exit(0);
}

run().catch((e)=>{console.error(e); process.exit(1);});
