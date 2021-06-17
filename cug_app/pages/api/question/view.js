import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import answerModel from '../../../models/answer';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const viewQuestion = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { questionID } = req.body;

		const question = await questionModel.findOneAndUpdate(
			{
				_id: questionID,
			},
			{
				$inc: { 'view.count': 1 },
			},
			{
				new: true,
			}
		);

		//get all answers and comments

		const answer = await answerModel.find({ question: question._id });

		return res.status(200).send({ question, answer });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(viewQuestion);
