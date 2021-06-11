import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const viewQuestion = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { qid } = req.body;

		const question = await questionModel.findOneAndUpdate(
			{
				_id: qid,
			},
			{
				$inc: { 'article.view': 1 },
			},
			{
				new: true,
			}
		);

		console.log(question);
		return res.status(200).send({ question });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(viewQuestion);
