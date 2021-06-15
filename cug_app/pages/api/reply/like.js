import DBConnect from '../../middleware/DBConnect';
import replyModel from '../../../models/reply';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const likeReply = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { replyID } = req.body;

		const reply = await replyModel.findOneAndUpdate(
			{
				_id: replyID,
			},
			{
				$inc: { 'article.like': 1 },
			},
			{ new: true }
		);
		return res.status(200).send({ reply });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(likeReply);
