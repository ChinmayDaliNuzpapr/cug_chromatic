import jwt from 'jsonwebtoken';

const isRequestValid = (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		try {
			const user = jwt.verify(token, process.env.secretKey);
			req.user = user;
			return next();
		} catch (error) {
			return res.status(403).send({ error: 'Invalid Token' });
		}
	} else {
		return res.status(403).send({ error: 'No authorization header present' });
	}
};

export default isRequestValid;
