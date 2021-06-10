import mongoose from 'mongoose';
const ModelName = 'groupModel';

const groupSchema = new mongoose.Schema({
	name: {
		type: String,
	},
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, groupSchema, 'group');
