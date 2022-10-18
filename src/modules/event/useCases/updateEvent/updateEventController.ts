import { UpdateEventUseCase } from '@modules/event/useCases/updateEvent/updateEventUseCase';
import { Request, Response } from 'express';

class UpdateEventController {
	async handle(req: Request, res: Response) {
		try {
			const updateEventUseCase = new UpdateEventUseCase();

			const { id } = req.params;
			const { name, notes, bannerUrl, insignia, competition } = req.body;

			const response = await updateEventUseCase.execute({
				id: Number(id),
				name,
				notes,
				bannerUrl,
				insignia,
				competition,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateEventController };
