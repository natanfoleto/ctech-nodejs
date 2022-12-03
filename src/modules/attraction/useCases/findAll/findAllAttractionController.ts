import { Request, Response } from 'express';
import { FindAllAttractionUseCase } from './findAllAttractionUseCase';

class FindAllAttractionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const findAllAttractionUseCase = new FindAllAttractionUseCase();

			const response = await findAllAttractionUseCase.execute();

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { FindAllAttractionController };
