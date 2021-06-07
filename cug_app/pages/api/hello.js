// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import DBConnect from '../middleware/DBConnect';
const Hello = (req, res) => {
	res.status(200).json({ name: 'John Doe' });
};

export default DBConnect(Hello);
