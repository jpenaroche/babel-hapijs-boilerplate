import * as Boom from '@hapi/boom';
import { TaskService } from '../../services';

export default async (request) => {
  const service = new TaskService();

  return service.findByIdAndDelete(request.params.id);
};
