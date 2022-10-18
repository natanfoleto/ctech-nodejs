import { Router } from 'express';

import { userRoutes } from './user.routes';
import { authenticateRoutes } from './authenticate.routes';
import { eventRoutes } from './event.routes';
import { userEventRoutes } from './user.event.routes';
import { gameRoutes } from './game.routes';

const router = Router();

router.use('/user', userRoutes);
router.use('/session', authenticateRoutes);
router.use('/event', eventRoutes);
router.use('/userevent', userEventRoutes);
router.use('/game', gameRoutes);

export { router };
