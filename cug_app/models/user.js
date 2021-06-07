import mongoose from 'mongoose';
const ModelName = 'userModel';

const userSchema = new mongoose.Schema({
	username: { type: String },
	Group_name: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	alpha_numeric_id: {
		type: String,
		unique: true,
	},
	status: {
		type: Boolean,
		default: false,
	},

	password: { type: String },
});

//don't use arrow function
/*userSchema.pre('save', async function (next) {
	try {
		const salt = await bcrypt.genSalt(10);
		const hash = await bcrypt.hash(this.password, salt);
		this.password = hash;
		next();
	} catch (err) {
		next(err);
	}
});*/

userSchema.methods.CheckPassword = async function (p) {
	try {
		return await bcrypt.compare(p, this.password);
	} catch (err) {
		throw new Error(err);
	}
};

export default mongoose.models[ModelName] ||
	mongoose.model(ModelName, userSchema, 'users');
