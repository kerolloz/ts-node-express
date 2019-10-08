import { Request } from 'express';
/**
 * returns an object with sort on createdAt and page default to 1 if not specified,
 *  and limit default to 10 if not specified.
 * @param req
 * @param customLabels
 */
export function getPaginationOptions(req: Request, customLabels?: object): {} {
  return {
    page: parseInt(req.query.page, 10) || 1,
    limit: parseInt(req.query.limit, 10) || 10,
    sort: {
      createdAt: -1,
    },
    customLabels,
  };
}
