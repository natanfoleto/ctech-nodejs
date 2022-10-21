import { Router } from 'express';

import { CreateGroupPermissionController } from '@modules/groupPermission/useCases/createGroupPermission/createGroupPermissionController';
import { DeleteGroupPermissionController } from '@modules/groupPermission/useCases/deleteGroupPermission/deleteGroupPermissionController';
import { DeleteByGroupController } from '@modules/groupPermission/useCases/deleteByGroup/deleteByGroupController';
import { DeleteByPermissionController } from '@modules/groupPermission/useCases/deleteByPermission/deleteByPermissionController';

import { authentication } from '@middlewares/authentication';

const groupPermissionRoutes = Router();

groupPermissionRoutes.use(authentication);

groupPermissionRoutes.post('/', new CreateGroupPermissionController().handle);
groupPermissionRoutes.delete(
	'/:id',
	new DeleteGroupPermissionController().handle
);
groupPermissionRoutes.delete(
	'/group/:id',
	new DeleteByGroupController().handle
);
groupPermissionRoutes.delete(
	'/permission/:id',
	new DeleteByPermissionController().handle
);

export { groupPermissionRoutes };
