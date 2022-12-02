import { EventRepositories } from '@modules/event/repositories/EventRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

interface IRequest {
	id: number;
	name: string;
	notes: string;
	bannerUrl: string;
}

class UpdateEventUseCase {
	eventRepositories: EventRepositories;

	constructor(eventRepositories = new EventRepositories()) {
		this.eventRepositories = eventRepositories;
	}

	async execute({ id, name, notes, bannerUrl }: IRequest): Promise<any> {
		try {
			const eventFound = await this.eventRepositories.countById(id);

			if (!eventFound)
				return new AppError({ message: 'Evento não encontrado!' });

			if (!name)
				return new AppError({ message: 'O evento não pode estar vazio' });

			const event = await this.eventRepositories.update({
				id,
				name,
				notes,
				banner_url: bannerUrl,
			});

			return new AppResponse({ data: event });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { UpdateEventUseCase };
