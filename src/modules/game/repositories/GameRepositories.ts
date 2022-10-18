import prisma from '@libs/prismaClient';

import { Game, CreateGame } from '@modules/game/dtos/game';

import { IGameRepositories } from '@modules/game/IRepositories/IGameRepositories';

class GameRepositories implements IGameRepositories {
	async create(data: CreateGame): Promise<Game> {
		return prisma.games.create({ data });
	}

	async countById(id: number): Promise<number> {
		return prisma.games.count({
			where: { id },
		});
	}

	async findById(id: number): Promise<Game> {
		return prisma.games.findFirst({
			where: { id },
		});
	}

	async findAll(): Promise<Game[]> {
		return prisma.games.findMany();
	}

	async delete(id: number): Promise<void> {
		await prisma.games.delete({
			where: { id },
		});
	}
}

export { GameRepositories };
