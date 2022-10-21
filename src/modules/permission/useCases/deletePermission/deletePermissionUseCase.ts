import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';

interface IRequest {
	id: number;
}

class DeletePermissionUseCase {
	private permissionRepositories: PermissionRepositories;

	constructor(permissionRepositories = new PermissionRepositories()) {
		this.permissionRepositories = permissionRepositories;
	}

	async execute({ id }: IRequest): Promise<any> {
		try {
			const permissionFound = await this.permissionRepositories.countById(id);

			if (!permissionFound)
				return new AppError({
					message: `Nenhuma permissão encontrada com esse id(${id})`,
				});

			await this.permissionRepositories.delete(id);

			return new AppResponse({ message: 'Permissão deletada' });
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { DeletePermissionUseCase };
