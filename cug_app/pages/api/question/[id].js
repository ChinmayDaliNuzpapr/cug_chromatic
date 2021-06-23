/*isUserLoggedIn middleware is not being used here, as it throws error when token isn't there, but someone
without token can access the "global" view question*/

//type of request - GET
//data to recieve here from frontend - questionID in URL

import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import answerModel from '../../../models/answer';
import groupModel from '../../../models/group';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

//function to find random 5 similar questions

const findSimilarQuestions = async (question) => {
	const SQNumber = 5; //SQ - NUMBER OF SIMILAR QUESTION

	let similarQuestions = [];

	//SEARCH 1 - FIND QUESTIONS HAVING THE SAME TAG
	const similarQuestions_TAG = await questionModel.aggregate([
		{
			$match: {
				$and: [
					{ _id: { $ne: question._id } },
					{ category: question.category },
					{ group: question.group },
					{ 'article.scope': question.article.scope },
					{
						tags: {
							$in: question.tags,
						},
					},
				],
			},
		},
		{ $sample: { size: SQNumber } },
	]);

	similarQuestions = similarQuestions.concat(similarQuestions_TAG);

	let remainingQuestions = SQNumber - similarQuestions.length;

	//SEARCH 2 - FIND QUESTIONS BELONGING TO SAME CATEGORY
	if (similarQuestions.length <= 5) {
		const similarQuestions_CATEGORY = await questionModel.aggregate([
			{
				$match: {
					$and: [
						{ _id: { $ne: question._id } },
						{ category: question.category },
						{ group: question.group },
						{ 'article.scope': question.article.scope },
					],
				},
			},
			{ $sample: { size: remainingQuestions } },
		]);

		similarQuestions = similarQuestions.concat(similarQuestions_CATEGORY);
	}

	remainingQuestions = SQNumber - similarQuestions.length;

	//SEARCH 3 - FIND QUESTIONS BELONGING TO SAME GROUP
	if (similarQuestions.length <= 5) {
		const similarQuestions_GROUP = await questionModel.aggregate([
			{
				$match: {
					$and: [
						{ _id: { $ne: question._id } },
						{ group: question.group },
						{ 'article.scope': question.article.scope },
					],
				},
			},
			{ $sample: { size: remainingQuestions } },
		]);

		similarQuestions = similarQuestions.concat(similarQuestions_GROUP);
	}
	return similarQuestions;
};

const viewQuestion = async (req, res) => {
	if (req.method == 'GET') {
		try {
			//Assuming a global user initially
			req.user = {
				Group_name: 'global',
			};

			if (req.headers.authorization) {
				const token = req.headers.authorization.split('Bearer ')[1];
				const user = jwt.verify(token, process.env.secretKey);
				req.user = user;
			}

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

			const group =
				question.group && (await groupModel.findOne({ _id: question.group }));

			if (
				req.user.Group_name == group.Group_name ||
				question.article.scope == 'global'
			) {
				question.view.count = question.view.count + 1;

				question = await question.save();

				answer = await answerModel.find({ question: question._id });

				//SIMILAR QUESTION
				const similarQuestions = await findSimilarQuestions(question);

				return res.status(200).send({ question, answer, similarQuestions });
			} else {
				throw process.env.UNAUTHORIZED_ACCESS;
			}
		} catch (err) {
			console.log(err);
			return res.status(500).send({ error: err });
		}
	} else {
		return res.status(500).send(process.env.UNSUPPORTED_METHOD);
	}
};

export default DBConnect(viewQuestion);
