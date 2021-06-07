import userModel from '../../../models/user';
import DBConnect from '../../middleware/DBConnect';

const generateToken = (user) => {
	return jwt.sign(
		{
			id: user._id,
			Group_name: user.Group_name,
			email: user.email,
		},
		secretKey,
		{ expiresIn: '2h' }
	);
};

const Register = async (req, res) => {
	if ((req.method = 'POST')) {
		try {
			const { name, email, password } = req.body;

			let emailAlreadyExist = await userModel.findOne({ email });

			if (emailAlreadyExist)
				return res.status(403).send({ error: 'Email already exist' });

			let userNameAlreadyExist = await userModel.findOne({ name });

			if (userNameAlreadyExist)
				return res.status(403).send({ error: 'User already exist' });

			let user = new userModel({
				name,
				email,
				password,
			});

			await user.save();

			//generating token after saving
			const token = generateToken(user);
			return res.status(200).send({ token });
		} catch (err) {
			return res.status(500).send(err);
		}
	} else {
		res.status(422).send('UNSUPPORTED METHOD');
	}
};

export default DBConnect(Register);
