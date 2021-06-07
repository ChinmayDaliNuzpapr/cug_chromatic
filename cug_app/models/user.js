import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
	Group_name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		default: 'pending',
	},
	secretCode: {
		type: String,
		default: '',
		required: true,
	},
});

let userModel = mongoose.model('User', userSchema);

export default userModel;
