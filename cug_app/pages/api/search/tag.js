import DBConnect from '../../middleware/DBConnect';
import questionModel from '../../../models/question';
import isUserLoggedIn from '../../middleware/isUserLoggedIn';

const tagBasedSearch = async (req, res) => {
	try {
		req = await isUserLoggedIn(req, res);

		const { tag } = req.body;

		const question = await questionModel.find({
			tags: { $elemMatch: { $eq: tag } },
		});

		return res.status(200).send({ question });

		//FOR MULTIPLE TAGS
		/*const question = questionModel.find({
            tags: {
                $in : tags_list
            }
        });*/
	} catch (err) {
		console.log(err);
		return res.status(500).send({ error: err });
	}
};

export default DBConnect(tagBasedSearch);
