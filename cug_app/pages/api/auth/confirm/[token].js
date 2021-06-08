import jwt from 'jsonwebtoken';
import userModel from '../../../../models/user';

const confirmation = async (req, res) => {
	try {
		const { token } = req.query;

		const user = jwt.verify(token, process.env.secretKey);

		if (!user) throw 'INVALID TOKEN';

		//restricting the previous activation link
		const previousToken = await userModel.findOne({ token: token });

		if (!previousToken || previousToken.token !== token)
			throw 'Please use the latest activation link';

		if (user.alphaNumericId) {
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
		}
	} catch (err) {
		console.log(err);
		res.redirect('/404', { error: err });
	}
};

export default confirmation;
