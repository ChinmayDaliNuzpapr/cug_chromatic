import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const Search = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { tag, title } = req.body;

		const searchResult = await questionModel.find({
			$text: { $search: `${tag} ${title}` },
		});

		res.status(200).send({ searchResult });
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: err });
	}
};

export default DBConnect(Search);
