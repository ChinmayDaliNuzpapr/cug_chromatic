import jwt from 'jsonwebtoken';
import userModel from '../../../../models/user';

const confirmation = async (req, res) => {
	try {
		const { token } = req.query;

		const user = jwt.verify(token, process.env.secretKey);
		if (!user) throw 'INVALID TOKEN';
		await userModel.updateOne(
			{ Group_name: user.Group_name },
			{
				$set: {
					status: true,
				},
			}
		);
		res.send(token);
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err });
	}
};

export default confirmation;
