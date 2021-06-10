import mongoose from 'mongoose';
const ModelName = 'categoryModel';

const categorySchema = new mongoose.Schema({
	categoryName: {
		type: String,
	},
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, categorySchema, 'category');
