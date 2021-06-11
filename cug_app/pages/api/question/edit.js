import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import categoryModel from '../../../models/category';
import groupModel from '../../../models/group';

const EditQuestion = async (req, res) => {
	if ((req.method = 'PUT')) {
		try {
			//checking whether user is logged in or not
			req = await isUserLoggedIn(req, res);

			const { id, article, tags } = req.body;
			const updatedQuestion = await questionModel.findOneAndUpdate(
				{ _id: id },
				{
					$set: {
						article,
						tags,
					},
				},
				{
					new: true,
				}
			);

			return res.status(200).send({
				updatedQuestion: updatedQuestion,
				message: process.env.QUESTION_ADDED,
			});
		} catch (err) {
			console.log(err);
			return res.status(500).send({ error: err });
		}
	}
};

export default DBConnect(EditQuestion);
