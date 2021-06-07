import jwt from 'jsonwebtoken';

const setpwd = async (req, res) => {
	if ((req.method = 'POST')) {
		try {
			const salt = await bcrypt.genSalt(10);
			const hash = await bcrypt.hash(this.password, salt);
			this.password = hash;
		}
	}
};
