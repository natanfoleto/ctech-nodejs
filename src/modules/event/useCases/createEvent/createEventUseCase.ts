import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	name: string;
	notes: string;
	bannerUrl: string;
}

class CreateEventUseCase {
	private eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute({ name, notes, bannerUrl }: IRequest): Promise<any> {
		try {
			const eventFound = await this.eventRepositories.countByName(name);

			if (eventFound)
				return new AppError({
					message: 'Ja existe um evento com este nome',
				});

			const event = await this.eventRepositories.create({
				name,
				notes,
				banner_url: bannerUrl,
			});

			return new AppResponse({
				message: 'Evento criado com sucesso',
				data: event,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateEventUseCase };
