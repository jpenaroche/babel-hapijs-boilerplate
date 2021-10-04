import * as Boom from '@hapi/boom';
import { TaskService } from '../../services';

export default async (request, h) => {
  const service = new TaskService();
  const id = request.params.id;
  let task = request.payload.task;
  const result = await service.updateOneById(id, task);
  if (!result) throw Boom.notFound(`There is no task with id: ${id}`);
  return h.response({ task }).code(200);
};
