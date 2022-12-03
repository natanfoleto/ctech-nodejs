import { Request, Response } from 'express';
import { UpdateAttractionUseCase } from './updateAttractionUseCase';

class UpdateAttractionController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const updateAttractionUseCase = new UpdateAttractionUseCase();

			const { id } = req.params;

			const { name, description } = req.body;

			const response = await updateAttractionUseCase.execute({
				id: Number(id),
				name,
				description,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateAttractionController };
