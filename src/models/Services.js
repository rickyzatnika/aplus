import mongoose from "mongoose";

const ServicesSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      min: 6,
    },
    category: {
      type: String,
      required: true,
      enum: ["Event", "Production", "Branding"],
    },
    slug: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};
const Services = mongoose.model("Services", ServicesSchema);
export default Services;
