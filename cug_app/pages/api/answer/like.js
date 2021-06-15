import DBConnect from '../../middleware/DBConnect';
import answerModel from '../../../models/answer';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const likeQuestion = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { answerID } = req.body;

		const answer = await answerModel.findOneAndUpdate(
			{
				_id: answerID,
			},
			{
				$inc: { 'article.like': 1 },
			},
			{ new: true }
		);
		return res.status(200).send({ answer });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(likeQuestion);
