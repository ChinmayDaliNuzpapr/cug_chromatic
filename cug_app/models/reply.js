import mongoose from 'mongoose';
const ModelName = 'replyModel';
import articleSchema from './article';

const replySchema = new mongoose.Schema({
	comment: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'comment', //name of the collection
	},
	article: articleSchema,
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, replySchema, 'reply');
