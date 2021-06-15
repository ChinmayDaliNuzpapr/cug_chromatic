import questionModel from '../../../models/question';
import categoryModel from '../../../models/category';
import groupModel from '../../../models/group';
import DBConnect from '../../middleware/DBConnect';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const Trending = async (req, res) => {
	try {
	} catch (err) {
		res.status(500).send({ error: err });
	}
};

export default DBConnect(Trending);
