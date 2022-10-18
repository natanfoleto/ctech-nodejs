import { Router } from 'express';

import { CreateGameController } from '@modules/game/useCases/createGame/createGameController';
import { FindAllGamesController } from '@modules/game/useCases/findAllGames/findAllGamesController';

import { authentication } from '@middlewares/authentication';

const gameRoutes = Router();

gameRoutes.use(authentication);

gameRoutes.post('/', new CreateGameController().handle);
gameRoutes.get('/', new FindAllGamesController().handle);

export { gameRoutes };
