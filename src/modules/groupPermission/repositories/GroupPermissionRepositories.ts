import prisma from '@libs/prismaClient';

import { IGroupPermissionRepositories } from '@modules/groupPermission/IRepositories/IGroupPermissionRepositories';
import { CreateGroupPermission } from '@modules/groupPermission/dtos/groupPermission';

class GroupPermissionRepositories implements IGroupPermissionRepositories {
	async count({ id_group, id_permission }): Promise<number> {
		return prisma.group_permission.count({
			where: { AND: { id_group, id_permission } },
		});
	}

	async create({
		id_group,
		id_permission,
	}: CreateGroupPermission): Promise<void> {
		await prisma.group_permission.create({
			data: { id_group, id_permission },
		});
	}

	async delete(id: number): Promise<void> {
		await prisma.group_permission.deleteMany({
			where: { id },
		});
	}

	async deleteByGroup(id: number): Promise<void> {
		await prisma.group_permission.deleteMany({
			where: { group: { id } },
		});
	}

	async deleteByPermission(id: number): Promise<void> {
		await prisma.group_permission.deleteMany({
			where: { permission: { id } },
		});
	}
}

export { GroupPermissionRepositories };
