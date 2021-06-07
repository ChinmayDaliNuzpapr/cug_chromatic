import userModel from '../../../models/user';
import DBConnect from '../../middleware/DBConnect';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

const generateToken = (user) => {
	return jwt.sign(
		{
			id: user._id,
			Group_name: user.Group_name,
			email: user.email,
		},
		process.env.secretKey,
		{ expiresIn: '2h' }
	);
};

const Register = async (req, res) => {
	if ((req.method = 'POST')) {
		try {
			const { Group_name, email } = req.body;

			const emailAlreadyExist = await userModel.findOne({ email });

			if (emailAlreadyExist) throw 'Email already exist';

			//GENERATING alphanumeric id
			const id = Math.random().toString(36).substr(2);

			const user = new userModel({
				Group_name: Group_name,
				email: email,
				alpha_numeric_id: id,
			});

			await user.save();
			const token = generateToken(user);

			const url = `http://localhost:3000/api/auth/confirm/${token}`;

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.email,
					pass: process.env.password,
				},
			});

			const mailOptions = {
				from: process.env.email,
				to: email,
				subject:
					'EMAIL CONFIRMATION - Please click on this link to confirm your email',
				text: url,
			};

			const info = await transporter.sendMail(mailOptions);
			return res.status(200).send({ message: 'EMAIL CONFIRMATION SENT' });
		} catch (err) {
			console.log(err);
			return res.status(500).send({ error: err });
		}
	} else {
		res.status(422).send({ error: 'UNSUPPORTED METHOD' });
	}
};

export default DBConnect(Register);
