import env from '@config/config';
import { sign } from 'jsonwebtoken';
import { UserRepositories } from '@modules/user/repositories/UserRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { checkPassword } from '@utils/bcrypt';

interface IRequest {
	username: string;
	password: string;
}

class AuthenticateUserUseCase {
	private userRepositories: UserRepositories;

	constructor(userRepositories = new UserRepositories()) {
		this.userRepositories = userRepositories;
	}

	async execute({ username, password }: IRequest): Promise<any> {
		try {
			const user = await this.userRepositories.findByUsername(username);

			if (!user)
				return new AppError({
					message: 'Login ou senha incorretos',
				});

			const passwordMatch = await checkPassword(password, user.password_hash);

			if (!passwordMatch)
				return new AppError({
					message: 'Login ou senha incorretos',
				});

			const tokenPayload = {
				sub: user.id,
				iss: env.JWT_ISSUER,
			};

			const token = sign({ tokenPayload }, env.JWT_SECRET_TOKEN, {
				subject: user.username,
				expiresIn: env.JWT_EXPIRES_IN,
			});

			const refresh_token = sign(
				{ tokenPayload },
				env.JWT_SECRET_REFRESH_TOKEN,
				{ expiresIn: env.JWT_REFRESH_TOKEN_EXPIRES_IN }
			);

			return new AppResponse({
				message: 'Usuário logado com sucesso',
				data: {
					token,
					refresh_token,
					user: {
						id: user.id,
						username: user.username,
						name: user.name,
						birthDate: user.birth_date,
						phone: user.phone,
						createdAt: user.created_at,
					},
				},
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { AuthenticateUserUseCase };
