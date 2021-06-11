import jwt from 'jsonwebtoken';
import userModel from '../../../../models/user';
import DBConnect from '../../../middleware/DBConnect';
import validationModel from '../../../../models/validationCode';
import randomstring from 'randomstring';

const generateToken = (user) => {
	return jwt.sign(
		{
			_id: user._id,
			Group_name: user.Group_name,
			alphaNumericId: user.alphaNumericId,
		},
		process.env.secretKey,
		{ expiresIn: '4h' }
	);
};

const confirmation = async (req, res) => {
	try {
		const { code } = req.query;

		const validationCode = await validationModel.findOne({
			$and: [{ code: code }, { active: true }],
		});

		console.log(validationCode);

		if (!validationCode) throw process.env.INVALID_ACTIVATION_LINK;

		let token, user;

		const UserAlreadyRegistered = await userModel.findOne({
			email: validationCode.email,
		});

		if (UserAlreadyRegistered) {
			user = {
				_id: UserAlreadyRegistered._id,
				Group_name: UserAlreadyRegistered.Group_name,
				alphaNumericId: UserAlreadyRegistered.alphaNumericId,
			};

			token = generateToken(user);
			console.log('NOT FIRST TIME', token);

			//making validation code inactive
			validationCode.active = false;
			validationCode.save();
			return res.redirect('/', {
				token: token,
				message: process.env.LOGGED_IN_SUCCESSFULLY,
			});
		} else {
			const id = randomstring.generate({
				length: 12,
				charset: 'alphanumeric',
			});

			//register the user
			user = new userModel({
				Group_name: validationCode.Group_name,
				alphaNumericId: id,
			});

			await user.save();
			token = generateToken(user);
			console.log('FIRST TIME', token);

			//saving email after generating the token
			user.email = validationCode.email;
			await user.save();

			//making validation code inactive
			validationCode.active = false;
			validationCode.save();

			return res.redirect('/', {
				message: process.env.LOGGED_IN_SUCCESSFULLY,
				alphaNumericId: id,
				token: token,
			});
		}

		/*(const user = jwt.verify(token, process.env.secretKey);

		if (!user) throw 'INVALID TOKEN';

		//restricting the previous activation link
		const previousToken = await userModel.findOne({ token: token });

		if (!previousToken || previousToken.token !== token)
			throw 'Please use the latest activation link';*/

		/*if (user.alphaNumericId) {
			await userModel.updateOne(
				{ Group_name: user.Group_name },
				{
					$set: {
						status: true,
						token: '',
					},
				}
			);

			return res.redirect('/', { token: token });
		} else {
			//GENERATING alphanumeric id only for the first time

			//possible error - handling same id

			const id = Math.random().toString(36).substr(2);
			await userModel.updateOne(
				{ Group_name: user.Group_name },
				{
					$set: {
						status: true,
						alphaNumericId: id,
						token: '',
					},
				}
			);
			return res.redirect('/', {
				welcome: 'Hey, we welcome you on our platform',
				token: token,
			});
		}*/
	} catch (err) {
		console.log(err);
		res.redirect('/404', { error: err });
	}
};

export default DBConnect(confirmation);
