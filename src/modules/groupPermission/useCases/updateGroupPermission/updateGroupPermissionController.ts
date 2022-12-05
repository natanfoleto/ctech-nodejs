import { Request, Response } from 'express';
import { UpdateGroupPermissionUseCase } from '@modules/groupPermission/useCases/updateGroupPermission/updateGroupPermissionUseCase';

class UpdateGroupPermissionController {
	async handle(req: Request, res: Response) {
		try {
			const updateGroupPermissionUseCase = new UpdateGroupPermissionUseCase();

			const { permissions } = req.body;

			const { id } = req.params;

			const response = await updateGroupPermissionUseCase.execute({
				id_group: Number(id),
				permissions,
			});

			return res.json(response);
		} catch (error) {
			return res.status(500).json(error);
		}
	}
}

export { UpdateGroupPermissionController };
