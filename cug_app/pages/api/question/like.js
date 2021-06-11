import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const likeQuestion = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { qid } = req.body;

		const question = await questionModel.findOneAndUpdate(
			{
				_id: qid,
			},
			{
				$inc: { 'article.like': 1 },
			},
			{ new: true }
		);
		return res.status(200).send({ question });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(likeQuestion);
