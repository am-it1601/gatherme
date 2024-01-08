import mongoose, { model, models } from "mongoose";

export interface ICategory extends mongoose.Document {
  _id: string;
  name: string;
}
const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Category = models.Category || model("category", CategorySchema);

export default Category;
