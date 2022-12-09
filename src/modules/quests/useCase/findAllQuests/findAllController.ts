import { Request, Response } from 'express';

import { FindAllQuestsUseCase } from '@modules/quests/useCase/findAllQuests/findAllUseCase';

class FindAllQuestsController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createQuestUseCase = new FindAllQuestsUseCase();

			const response = await createQuestUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllQuestsController };
