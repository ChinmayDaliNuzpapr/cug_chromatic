import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import categoryModel from '../../../models/category';
import groupModel from '../../../models/group';
import answerModel from '../../../models/answer';

const DeleteQuestion = async (req, res) => {
	if ((req.method = 'DELETE')) {
		try {
			//checking whether user is logged in or not
			req = await isUserLoggedIn(req, res);

			const { id } = req.body;

			await questionModel.deleteOne({ _id: id });

			//deleting all the associated answers

			await answerModel.deleteMany({ question: id });

			//deleting all the reply to answers

			return res.status(200).send({ message: process.env.QUESTION_ADDED });
		} catch (err) {
			console.log(err);
			return res.status(500).send({ error: err });
		}
	}
};

export default DBConnect(DeleteQuestion);
