import exp from 'express';

const router = exp.Router();

// 404
router.all('*', (_, res) =>
  res.status(404).json({message: '🤔 Are you lost ?!'}),
);

export default router;
