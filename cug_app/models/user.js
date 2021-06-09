import mongoose, { Mongoose } from 'mongoose';
const ModelName = 'userModel';

const TokenSchema = new mongoose.Schema({
	value: {
		type: String,
		default: '',
	},
	createdAt: { type: Date, default: Date.now, expireAfterSeconds: 100 },
});

const userSchema = new mongoose.Schema({
	Group_name: {
		type: String,
	},
	email: {
		type: String,
		unique: true,
	},
	alphaNumericId: {
		type: String,
		default: '',
	},
	status: {
		type: Boolean,
		default: false,
	},
	token: {
		type: String,
		default: '',
		expireAfterSeconds: 30,
	},
});

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, userSchema, 'users');
