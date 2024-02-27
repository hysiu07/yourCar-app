import Joi from 'joi';
import crypto from 'crypto';
import airDB from '../airtableClient';

const schema = Joi.object({
	password: Joi.string().required(),
	email: Joi.string().email().required(),
});

const authorize = async (payload) => {
	const { email, password } = await schema.validateAsync(payload);
	const [user] = await airDB('users')
		.select({ filterByFormula: `email="${email}"` })
		.firstPage();

	if (!user) {
		return null;
	}
	const passwordSalt: string = user.fields.passwordSalt?.toString() || '';
	const passwordHash = crypto
		.pbkdf2Sync(password.toString(), passwordSalt, 1000, 64, 'sha512')
		.toString('hex');

	if (passwordHash !== user.fields.passwordHash) {
		return null;
	} else {
	}

	return {
		id: user.id,
		email: user.fields.email,
		username: user.fields.username,
		role: user.fields.role,
	};
};
export default authorize;
