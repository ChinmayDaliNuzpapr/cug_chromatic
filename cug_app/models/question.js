import mongoose from 'mongoose';
const ModelName = 'questionModel';
import articleSchema from './article';

const questionSchema = new mongoose.Schema({
	group: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'group',
	},
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'category', //name of the collection
	},
	article: articleSchema,
	view: {
		type: Number,
		default: 0,
	},
	tags: [String],
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, questionSchema, 'question');
