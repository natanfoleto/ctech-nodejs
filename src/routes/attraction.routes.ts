import { Router } from 'express';

import { FindAllAttractionController } from '@modules/attraction/useCases/findAll/findAllAttractionController';
import { CreateAttractionController } from '@modules/attraction/useCases/create/createAttractionController';
import { UpdateAttractionController } from '@modules/attraction/useCases/update/updateAttractionController';
import { DeleteAttractionController } from '@modules/attraction/useCases/delete/deleteAttractionController';

const attractionRoutes = Router();

attractionRoutes.get('/', new FindAllAttractionController().handle);
attractionRoutes.post('/', new CreateAttractionController().handle);
attractionRoutes.put('/:id', new UpdateAttractionController().handle);
attractionRoutes.delete('/:id', new DeleteAttractionController().handle);

export { attractionRoutes };
