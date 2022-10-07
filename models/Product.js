import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    id: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    origin: { type: String, required: true },
    farm: { type: String, required: true },
    variety: { type: String, required: false },
    process: { type: String, required: false },
    price: { type: Number, required: true },
    elevation: { type: Number, required: false },
    tasting_notes: { type: String, required: true },
    countInStock: { type: Number, required: true, default: 0 },
  },
  {
    timestamps: true,
  }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
