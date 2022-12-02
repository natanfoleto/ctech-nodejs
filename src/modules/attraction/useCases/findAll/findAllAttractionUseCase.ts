import { Attraction } from '@modules/attraction/dto/attraction';
import { AttractionRepositories } from '@modules/attraction/repositories/AttractionRepositories';
import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';

class FindAllAttractionUseCase {
	private attractionRepositories: AttractionRepositories;

	constructor(attractionRepositories = new AttractionRepositories()) {
		this.attractionRepositories = attractionRepositories;
	}

	async execute(): Promise<any> {
		try {
			const attractions = await this.attractionRepositories.findAll();

			return new AppResponse({
				data: attractions,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { FindAllAttractionUseCase };
