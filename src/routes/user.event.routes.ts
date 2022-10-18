import { Router } from 'express';

import { CreateUserEventController } from '@modules/userEvent/useCases/createUserEvent/createUserEventController';
import { FindByNameController } from '@modules/userEvent/useCases/findByName/findByNameController';
import { FindByEventNameController } from '@modules/userEvent/useCases/findByEventName/findByEventNameController';
import { FindByUsernameController } from '@modules/userEvent/useCases/findByUsername/findByUsernameController';
import { DeleteUserEventController } from '@modules/userEvent/useCases/deleUserEvent/deleteUserEventController';
import { DeleteByUserController } from '@modules/userEvent/useCases/deleteByUser/deleteByUserController';
import { DeleteByEventController } from '@modules/userEvent/useCases/deleteByEvent/deleteByEventController';

import { authentication } from '@middlewares/authentication';

const userEventRoutes = Router();

userEventRoutes.use(authentication);

userEventRoutes.get('/user/:id', new FindByNameController().handle);
userEventRoutes.post('/user/name', new FindByNameController().handle);
userEventRoutes.post('/user/username', new FindByUsernameController().handle);
userEventRoutes.post('/event/name', new FindByEventNameController().handle);

userEventRoutes.post('/', new CreateUserEventController().handle);
userEventRoutes.delete('/:id', new DeleteUserEventController().handle);
userEventRoutes.delete('/user/:id', new DeleteByUserController().handle);
userEventRoutes.delete('/event/:id', new DeleteByEventController().handle);

export { userEventRoutes };
