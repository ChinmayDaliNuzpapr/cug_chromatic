import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
	title: {
		type: String,
	},
	author: {
		type: String,
	},
	like: {
		type: String,
	},
	content: {
		type: String,
	},
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
});

export default articleSchema;
