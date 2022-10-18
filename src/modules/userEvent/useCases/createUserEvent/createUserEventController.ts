import { CreateUserEventUseCase } from '@modules/userEvent/useCases/createUserEvent/createUserEventUseCase';
import { Request, Response } from 'express';

class CreateUserEventController {
	async handle(req: Request, res: Response) {
		try {
			const createUserEventUseCase = new CreateUserEventUseCase();

			const { id_event, id_user } = req.body;

			const response = await createUserEventUseCase.execute({
				id_event,
				id_user,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateUserEventController };
