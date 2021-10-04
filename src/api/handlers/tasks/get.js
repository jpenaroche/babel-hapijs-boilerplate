import * as Boom from '@hapi/boom';
import { TaskService } from '../../services';

export default async (request) => {
  const service = new TaskService();
  const task = await service.findById(request.params.id);
  if (!task)
    throw Boom.notFound(`Not found task with id: ${request.params.id}`);

  return task;
};
