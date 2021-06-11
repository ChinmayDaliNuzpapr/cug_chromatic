import mongoose from 'mongoose';
const ModelName = 'groupModel';

const groupSchema = new mongoose.Schema({
	groupName: {
		type: String,
	},
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, groupSchema, 'group');
