import exp from 'express';
import APIResponse from '../utils/APIResponse';

const router = exp.Router();

router.get('/ping', (_, res) => APIResponse.Ok(res, { message: 'pong' }))

// 404
router.all('*', (_, res) => APIResponse.NotFound(res));

export default router;
