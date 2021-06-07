// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';
import userModel from '../../models/user';
import DBConnect from '../middleware/DBConnect';
const Hello = async (req, res) => {
	try {
		return res.status(200).send({ message: 'EMAIL CONFIRMATION SENT' });
	} catch (error) {
		console.log(error);
		res.send(error);
	}
};

export default DBConnect(Hello);
