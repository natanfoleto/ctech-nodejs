import { Request, Response } from 'express';

import { FindAllQuestUseCase } from './findAllUseCase';

class FindAllController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const createQuestUseCase = new FindAllQuestUseCase();

			const response = await createQuestUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllController };
