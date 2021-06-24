import DBConnect from '../../middleware/DBConnect';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import answerModel from '../../../models/answer';
import questionModel from '../../../models/question';

const postAnswer = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { questionID, article } = req.body;

		const newAnswer = new answerModel({
			question: questionID,
			article: article,
		});

		await newAnswer.save();

		//UPDATE THE NUMBER OF ANSWERS
		await questionModel.findOneAndUpdate(
			{ _id: questionID },
			{ $inc: { answers: 1 } }
		);

		res.status(200).send({ newAnswer });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(postAnswer);
