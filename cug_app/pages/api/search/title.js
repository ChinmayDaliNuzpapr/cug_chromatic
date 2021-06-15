import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const titleBasedSearch = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { title } = req.body;

		const question = await questionModel.find({
			'article.title': { $eq: title },
		});

		return res.status(200).send({ question });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(titleBasedSearch);
