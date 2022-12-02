import { Router } from 'express';

import { CreateQuestController } from '@modules/quests/useCase/create/createQuestController';
import { FindAllController } from '@modules/quests/useCase/findAll/findAllController';
import { UpdateQuestController } from '@modules/quests/useCase/update/updateController';
import { DeleteQuestController } from '@modules/quests/useCase/delete/deleteController';

const questRoutes = Router();

questRoutes.post('/', new CreateQuestController().handle);
questRoutes.get('/', new FindAllController().handle);
questRoutes.put('/:id', new UpdateQuestController().handle);
questRoutes.delete('/:id', new DeleteQuestController().handle);

export { questRoutes };
