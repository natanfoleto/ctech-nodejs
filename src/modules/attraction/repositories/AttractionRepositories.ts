import {
	CreateAttraction,
	Attraction,
	UpdateAttraction,
} from '../dto/attraction';
import { IAttractionRepositories } from '../IRepositories/IAttractionRepositories';

import prisma from 'src/libs/prismaClient';

export class AttractionRepositories implements IAttractionRepositories {
	async findAll(): Promise<Attraction[]> {
		return prisma.attractions.findMany();
	}

	async countByName(name: string): Promise<number> {
		return prisma.attractions.count({
			where: {
				name,
			},
		});
	}

	async create(data: CreateAttraction): Promise<Attraction> {
		return await prisma.attractions.create({
			data,
		});
	}

	async update({ id, name, description }: UpdateAttraction): Promise<void> {
		await prisma.attractions.update({
			where: { id },
			data: {
				name,
				description,
			},
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.attractions.delete({
			where: { id },
		});
	}
}
