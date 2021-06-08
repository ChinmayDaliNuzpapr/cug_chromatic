import userModel from '../../../models/user';
import DBConnect from '../../middleware/DBConnect';
import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import validator from 'email-validator';

const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			Group_name: user.Group_name,
			alphaNumericId: user.alphaNumericId,
		},
		process.env.secretKey,
		{ expiresIn: '2h' }
	);
};

const Register = async (req, res) => {
	if ((req.method = 'POST')) {
		try {
			const { Group_name, email } = req.body;

			if (!validator.validate(email)) throw 'Please enter a valid email';

			let user, token;

			//checking if a token has already been sent
			const previousToken = await userModel.findOne({
				email: email,
				token: { $ne: '' },
			});

			if (previousToken) throw 'Validation email has been sent already';

			const UserAlreadyRegistered = await userModel.findOne({ email: email });

			if (UserAlreadyRegistered) {
				user = {
					_id: UserAlreadyRegistered._id,
					Group_name: UserAlreadyRegistered.Group_name,
					alphaNumericId: UserAlreadyRegistered.alphaNumericId,
				};

				token = generateToken(user);
				user.email = email;
			} else {
				//register the user
				user = new userModel({
					Group_name: Group_name,
				});

				await user.save();
				token = generateToken(user);

				//saving email after generating the token
				user.email = email;
				await user.save();
			}

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
				subject: 'Confirm your email address to start communicating',
				text: url,
			};

			await transporter.sendMail(mailOptions);

			//adding the token in the user's database after mail has been sent

			await userModel.updateOne(
				{ email: user.email },
				{
					$set: {
						token: token,
					},
				}
			);

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
