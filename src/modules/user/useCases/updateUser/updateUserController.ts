import { Request, Response } from 'express';

import { UpdateUserUseCase } from '@modules/user/useCases/updateUser/updateUserUseCase';

class UpdateUserController {
	async handle(req: Request, res: Response): Promise<Response> {
		try {
			const updateUserUseCase = new UpdateUserUseCase();

			const { id } = req.params;
			const { name, phone, birthDate } = req.body;

			const response = await updateUserUseCase.execute({
				id: Number(id),
				name,
				phone,
				birthDate,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateUserController };
