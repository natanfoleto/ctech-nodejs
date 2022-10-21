import { AppError } from '@shared/answers/AppError';
import { AppResponse } from '@shared/answers/AppResponse';
import { GroupRepositories } from '@modules/group/repositories/GroupRepositories';
import { PermissionRepositories } from '@modules/permission/repositories/PermissionRepositories';
import { GroupPermissionRepositories } from '@modules/groupPermission/repositories/GroupPermissionRepositories';

interface IRequest {
	id_group: number;
	id_permission: number;
}

class CreateGroupPermissionUseCase {
	groupRepositories: GroupRepositories;
	permissionRepositories: PermissionRepositories;
	groupPermissionRepositories: GroupPermissionRepositories;

	constructor(
		groupRepositories = new GroupRepositories(),
		permissionRepositories = new PermissionRepositories(),
		groupPermissionRepositories = new GroupPermissionRepositories()
	) {
		this.groupRepositories = groupRepositories;
		this.permissionRepositories = permissionRepositories;
		this.groupPermissionRepositories = groupPermissionRepositories;
	}

	async execute({ id_group, id_permission }: IRequest): Promise<any> {
		try {
			const groupFound = await this.groupRepositories.countById(id_group);

			if (!groupFound) {
				return new AppError({
					message: 'Grupo não encontrado',
				});
			}

			const permissionFound = await this.permissionRepositories.findById(
				id_permission
			);

			if (!permissionFound) {
				return new AppError({
					message: 'Permissão não encontrada',
				});
			}

			const associateFound = await this.groupPermissionRepositories.count({
				id_group,
				id_permission,
			});

			if (associateFound) {
				return new AppError({
					message: 'Usuário já está participando deste evento',
				});
			}

			const userEvent = await this.groupPermissionRepositories.create({
				id_group,
				id_permission,
			});

			return new AppResponse({
				message: 'Usuário cadastrado no evento com sucesso!',
				data: userEvent,
			});
		} catch (error) {
			throw new AppError({
				message: 'Internal server error',
				data: error.toString(),
			});
		}
	}
}

export { CreateGroupPermissionUseCase };
