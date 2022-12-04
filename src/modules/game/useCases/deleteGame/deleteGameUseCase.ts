import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GameRepositories } from '@modules/game/repositories/GameRepositories';

interface IRequest {
	id: number;
}

class DeleteGameUseCase {
	gameRepositories: GameRepositories;

	constructor(gameRepositories = new GameRepositories()) {
		this.gameRepositories = gameRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const gameFound = await this.gameRepositories.countById(id);

			if (!gameFound)
				return new AppError({
					message: `Nenhum game encontrado com esse id(${id})`,
				});

			await this.gameRepositories.delete(id);

			return new AppResponse({ message: 'Game deletado' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeleteGameUseCase };
