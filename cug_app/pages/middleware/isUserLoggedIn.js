import jwt from 'jsonwebtoken';

const isUserLoggedIn = (req, res) => {
	return new Promise((resolve, reject) => {
		const token = req.headers.authorization.split('Bearer ')[1];

		if (token) {
			const user = jwt.verify(token, process.env.secretKey);
			req.user = user;
			resolve(req);
		} else reject(process.env.TOKEN_NOT_FOUND);
	});
	/*const token = req.headers.authorization;
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
	}*/
};

export default isUserLoggedIn;
