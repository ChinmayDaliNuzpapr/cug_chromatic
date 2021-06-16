module.exports = {
	env: {
		url:
			'mongodb+srv://bhupesh:bhupesh@cluster0.axtn8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
		secretKey: 'mysecretkey',
		email: 'testmail67590@gmail.com',
		password: '/mK&F,Z2xG',

		//success messages

		EMAIL_CONFIRMATION: ' We have sent you email confirmation to you.',
		LOGGED_IN_SUCCESSFULLY: 'Email validation is successful, welcome to CUG',
		QUESTION_ADDED: 'Your question has been added successfuly',
		ANSWER_DELETED: 'Your answer has been deleted',

		//all errors will be put here

		INVALID_EMAIL_ERROR: 'Please enter a valid email.',
		INVALID_ACTIVATION_LINK: 'Please use a valid activation link',
		TOKEN_NOT_FOUND: 'No authorization header (token) present',
		OWNERSHIP_NOT_FOUND:
			"You can't perform any operation in this document as you don't own it",
	},
};
