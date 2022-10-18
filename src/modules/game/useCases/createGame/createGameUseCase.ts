import { GameRepositories } from '@modules/game/repositories/GameRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	device: string;
	free: number;
	schedules: {
		hourStart: number;
		hourEnd: number;
	}[];
	banner_url: string;
}

class CreateGameUseCase {
	private gameRepositories: GameRepositories;

	constructor(gameRepositories = new GameRepositories()) {
		this.gameRepositories = gameRepositories;
	}

	async execute({
		name,
		device,
		free,
		schedules,
		banner_url,
	}: IRequest): Promise<any> {
		try {
			const user = await this.gameRepositories.create({
				name,
				device,
				free,
				schedules: JSON.stringify(schedules),
				banner_url,
			});

			return new AppResponse({
				message: 'Game criado com sucesso',
				data: user,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateGameUseCase };
