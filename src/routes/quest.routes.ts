import { Router } from 'express';

import { CreateQuestController } from '@modules/quests/useCase/createQuest/createQuestController';
import { FindAllQuestsController } from '@modules/quests/useCase/findAllQuests/findAllController';
import { UpdateQuestController } from '@modules/quests/useCase/updateQuest/updateController';
import { DeleteQuestController } from '@modules/quests/useCase/deleteQuest/deleteController';

const questRoutes = Router();

questRoutes.post('/', new CreateQuestController().handle);
questRoutes.get('/', new FindAllQuestsController().handle);
questRoutes.put('/:id', new UpdateQuestController().handle);
questRoutes.delete('/:id', new DeleteQuestController().handle);

export { questRoutes };
