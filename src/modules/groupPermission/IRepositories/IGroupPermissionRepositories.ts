import {
	Associate,
	CreateGroupPermission,
} from '@modules/groupPermission/dtos/groupPermission';

interface IGroupPermissionRepositories {
	count(data: Associate): Promise<number>;
	create(data: CreateGroupPermission): Promise<void>;
	delete(id: number): Promise<void>;
	deleteByGroup(id: number): Promise<void>;
	deleteByPermission(id: number): Promise<void>;
}

export { IGroupPermissionRepositories };
