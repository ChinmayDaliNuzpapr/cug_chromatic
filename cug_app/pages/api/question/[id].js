import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import answerModel from '../../../models/answer';
import groupModel from '../../../models/group';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import mongoose from 'mongoose';
const viewQuestion = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const ObjectID = mongoose.Types.ObjectId;
		const { id } = req.query;
		let answer = null;
		//Argument passed to ObjectID be a single String of 12 bytes or a string of 24 hex characters

		if (!(id.length == 12 || id.length == 24)) throw process.env.INVALID_URL;

		let question = await questionModel.findOne({
			_id: ObjectID(id),
		});

		if (!question) throw process.env.INVALID_URL;

		//Checking whether the user can see the question or not
		const group = await groupModel.findOne({ _id: question.group });

		if (
			req.user.Group_name == group.Group_name ||
			question.article.scope == 'global'
		) {
			question.view.count = question.view.count + 1;

			question = await question.save();

			answer = await answerModel.find({ question: question._id });

			return res.status(200).send({ question, answer });
		} else {
			throw process.env.UNAUTHORIZED_ACCESS;
		}

		/*const question = await questionModel.findOneAndUpdate(
			{
				_id: ObjectID(id),
			},
			{
				$inc: { 'view.count': 1 },
			},
			{
				new: true,
			}
		);*/

		//get all answers and comments
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(viewQuestion);
