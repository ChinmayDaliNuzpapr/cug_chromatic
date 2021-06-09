import DBConnect from '../../middleware/DBConnect';
import nodemailer from 'nodemailer';
import validator from 'email-validator';
import validationModel from '../../../models/validationCode';
import randomstring from 'randomstring';
import Email from 'email-templates';

const Register = async (req, res) => {
	if ((req.method = 'POST')) {
		try {
			const { Group_name, email } = req.body;

			if (!validator.validate(email)) throw 'Please enter a valid email';

			//making previous active link inactive
			await validationModel.updateMany(
				{ email },
				{
					active: false,
				}
			);

			const code = randomstring.generate();

			const validationCode = new validationModel({
				Group_name,
				email,
				code,
			});

			await validationCode.save();
			/*
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
			}*/

			const url = `http://localhost:3000/api/auth/confirm/${code}`;

			const transporter = nodemailer.createTransport({
				service: 'gmail',
				auth: {
					user: process.env.email,
					pass: process.env.password,
				},
			});

			const Myemail = new Email({
				transport: transporter,
				send: true,
				preview: false,
			});

			await Myemail.send({
				template: 'hello',
				message: {
					from: process.env.email,
					to: email,
				},
				locals: {
					url: url,
				},
			});

			/*const mailOptions = {
				from: process.env.email,
				to: email,
				subject: 'Confirm your email address to start communicating',
				text: url,
			};

			await transporter.sendMail(mailOptions);*/
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
