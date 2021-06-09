import exp from 'express';

const router = exp.Router();

router.get('/ping', (_, res) => res.json({ message: 'pong' }));

// 404
router.all('*', (_, res) => res.sendStatus(404));

export default router;
