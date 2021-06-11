import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';
import categoryModel from '../../../models/category';
import groupModel from '../../../models/group';

const PostQuestion = async (req, res) => {
	if ((req.method = 'POST')) {
		try {
			//creating dummy froup "gmail" & dummy category "category 1"

			/*const d = new groupModel({
				groupName: 'gmail',
			});
			d.save();
			const c = new categoryModel({
				group: d._id,
				categoryName: 'Catgory 1',
			});
			c.save();*/

			//checking whether user is logged in or not
			req = await isUserLoggedIn(req, res);

			//console.log(req);
			const { category, article, tags } = req.body;

			const Currentcategory = await categoryModel.findOne({
				categoryName: category,
			});

			const newQuestion = new questionModel({
				category: Currentcategory._id,
				article,
				tags,
			});

			await newQuestion.save();

			return res
				.status(200)
				.send({ newQuestion, message: process.env.QUESTION_ADDED });
		} catch (err) {
			console.log(err);
			return res.status(500).send({ error: err });
		}
	}
};

export default DBConnect(PostQuestion);
