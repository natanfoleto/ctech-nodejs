import { Request, Response } from 'express';
import { CreateGroupPermissionUseCase } from '@modules/groupPermission/useCases/createGroupPermission/createGroupPermissionUseCase';

class CreateGroupPermissionController {
	async handle(req: Request, res: Response) {
		try {
			const createGroupPermissionUseCase = new CreateGroupPermissionUseCase();

			const { id_group, id_permission } = req.body;

			const response = await createGroupPermissionUseCase.execute({
				id_group,
				id_permission,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { CreateGroupPermissionController };
