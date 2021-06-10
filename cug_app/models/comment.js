import mongoose from 'mongoose';
const ModelName = 'commentModel';
import articleSchema from './article';

const commentSchema = new mongoose.Schema({
	question: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'question', //name of the collection
	},
	article: articleSchema,
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, commentSchema, 'comment');
